/*
Mithril remove m.jsonp and m.request
 */

const hyperscript = require("mithril/hyperscript")

if (process.browser) {
    const mountRedraw = require("mithril/mount-redraw")

    const m = function m() { return hyperscript.apply(this, arguments) }
    m.m = hyperscript
    m.trust = hyperscript.trust
    m.fragment = hyperscript.fragment
    m.mount = mountRedraw.mount
    m.route = require("mithril/route")
    m.render = require("mithril/render")
    m.redraw = mountRedraw.redraw
    m.parseQueryString = require("mithril/querystring/parse")
    m.buildQueryString = require("mithril/querystring/build")
    m.parsePathname = require("mithril/pathname/parse")
    m.buildPathname = require("mithril/pathname/build")
    m.vnode = require("mithril/render/vnode")
    m.PromisePolyfill = require("mithril/promise/polyfill")
    m.route.prefix = '';
    module.exports = m
} else {
    module.exports = hyperscript;
    module.exports.route = require('mithril/api/router')(window, null);
    module.exports.route.prefix = '';
}
