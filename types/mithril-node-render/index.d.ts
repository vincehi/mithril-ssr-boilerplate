declare module 'mithril-node-render' {
  import m from 'mithril';

  function render<COMPONENT = {}>(
    component: COMPONENT,
    options?: {
      escapeAttribute?: (vnode: string) => string;
      escapeText?: (vnode: string) => string;
      xml?: boolean;
    },
  ): Promise<m.Component>;

  export = render;
}
