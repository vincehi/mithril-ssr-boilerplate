"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var mithril_1 = __importDefault(require("mithril"));
// const port = process.env.PORT || 5000;
// const localUrl = 'http://' + (process.browser ? window.location.host : '127.0.0.1:' + port);
// const localData = localUrl + '/docs';
function default_1(url, stateman, resolve) {
    var _this = this;
    var statemanContent = stateman.get('contact.content');
    if (!statemanContent) {
        axios_1.get(url)
            .then(function (resp) {
            stateman.set('contact.content', resp.data);
            resolve(_this.content = resp.data.results[0]);
            if (process.env.BROWSER_ENV) {
                mithril_1.default.redraw();
            }
        })
            .catch(function (error) {
            console.log(error);
        })
            .then(function () {
            // always executed
        });
    }
    else {
        resolve(this.content = statemanContent.results[0]);
    }
}
exports.default = default_1;
//# sourceMappingURL=contentManager.jsx.map