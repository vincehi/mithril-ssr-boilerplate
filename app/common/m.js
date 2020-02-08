/*
Mithril remove m.jsonp and m.request
 */

import hyperscript from "mithril/hyperscript";
import mountRedraw from "mithril/api/mount-redraw";
import router from 'mithril/api/router';
import render from "mithril/render/render";
import querystringParse from "mithril/querystring/parse";
import queryStringBuild from "mithril/querystring/build";
import pathnameParse from "mithril/pathname/parse";
import pathnameBuild from "mithril/pathname/build";
import renderVnode from "mithril/render/vnode";
import promisePolyfill from "mithril/promise/polyfill";

let m = {};

if (process.browser) {
    const renderBrowser = render(window);
    const mountRedrawBrowser = mountRedraw(renderBrowser, requestAnimationFrame, console);
    m = function m() {
        console.log(this);
        return hyperscript.apply(this, arguments);
    };
    m.m = hyperscript;
    m.trust = hyperscript.trust;
    m.fragment = hyperscript.fragment;
    m.mount = mountRedrawBrowser.mount;
    m.route = router(window, mountRedrawBrowser);
    m.render = renderBrowser;
    m.redraw = mountRedrawBrowser.redraw;
    m.parseQueryString = querystringParse;
    m.buildQueryString = queryStringBuild;
    m.parsePathname = pathnameParse;
    m.buildPathname = pathnameBuild;
    m.vnode = renderVnode;
    m.PromisePolyfill = promisePolyfill;
    m.route.prefix = '';
} else {
    m = hyperscript;
    m.route = router(undefined, undefined);
    m.route.prefix = '';
}


export default m;
