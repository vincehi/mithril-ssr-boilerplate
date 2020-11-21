import m from 'mithril';
import { OperationResult } from '@urql/core/dist/types/types';
import { SSRExchange } from '@urql/core/dist/types/exchanges/ssr';
import { Client } from '@urql/core';

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

export default class Home implements m.ClassComponent<Attrs> {
  query: OperationResult | null;

  constructor(
    { attrs: { client } }: m.CVnode<Attrs>,
    waitFor: (state: Promise<Record<string, unknown>>) => OperationResult = (
      state: Promise<Record<string, unknown>>,
    ): any => state,
  ) {
    this.query = client.readQuery(request);
    waitFor(
      new Promise(async (resolve) => {
        console.log(this.query);
        this.query = await client.query(request, {}).toPromise();
        resolve();
        if (process.env.BROWSER_ENV) m.redraw();
      }),
    );
  }

  view(): m.Children {
    return (
      <div>
        <div>{this.query ? this.query.data.getCityByName.name : 'Loading'}</div>
        Contenu de la page Homepage !
      </div>
    );
  }
}
