/*
Mithril remove m.jsonp and m.request
 */
import hyperscript from 'mithril/hyperscript';
import router from 'mithril/api/router';

let mithril = {};

if (process.env.BROWSER_ENV) {
  const renderBrowser = import('mithril/render/render').then(({ default: resp }) => resp(window));
  const mountRedrawBrowser = import('mithril/api/mount-redraw').then(({ default: resp }) => resp(renderBrowser, requestAnimationFrame, console));
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
  mithril.parseQueryString = import('mithril/querystring/parse').then(({ default: resp }) => resp);
  mithril.buildQueryString = import('mithril/querystring/build').then(({ default: resp }) => resp);
  mithril.parsePathname = import('mithril/pathname/parse').then(({ default: resp }) => resp);
  mithril.buildPathname = import('mithril/pathname/build').then(({ default: resp }) => resp);
  mithril.vnode = import('mithril/render/vnode').then(({ default: resp }) => resp);
  mithril.PromisePolyfill = import('mithril/promise/polyfill').then(({ default: resp }) => resp);
} else {
  mithril = hyperscript;
  mithril.route = router(undefined, undefined);
}

mithril.route.prefix = '';

export default mithril;
