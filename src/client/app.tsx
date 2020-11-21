import m from 'mithril';
// import stream from 'mithril/stream';
import Layout from '../components/Layout/Layout';
import routes from '../common/routes';

import { ssr, client } from '../common/urql';
import {SSRData} from "@urql/core/dist/types/exchanges/ssr";

interface Attrs {
  stateman: object;
}

declare global {
  interface Window {
    preloadedState: object;
    __URQL_DATA__: SSRData
  }
}

ssr.restoreData(window.__URQL_DATA__);

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
    } as m.RouteResolver<Attrs>,
  ]),
);

m.route(document.querySelector('#mainContent') as HTMLElement, '/', clientRoutes);
