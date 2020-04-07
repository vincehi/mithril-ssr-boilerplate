import path from 'path';
import Koa from 'koa';
import statics from 'koa-static';
import router from 'koa-route';

import toHTML from 'mithril-node-render';
import m from 'mithril';
import stream from 'mithril/stream';

import routes from '../app/common/routes';
import Layout from '../app/components/Layout/Layout';

const app = new Koa();
const PORT = process.env.PORT || 5030;

Object.keys(routes).forEach((route) => {
  app.use(router.get(route, async (ctx) => {
    const module = await routes[route].module;

    const stateman = stream({});

    ctx.body = await toHTML(
      m(
        Layout,
        { stateman },
        await toHTML(
          m(module, { stateman }),
        ),
      ),
      { escapeText: (vnode) => vnode }, // fix escape vnode
    );
  }));
});

app.use(statics(path.join(__dirname, '..', 'build/assets')));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log('Press Ctrl + C to quit.');
});
