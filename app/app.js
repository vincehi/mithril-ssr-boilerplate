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
            console.log('premier')
            return routes[route].component().then(resp => {
                // resp.view().attrs = 'attrs'
                return resp
            });
        },

        render: function(vnode) {
            Object.assign(vnode.attrs, attrs);
            return m(Layout, vnode)
        }
    };
});



m.route.prefix = '';
m.route(document.getElementById('mainContent'), '/', clientRoutes);
