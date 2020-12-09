import m from "mithril";
import { SSRData } from "@urql/core/dist/types/exchanges/ssr";
import Layout from "../components/Layout/Layout";
import routes from "../common/routes";

import { ssr } from "../common/urql";
import test from "../common/test";

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
      onmatch: async () => {
        return val.module();
      },
      render: (vnode) => {
        document.title = test.title;
        return m(Layout, vnode);
      },
    } as m.RouteResolver,
  ])
);

m.route(document.querySelector("#mainContent") as HTMLElement, "/", clientRoutes);
