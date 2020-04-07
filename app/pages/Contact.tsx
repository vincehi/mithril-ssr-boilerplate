import m from 'mithril';
import contentManager from '../common/content-manager';

interface Stateman {
  get: (url: string) => object;
  set: (url: string) => void;
}

export interface Attrs {
  stateman: Stateman;
}

export default class Contact implements m.ClassComponent<Attrs> {
  static title = 'contact title';

  private content: {
    name: {
      first: string;
    };
  };

  private readonly stateman: Stateman;

  constructor({ attrs: { stateman } }: m.CVnode<Attrs>) {
    this.content = {
      name: {
        first: '',
      },
    };
    this.stateman = stateman;
  }

  oninit(
    vnode: m.CVnode<Attrs>,
    waitFor = (state: Promise<object>): object => state,
  ): void {
    waitFor(
      new Promise((resolve) => {
        contentManager.bind(this)('https://randomuser.me/api/', this.stateman, resolve);
      }),
    );
  }

  view(): m.Children {
    return (
      <div>
        {this.content.name.first
          ? [
            <div>
              {this.content.name.first}
            </div>,
          ] : 'loading'}
        Contenu de la page Contact !
      </div>
    );
  }
}
