"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes = {
    '/': {
        name: 'Accueil',
        module: function () { return new Promise(function (resolve) {
            Promise.resolve().then(function () { return __importStar(require(/* webpackChunkName: "Home" */ '../pages/Home')); }).then(function (_a) {
                var resp = _a.default;
                resolve(resp);
            });
        }); }
    },
    '/contact': {
        name: 'Contact',
        module: function () { return new Promise(function (resolve) {
            Promise.resolve().then(function () { return __importStar(require(/* webpackChunkName: "Contact" */ '../pages/Contact')); }).then(function (_a) {
                var resp = _a.default;
                resolve(resp);
            });
        }); }
    }
};
exports.default = routes;
//# sourceMappingURL=routes.jsx.map