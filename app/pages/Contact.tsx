import m from 'mithril';
import contentManager from '../common/contentManager';

interface Attrs {
  stateman: object;
}

interface State {
  content: {
    name: {
      first: string;
    };
  };
}

export default class Contact implements m.ClassComponent<Attrs> {
  static title = 'contact title';

  oninit(vnode: m.CVnode<Attrs>, waitFor = (state: Promise<object>) => state): Promise<object> {
    return (
      waitFor(
        new Promise((resolve) => {
          const { attrs: { stateman } } = vnode;
          // Result in vnode.state.content
          contentManager.bind(vnode.state)('https://randomuser.me/api/', stateman, resolve);
        }),
      )
    );
  }

  view(vnode: m.CVnode<Attrs>): m.Children {
    return (
      <div>
        {vnode.state.content
          ? [
            <div>
              {vnode.state.content.name.first}
            </div>,
          ] : 'loading'}
        Contenu de la page Contact !
      </div>
    );
  }
}
