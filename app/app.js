const m = require('mithril');
const Layout = require('./components/Layout');
const routes = require('./common/routes');
//
//
// const clientRoutes = {};
//
// Object.keys(routes).forEach((route) => {
//     clientRoutes[route] = {
//         render: vnode => {
//             return routes[route]
//         }
//     };
// });

const clientRoutes = {};
Object.keys(routes).forEach((route) => {
    clientRoutes[route] = {
        onmatch: function() {

            return routes[route].component.then(resp => {
                return resp;
            });

        },
        render: vnode => {
            return m(Layout, vnode);
        }
    };
});

m.route.prefix('');
// m.route(document.getElementById('mainContent'), '/', clientRoutes);
m.route(document.getElementById('mainContent'), '/', clientRoutes);
