import m from "mithril";
import { OperationResult } from "@urql/core/dist/types/types";
import { SSRExchange } from "@urql/core/dist/types/exchanges/ssr";
import { Client } from "@urql/core";
import { client } from "../common/urql";

const request = `
    {
        getCityByName(name: "Gothenburg") {
        id
        name
        country
        coord {
          lon
          lat
        }
      }
    }
`;

interface Attrs {
  client: Client;
  ssr: SSRExchange;
}

interface RequestData {
  getCityByName: {
    name: string;
  };
}

export default class Home implements m.ClassComponent<Attrs> {
  query: OperationResult<RequestData> | null;

  constructor() {
    this.query = client.readQuery(request);
  }

  oninit(vnode: m.CVnode<Attrs>, waitFor: (state: Promise<void>) => void = () => {}): void {
    waitFor(
      (async () => {
        this.query = await new Promise((resolve) => {
          resolve(client.query(request, {}).toPromise());
        });
        if (process.env.BROWSER_ENV) m.redraw();
      })()
    );
  }

  view(): m.Children {
    return (
      <div>
        <div>{this.query?.data?.getCityByName.name || "Loading"}</div>
        Contenu de la page Homepage !
      </div>
    );
  }
}
