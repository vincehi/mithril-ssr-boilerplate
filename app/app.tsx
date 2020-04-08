import m from 'mithril';
import stream from 'mithril/stream';
import Layout from './components/Layout/Layout';
import routes from './common/routes';

interface Attrs {
  stateman: object;
}

declare global {
  interface Window {
    preloadedState: object;
  }
}
const preloadState = JSON.parse(JSON.stringify(window.preloadedState || {}));
const stateman = stream(preloadState || {});

if (process.env.DEBUG) {
  import('meiosis-tracer').then(({ default: meiosisTracere }) => {
    return meiosisTracere({ selector: '#tracer', streams: [stateman] });
  });
}

const clientRoutes: m.RouteDefs = {};
Object.keys(routes).forEach((route: string) => {
  clientRoutes[route] = {

    onmatch: () => routes[route].module.then((resp) => resp),

    render: (vnode) => {
      Object.assign(vnode.attrs, { stateman });
      document.title = (vnode.tag as m.Comp<object, {title: string}>).title;
      return m(Layout, vnode);
    },
  } as m.RouteResolver<Attrs>;
});

m.route(document.querySelector('#mainContent') as HTMLElement, '/', clientRoutes);
