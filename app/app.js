const m = require('mithril');
const routes = require('./common/routes');

const clientRoutes = {};

Object.keys(routes).forEach((route) => {
    clientRoutes[route] = {
        onmatch: (args, requestedPath) => {
            routes[route].onmatch ? routes[route].onmatch(attrs, requestedPath) : routes[route]
        },
        render: vnode => {
            vnode
        }
    };
});

m.route.prefix('');
m.route(document.getElementById('mainContent'), '/', clientRoutes);
