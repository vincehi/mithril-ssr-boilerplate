import m from 'mithril';
import { pipe, subscribe } from 'wonka';

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

export default class Home implements m.Component {
  query: () => any;
  oninit(
    { attrs: { client } },
    waitFor = (state: Promise<object>): object => state,
  ) {
    waitFor(
      new Promise((resolve) => {

        client
          .query(request, {
            /* vars */
          })
          .toPromise()
          .then(result => {
            resolve(this.query = result);
            if (process.env.BROWSER_ENV) {
              m.redraw();
            }
          });

      }),
    );
  }
  view(): m.Children {
    return (
      <div>
        <div>
          {this.query
            ? this.query.data.getCityByName.name
            : 'Loading'}
          {console.log(this.query)}
        </div>
        Contenu de la page Homepage !
      </div>
    );
  }
}
