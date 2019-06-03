const m = require('mithril');
const routes = require('./common/routes');

const clientRoutes = {};

Object.keys(routes).forEach((route) => {
    clientRoutes[route] = {
        onmatch: (args, requestedPath) => {
            return routes[route].onmatch ? routes[route].onmatch(attrs, requestedPath) : routes[route]
        },
        render: (vnode) => {
            return vnode
        }
    };
});

m.route.prefix('');
m.route(document.getElementById('mainContent'), '/', clientRoutes);

console.log("Je suis bien chargé !")
