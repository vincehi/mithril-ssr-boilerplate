const m = require('mithril');
const Layout = require('./components/Layout');
const routes = require('./common/routes');
const stateManager = require('./common/stateman.js');

let sharedState = window.__preloadedState || {};
const stateman = Object.create(stateManager);
stateman.init(sharedState);

const clientRoutes = {};

let attrs = { stateman };
Object.keys(routes).forEach((route) => {
    clientRoutes[route] = {

        onmatch: (args, requestedPath, route) => {
            return routes[route].module().then(resp => {
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
