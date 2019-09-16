if (process.browser) {
    module.exports = require('mithril');
} else {
    module.exports = require('mithril/hyperscript');
    module.exports.route = {
        get: () => {},
        param: () => {},
    };
    module.exports.redraw = () => {}
}
