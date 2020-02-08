import m from './common/m';
import Layout from './components/Layout';
import routes from './common/routes';
import stateManager from './common/stateman.js';

let sharedState = window.__preloadedState || {};
const stateman = Object.create(stateManager);
stateman.init(sharedState);

const clientRoutes = {};

console.log(m);

let attrs = { stateman };
Object.keys(routes).forEach((route) => {
    console.log(routes);
    clientRoutes[route] = {

        onmatch: (args, requestedPath, route) => {
            return routes[route].module().then(resp => {
                console.log(resp)
                return resp
            });
        },

        render: function(vnode) {
            Object.assign(vnode.attrs, attrs);
            document.title = vnode.tag.data.title;
            return m(Layout, {module: {tag: vnode.tag, stateman: vnode.attrs.stateman}})
        }
    };
});

m.route(document.getElementById('mainContent'), '/', clientRoutes);
