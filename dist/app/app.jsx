"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mithril_1 = __importDefault(require("mithril"));
var Layout_1 = __importDefault(require("./components/Layout"));
var routes_1 = __importDefault(require("./common/routes"));
var stateman_1 = __importDefault(require("./common/stateman"));
var sharedState = window.preloadedState || {};
var stateman = Object.create(stateman_1.default);
stateman.init(sharedState);
var clientRoutes = {};
var attrs = { stateman: stateman };
Object.keys(routes_1.default).forEach(function (route) {
    clientRoutes[route] = {
        onmatch: function () {
            return routes_1.default[route].module().then(function (resp) {
                return resp;
            });
        },
        render: function (vnode) {
            Object.assign(vnode.attrs, attrs);
            document.title = vnode.tag.title;
            return mithril_1.default(Layout_1.default, { module: { tag: vnode.tag, stateman: vnode.attrs.stateman } });
        }
    };
});
mithril_1.default.route(document.getElementById('mainContent'), '/', clientRoutes);
//# sourceMappingURL=app.jsx.map