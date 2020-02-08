import m from '../common/m';
import contentManager from '../common/contentManager';

export default {
  data: {
    title: 'contact'
  },
  oninit: (vnode, waitFor = () => null) => waitFor(new Promise((resolve) => {
    const { attrs: { stateman } } = vnode;

    // Result in vnode.state.content
    contentManager.bind(vnode.state)('https://randomuser.me/api/', stateman, resolve);
  })),
  view: (vnode) => {
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
