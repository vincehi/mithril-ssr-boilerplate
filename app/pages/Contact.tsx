import m from 'mithril';
import contentManager from '../common/content-manager';

interface Stateman {
  get: (url: string) => object;
  set: (url: string) => void;
}

interface Attrs {
  stateman: Stateman;
}

interface State {
  content: {
    name?: {
      first: string;
    };
  };
}

export default class Contact implements m.ClassComponent<Attrs> {
  static title = 'contact title';

  private state: State;

  constructor() {
    this.state = {
      content: {},
    };
  }

  oninit(
    { attrs: { stateman } }: m.CVnode<Attrs>,
    waitFor = (state: Promise<object>): object => state,
  ): void {
    waitFor(
      new Promise((resolve) => {
        contentManager.bind(this)('https://randomuser.me/api/', stateman, resolve);
      }),
    );
  }

  view(): m.Children {
    return (
      <div>
        {this.state.content.name
          ? [
            <div>
              {this.state.content.name.first}
            </div>,
          ] : 'loading'}
        Contenu de la page Contact !
      </div>
    );
  }
}
