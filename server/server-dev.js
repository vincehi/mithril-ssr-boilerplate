const path = require('path');
const Koa = require('koa');
const statics = require('koa-static');
const router = require('koa-route');
const app = new Koa();

const PORT = process.env.PORT || 3000;

// use a mock DOM so we can run mithril on the server
require('mithril/test-utils/browserMock')(global);
global.window.XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;

var toHTML = require('mithril-node-render');
const m = require('mithril');

const routes = require('app/common/routes');
const Layout = require('app/components/Layout');


Object.keys(routes).forEach((route) => {
    app.use(router.get(route, async (ctx, params) => {

        // @todo : start test
        m.request({
            method: "GET",
            url: "https://randomuser.me/api/",
            background: true // Permet de ne pas redessiner le composant apres réponse
        })
            .then(resp => console.log(resp.results))
            .catch((err) => {
                console.log(err);
            });
        // end : test
        var page = await routes[route].component().then(resp => {
            return resp;
        });
        //
        ctx.body = await toHTML(Layout, m(page));

    }));
});

app.use(statics(path.join(__dirname, "..", "build/assets")));

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log('Press Ctrl + C to quit.')
});
