import m from 'mithril';
import contentManager from '../common/contentManager';

export default class Contact implements m.ClassComponent {
  static title = "contact title";
  oninit(vnode:m.CVnode, waitFor = () => null) {
    return (
      waitFor(
        new Promise((resolve) => {
          const { attrs: { stateman } } = vnode;
          // Result in vnode.state.content
          contentManager.bind(vnode.state)('https://randomuser.me/api/', stateman, resolve);
        })
      )
    )
  };
  view(vnode) {
    return (
      <div>
        {vnode.state.content
          ? [
            <div>
              {vnode.state.content.name.first}
            </div>
          ] : 'loading'
        }
        Contenu de la page Contact !
      </div>
    );
  }
};
