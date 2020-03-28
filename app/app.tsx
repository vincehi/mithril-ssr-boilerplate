import m from 'mithril';
import Layout from './components/Layout';
import routes from './common/routes';
import stateManager from './common/stateman';

declare global {
  interface Window {
    preloadedState: () => void;
  }
}

interface Attrs {
  stateman: object;
}

interface State {
  title: string;
}

const sharedState = window.preloadedState || {};
const stateman = Object.create(stateManager);
stateman.init(sharedState);

const clientRoutes: m.RouteDefs = {};

const attrs = { stateman };
Object.keys(routes).forEach((route: string) => {
  clientRoutes[route] = {

    onmatch: () => routes[route].module().then((resp: m.Component) => resp),

    render: (vnode) => {
      Object.assign(vnode.attrs, attrs);
      document.title = (vnode.tag as m.Comp<object, State>).title;
      return m(Layout, { module: { tag: vnode.tag, stateman: vnode.attrs.stateman } });
    },
  } as m.RouteResolver<Attrs, State>;
});

m.route(document.querySelector('#mainContent') as HTMLElement, '/', clientRoutes);
