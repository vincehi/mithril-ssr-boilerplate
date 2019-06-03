const m = require('mithril');
const routes = require('./common/routes');
const Layout = require('./components/Layout');


const clientRoutes = {};

Object.keys(routes).forEach((route) => {
    clientRoutes[route] = {
        onmatch: (args, requestedPath) => {
            console.log(requestedPath)
            return routes[route].onmatch ? routes[route].onmatch(attrs, requestedPath) : routes[route]
        },
        render: vnode => {
            return m(Layout, vnode)
        }
    };
});


m.route.prefix('');
m.route(document.body, '/', clientRoutes);
