declare module 'mithril-node-render' {
  import m from 'mithril';

  function render<COMPONENT = {}, OPTIONS = {}>(
    component: COMPONENT,
    options: OPTIONS,
  ): Promise<m.Component>;

  export = render;
}
