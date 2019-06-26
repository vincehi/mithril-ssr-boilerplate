const m = require('mithril');
const Layout = require('./components/Layout');
import routes from './common/routes';

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

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



m.route.prefix('');
m.route(document.getElementById('mainContent'), '/', clientRoutes);
