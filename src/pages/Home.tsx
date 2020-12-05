import m from "mithril";
import { OperationResult } from "@urql/core/dist/types/types";
import { SSRExchange } from "@urql/core/dist/types/exchanges/ssr";
import { client } from "../common/urql";
import test from "../common/test";

const request = `
  {
    episode(id: 1) {
      id,
      name,
      air_date,
      episode,
      characters {
        name,
      },
      created
    }
  }
`;

interface RequestData {
  episode: {
    episode: string;
    name: string;
  };
}

export default class Home implements m.ClassComponent {
  query: OperationResult<RequestData> | null;

  constructor() {
    this.query = client.readQuery(request);
  }

  oninit(vnode: m.CVnode, waitFor: (state: Promise<void>) => void = () => {}): void {
    waitFor(
      (async () => {
        this.query = await new Promise((resolve) => {
          test.title = "home page";
          resolve(client.query(request, {}).toPromise());
        });
        if (process.env.BROWSER_ENV) m.redraw();
      })()
    );
  }

  view(): m.Children {
    return (
      <div>
        <div>{this.query?.data?.episode.episode || "Loading"}</div>
        Contenu de la page Homepage !
      </div>
    );
  }
}
