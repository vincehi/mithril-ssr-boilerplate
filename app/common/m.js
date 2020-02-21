/*
Mithril remove m.jsonp and m.request
 */

import hyperscript from 'mithril/hyperscript';
import mountRedraw from 'mithril/api/mount-redraw';
import router from 'mithril/api/router';
import render from 'mithril/render/render';
import querystringParse from 'mithril/querystring/parse';
import queryStringBuild from 'mithril/querystring/build';
import pathnameParse from 'mithril/pathname/parse';
import pathnameBuild from 'mithril/pathname/build';
import renderVnode from 'mithril/render/vnode';
import promisePolyfill from 'mithril/promise/polyfill';

let mithril = {};

if (process.env.BROWSER_ENV) {
  const renderBrowser = render(window);
  const mountRedrawBrowser = mountRedraw(renderBrowser, requestAnimationFrame, console);
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
  mithril.parseQueryString = querystringParse;
  mithril.buildQueryString = queryStringBuild;
  mithril.parsePathname = pathnameParse;
  mithril.buildPathname = pathnameBuild;
  mithril.vnode = renderVnode;
  mithril.PromisePolyfill = promisePolyfill;
  mithril.route.prefix = '';
} else {
  mithril = hyperscript;
  mithril.route = router(undefined, undefined);
  mithril.route.prefix = '';
}

export default mithril;
