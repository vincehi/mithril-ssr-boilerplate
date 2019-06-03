const path = require('path');
const Koa = require('koa');
const server = require('koa-static');
const router = require('koa-route');
const app = new Koa();

const PORT = process.env.PORT || 3000;

// use a mock DOM so we can run mithril on the server
require('mithril/test-utils/browserMock')(global);

var m = require('mithril');
var toHTML = require('mithril-node-render');

const routes = require('../app/common/routes.js');

// Build Express routes mapping Mithril routes
// Object.keys(routes).forEach((route) => {
//     app.use(router.get(route, async (ctx, params) => {
//         ctx.body = await toHTML(routes[route]);
//     }));
// });

Object.keys(routes).forEach((route) => {
    app.use(router.get(route, async (ctx, params) => {

        // const module = await routes[route];
        // const onmatch = await (module.onmatch || (() => module));
        // const render = await (module.render || (a => a));
        //
        // const attrs = Object.assign({}, ctx.request.query);
        //
        // ctx.body = await toHTML(m(onmatch(attrs, ctx.request.url) || 'div', attrs))

        // Promise.resolve()
        //     .then(() => {
        //         return m(onmatch(attrs, ctx.request.url) || 'div', attrs)
        //     })
        //     .then(render)
        //     .then(toHTML)
        //     .then((html) => {
        //         console.log(html)
        //         ctx.body = html;
        //     })

        ctx.body = await toHTML(routes[route]);
    }));
});

app.use(server(path.join(__dirname, "..", "build/assets")));

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log('Press Ctrl + C to quit.')
});
