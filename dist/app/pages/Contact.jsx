"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mithril_1 = __importDefault(require("mithril"));
var contentManager_1 = __importDefault(require("../common/contentManager"));
var Contact = /** @class */ (function () {
    function Contact() {
    }
    Contact.prototype.oninit = function (vnode, waitFor) {
        if (waitFor === void 0) { waitFor = function () { return null; }; }
        return (waitFor(new Promise(function (resolve) {
            var stateman = vnode.attrs.stateman;
            // Result in vnode.state.content
            contentManager_1.default.bind(vnode.state)('https://randomuser.me/api/', stateman, resolve);
        })));
    };
    ;
    Contact.prototype.view = function (vnode) {
        return (<div>
        {vnode.state.content
            ? [
                <div>
              {vnode.state.content.name.first}
            </div>
            ] : 'loading'}
        Contenu de la page Contact !
      </div>);
    };
    Contact.title = "contact title";
    return Contact;
}());
exports.default = Contact;
;
//# sourceMappingURL=Contact.jsx.map