import m from "mithril";
import { SSRData } from "@urql/core/dist/types/exchanges/ssr";
import Layout from "../components/Layout/Layout";
import routes from "../common/routes";

import { ssr, client } from "../common/urql";

declare global {
  interface Window {
    urqlData: SSRData;
  }
}

ssr.restoreData(window.urqlData);

const clientRoutes: m.RouteDefs = Object.fromEntries(
  Object.entries(routes).map(([route, val]) => [
    route,
    {
      onmatch: async () => val.module(),
      render: (vnode) => {
        Object.assign(vnode.attrs, { ssr, client });
        // document.title = (vnode.tag as m.Comp<object, {title: string}>).title;
        return m(Layout, vnode);
      },
    } as m.RouteResolver,
  ])
);

m.route(document.querySelector("#mainContent") as HTMLElement, "/", clientRoutes);
