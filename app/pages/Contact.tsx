import m from 'mithril';
import contentManager from '../common/content-manager';

interface Stateman {
  state: {
    [content: string]: object;
  };
}

export interface Attrs {
  stateman: Stateman;
}

export default class Contact implements m.ClassComponent<Attrs> {
  static title = 'contact title';

  oninit(
    { attrs: { stateman } },
    waitFor = (state: Promise<object>): object => state,
  ): void {
    waitFor(
      new Promise((resolve) => {
        contentManager(stateman, 'https://randomuser.me/api/', 'contact', resolve);
      }),
    );
  }

  view({ attrs: { stateman } }): m.Children {
    return (
      <div>
        {stateman().contact ? (
          <div>
            {stateman().contact.results[0].name.first}
          </div>
        ) : (
          'loading'
        )}
        Contenu de la page Contact !
      </div>
    );
  }
}
