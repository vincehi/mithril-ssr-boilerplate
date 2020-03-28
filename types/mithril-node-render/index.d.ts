declare module 'mithril-node-render' {
  import m from 'mithril';

  function render<O = object>(component: m.ComponentTypes, options: O): Promise<m.Component>;

  export = render;
}
