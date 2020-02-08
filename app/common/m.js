/*
Mithril remove m.jsonp and m.request
 */

const hyperscript = require("mithril/hyperscript");

let m_client = "";
let m_server = "";

if (process.browser) {
    const mountRedraw = require("mithril/mount-redraw")

    m_client = function m_client() {
        console.log(this)
        return hyperscript.apply(this, arguments)
    }
    m_client.m_client = hyperscript
    m_client.trust = hyperscript.trust
    m_client.fragment = hyperscript.fragment
    m_client.mount = mountRedraw.mount
    m_client.route = require("mithril/route")
    m_client.render = require("mithril/render")
    m_client.redraw = mountRedraw.redraw
    m_client.parseQueryString = require("mithril/querystring/parse")
    m_client.buildQueryString = require("mithril/querystring/build")
    m_client.parsePathname = require("mithril/pathname/parse")
    m_client.buildPathname = require("mithril/pathname/build")
    m_client.vnode = require("mithril/render/vnode")
    m_client.PromisePolyfill = require("mithril/promise/polyfill")
    m_client.route.prefix = '';
} else {
    m_server = hyperscript;
    m_server.route = require('mithril/api/router')(undefined, undefined);
    m_server.route.prefix = '';
}

export default process.browser ? m_client : m_server;
