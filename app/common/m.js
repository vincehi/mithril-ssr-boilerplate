if (process.browser) {
    module.exports = require('mithril');
} else {
    module.exports = require('mithril/hyperscript');
    module.exports.route = require('mithril/api/router')(window, null);
    module.exports.request = require('mithril/request/request')(window, require("mithril/promise/promise"), null).request;
}
