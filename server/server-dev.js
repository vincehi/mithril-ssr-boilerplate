import path from 'path';
import Koa from 'koa';
import statics from 'koa-static';
import router from 'koa-route';

import toHTML from 'mithril-node-render';

import routes from 'app/common/routes';
import Layout from 'app/components/Layout';
import stateManager from '../app/common/stateman.js';

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
