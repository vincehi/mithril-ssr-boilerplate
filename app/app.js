const m = require('./common/m');
// const m = require('./common/m');
const Layout = require('./components/Layout');
import routes from './common/routes';

const clientRoutes = {};
Object.keys(routes).forEach((route) => {
    clientRoutes[route] = {

        onmatch: (args, requestedPath, route) => {
            return routes[route].component().then(resp => {
                return resp
            });
        },

        render: function(vnode) {
            return m(Layout, vnode)
        }
    };
});



m.route.prefix = '';
m.route(document.getElementById('mainContent'), '/', clientRoutes);
