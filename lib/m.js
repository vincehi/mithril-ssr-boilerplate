/*
Mithril remove m.jsonp and m.request
 */

const hyperscript = require('mithril/hyperscript');
const router = require('mithril/api/router');


let mithril;

if (process.env.BROWSER_ENV) {
  const renderBrowser = require('mithril/render/render')(window);
  const mountRedrawBrowser = require('mithril/api/mount-redraw')(renderBrowser, requestAnimationFrame, console);
  mithril = function m() {
    return hyperscript.apply(this, arguments);
  };
  mithril.m = hyperscript;
  mithril.trust = hyperscript.trust;
  mithril.fragment = hyperscript.fragment;
  mithril.mount = mountRedrawBrowser.mount;
  mithril.route = router(window, mountRedrawBrowser);
  mithril.render = renderBrowser;
  mithril.redraw = mountRedrawBrowser.redraw;
  mithril.parseQueryString = require('mithril/querystring/parse');
  mithril.buildQueryString = require('mithril/querystring/build');
  mithril.parsePathname = require('mithril/pathname/parse');
  mithril.buildPathname = require('mithril/pathname/build');
  mithril.vnode = require('mithril/render/vnode');
  mithril.PromisePolyfill = require('mithril/promise/polyfill');
} else {
  mithril = hyperscript;
  mithril.route = router(undefined, undefined);
}

mithril.route.prefix = '';

export default mithril;
