const m = require('mithril');
const routes = require('./common/routes');


const clientRoutes = {};

Object.keys(routes).forEach((route) => {
    clientRoutes[route] = {
        render: vnode => {
            return routes[route]
        }
    };
});

m.route.prefix('');
m.route(document.getElementById('mainContent'), '/', clientRoutes);
