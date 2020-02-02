const m = require('./common/m');
// const m = require('./common/m');
const Layout = require('./components/Layout');
import routes from './common/routes';
const stateManager = require('./common/stateman.js');

let sharedState = window.__preloadedState || {};

// Get app state from server shared state
const stateman = Object.create(stateManager);
stateman.init(sharedState);

const clientRoutes = {};

let attrs = { stateman };
Object.keys(routes).forEach((route) => {
    clientRoutes[route] = {

        onmatch: (args, requestedPath, route) => {
            return routes[route].component().then(resp => {
                return resp
            });
        },

        render: function(vnode) {
            Object.assign(vnode.attrs, attrs);
            return m(Layout, vnode)
        }
    };
});

m.route(document.getElementById('mainContent'), '/', clientRoutes);
