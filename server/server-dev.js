const path = require('path');
const Koa = require('koa');
const statics = require('koa-static');
const router = require('koa-route');
require('mithril/test-utils/browserMock')(global); // use a mock DOM so we can run mithril on the server
global.window.XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;
global.requestAnimationFrame = () => {}; // https://github.com/MithrilJS/mithril-node-render/issues/89
var toHTML = require('mithril-node-render');
const m = require('mithril');
const routes = require('app/common/routes');
const Layout = require('app/components/Layout');

const app = new Koa();
const PORT = process.env.PORT || 3000;


Object.keys(routes).forEach((route) => {
    app.use(router.get(route, async (ctx, params) => {

        var page = await routes[route].component().then(resp => {
            return resp;
        });

        ctx.body = await toHTML(Layout, m(page));

    }));
});

app.use(statics(path.join(__dirname, "..", "build/assets")));

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log('Press Ctrl + C to quit.')
});
