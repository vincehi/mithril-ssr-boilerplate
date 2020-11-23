declare module "mithril-node-render" {
  import m from "mithril";

  function render(
    component: m.Children,
    options?: {
      escapeAttribute?: (vnode: string) => string;
      escapeText?: (vnode: string) => string;
      xml?: boolean;
    }
  ): Promise<m.Children>;

  export = render;
}
