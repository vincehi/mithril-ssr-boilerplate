"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mithril_1 = __importDefault(require("mithril"));
var Header_1 = __importDefault(require("./Header"));
var Footer_1 = __importDefault(require("./Footer"));
var Script = /** @class */ (function () {
    function Script() {
    }
    Script.prototype.view = function (vnode) {
        return (mithril_1.default('script', "window.preloadedState = " + vnode.attrs.stateman.getString()));
    };
    return Script;
}());
;
var mainContent = function (vnode) { return (<div>
    <Header_1.default />
    <vnode.attrs.module.tag stateman={vnode.attrs.module.stateman}/>
    <Footer_1.default />
  </div>); };
var LayoutClient = /** @class */ (function () {
    function LayoutClient() {
    }
    LayoutClient.prototype.view = function (vnode) {
        return (mainContent(vnode));
    };
    return LayoutClient;
}());
;
var LayoutServer = /** @class */ (function () {
    function LayoutServer() {
    }
    LayoutServer.prototype.view = function (vnode) {
        return (<>
        {mithril_1.default('!doctype[html]')}
        <html lang="fr">
          <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta http-equiv="x-ua-compatible" content="ie=edge"/>
            <meta name="description" content="description ici"/>
            <title>{vnode.attrs.module.tag.title}</title>
          </head>
          <body>
            <div id="mainContent">
              {mainContent(vnode)}
            </div>
            <Script stateman={vnode.attrs.module.stateman}/>
            <script src="/js/app.js"/>
          </body>
        </html>
      </>);
    };
    return LayoutServer;
}());
;
exports.default = process.env.BROWSER_ENV ? LayoutClient : LayoutServer;
//# sourceMappingURL=Layout.jsx.map