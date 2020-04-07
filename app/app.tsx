import m from 'mithril';
import Layout from './components/Layout/Layout';
import routes from './common/routes';
import StateManager from './common/stateman';

interface Attrs {
  stateman: object;
}

declare global {
  interface Window {
    preloadedState: object;
  }
}

const stateman = new StateManager(window.preloadedState || {});

const clientRoutes: m.RouteDefs = {};
Object.keys(routes).forEach((route: string) => {
  clientRoutes[route] = {

    onmatch: () => routes[route].module.then((resp) => resp),

    render: (vnode) => {
      Object.assign(vnode.attrs, { stateman });
      document.title = (vnode.tag as m.Comp<object, {title: string}>).title;
      return m(Layout, { stateman }, vnode);
    },
  } as m.RouteResolver<Attrs>;
});

m.route(document.querySelector('#mainContent') as HTMLElement, '/', clientRoutes);
