/**
 * For Delay script in VDOM.
 * I put that in Component
 */

import m from 'mithril';

interface Attrs {
  stateman: {
    getString: () => object;
  };
}

export default class implements m.ClassComponent<Attrs> {
  view({ attrs: { stateman } }: m.Vnode<Attrs>): m.Children {
    return (
      <script>
        {`window.preloadedState = ${stateman.getString()}`}
      </script>
    );
  }
}
