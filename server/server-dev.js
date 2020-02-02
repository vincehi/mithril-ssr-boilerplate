const path = require('path');
const Koa = require('koa');
const statics = require('koa-static');
const router = require('koa-route');
require('mithril/test-utils/browserMock')(global); // use a mock DOM so we can run mithril on the server
global.window.XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;
var toHTML = require('mithril-node-render');
const m = require('../app/common/m');


const routes = require('app/common/routes');
const Layout = require('app/components/Layout');
const stateManager = require('../app/common/stateman.js');
if (!global.window) {
    global.window = global.document = global.requestAnimationFrame = undefined
}

const app = new Koa();
const PORT = process.env.PORT || 5000;

Object.keys(routes).forEach((route) => {
    app.use(router.get(route, async (ctx, params) => {

        var module = await routes[route].component();

        // Instantiate a new state at every request
        const stateman = Object.create(stateManager);
        stateman.init({});

        const attrs = Object.assign({}, params, ctx.query, { stateman });

        // toHTML(Layout, m(module, attrs)).then((resp) => {
        //     console.log(resp)
        //     ctx.body = resp;
        // });

        ctx.body = await toHTML(Layout, m(module, attrs));

    }));
});

app.use(statics(path.join(__dirname, "..", "build/assets")));

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log('Press Ctrl + C to quit.')
});
