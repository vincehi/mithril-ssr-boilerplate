import m from 'mithril';

const request = `
    {
        pokemon(name: "Pikachu") {
            id
            number
            name
            attacks {
                special {
                    name
                    type
                    damage
                }
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
            ? this.query.data.pokemon.name
            : 'Loading'}
        </div>
        Contenu de la page Homepage !
      </div>
    );
  }
}
