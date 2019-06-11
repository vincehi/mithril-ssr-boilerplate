const m = require('mithril');
const Layout = require('./components/Layout');
import routes from './common/routes';


const clientRoutes = {};
Object.keys(routes).forEach((route) => {
    clientRoutes[route] = {
        onmatch: function() {
            return routes[route].component().then(resp => {
                return resp;
            });
        },
        render: vnode => {
            return m(Layout, vnode)
        }
    };
});

m.route.prefix('');
// m.route(document.getElementById('mainContent'), '/', clientRoutes);
m.route(document.getElementById('mainContent'), '/', clientRoutes);
