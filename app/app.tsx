import m from 'mithril';
import Layout from './components/Layout/Layout';
import routes from './common/routes';
import stateManager from './common/stateman';


interface Attrs {
  stateman: object;
  tag: any;
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
      console.log(vnode)
      // Object.assign(vnode.attrs, attrs);
      // document.title = (vnode.tag as m.Comp<object, {title: string}>).title;
      document.title = vnode.tag.title;
      console.log(vnode);
      return m(Layout, { stateman: vnode.attrs.stateman }, vnode);
    },
  } as m.RouteResolver<Attrs>;
});

m.route(document.querySelector('#mainContent') as HTMLElement, '/', clientRoutes);
