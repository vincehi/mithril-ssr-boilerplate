const path = require('path');
const Koa = require('koa');
const statics = require('koa-static');
const router = require('koa-route');
require('mithril/test-utils/browserMock')(global); // use a mock DOM so we can run mithril on the server
global.window.XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;
global.requestAnimationFrame = () => {};
var toHTML = require('mithril-node-render');
const m = require('mithril/hyperscript');
// if (process.browser) {
//     module.exports = require('mithril')
// } else {
//     module.exports = require('mithril/hyperscript');
//     module.exports.redraw = () => {}
// }
const routes = require('app/common/routes');
const Layout = require('app/components/Layout');

const app = new Koa();
const PORT = process.env.PORT || 3000;

Object.keys(routes).forEach((route) => {
    app.use(router.get(route, async (ctx, params) => {

        var module = await routes[route].component().then(resp => resp);
        const onmatch = module.onmatch || (() => module);
        const render = module.render || (a => a);

        ctx.body = await toHTML(Layout, render(
            m((await onmatch(params, ctx.url)) || 'div', params)
        ));

    }));
});

app.use(statics(path.join(__dirname, "..", "build/assets")));

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log('Press Ctrl + C to quit.')
});
