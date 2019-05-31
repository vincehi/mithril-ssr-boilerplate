//import 'regenerator-runtime/runtime'; //https://github.com/babel/babel-loader/issues/484
import Koa from 'koa';
const app = new Koa();
const PORT = process.env.PORT || 3000;

// use a mock DOM so we can run mithril on the server
require('mithril/test-utils/browserMock')(global);

var m = require('mithril');
var render = require('mithril-node-render')

app.use(async (ctx) => {
    ctx.body = await render(m('span', 'Voici un exemple de SSR'));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log('Press Ctrl+C to quit.')
});
