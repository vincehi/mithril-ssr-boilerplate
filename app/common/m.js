if (process.browser) {
    module.exports = require('mithril');
} else {
    module.exports = require('mithril/hyperscript');
    module.exports.route = {
        Link: "a" // Fix 'Link' of undefined
    };
    module.exports.request = require('mithril/request/request')(window, require("mithril/promise/promise"), null).request;
}
