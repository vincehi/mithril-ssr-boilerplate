const path = require('path');
const Koa = require('koa');
const statics = require('koa-static');
const router = require('koa-route');

const toHTML = require('mithril-node-render');

const routes = require('app/common/routes');
const Layout = require('app/components/Layout');
const stateManager = require('../app/common/stateman.js');

const app = new Koa();
const PORT = process.env.PORT || 5000;

Object.keys(routes).forEach((route) => {
    app.use(router.get(route, async (ctx) => {

        const module = await routes[route].module();

        const stateman = Object.create(stateManager);
        stateman.init({});

        ctx.body = await toHTML(Layout,{module: {tag: module, stateman: stateman}});

    }));
});


app.use(statics(path.join(__dirname, "..", "build/assets")));

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log('Press Ctrl + C to quit.')
});
