import path from 'path';
import Koa from 'koa';
import statics from 'koa-static';
import router from 'koa-route';

import toHTML from 'mithril-node-render';
import m from 'mithril';

import routes from '../app/common/routes';
import Layout from '../app/components/Layout/Layout';
import stateManager from '../app/common/stateman';

const app = new Koa();
const PORT = process.env.PORT || 5030;

Object.keys(routes).forEach((route) => {
  app.use(router.get(route, async (ctx) => {
    const module = await routes[route].module();

    const stateman = Object.create(stateManager);
    stateman.init({});

    // ctx.body = await toHTML(Layout, m(module,{ stateman } ));

    ctx.body = await toHTML(m(Layout, {stateman}, m(module,{ stateman } )));
    // ctx.body = m(test);
  }));
});

app.use(statics(path.join(__dirname, '..', 'build/assets')));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log('Press Ctrl + C to quit.');
});
