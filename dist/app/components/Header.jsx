"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mithril_1 = __importDefault(require("mithril"));
var Header = /** @class */ (function () {
    function Header() {
    }
    Header.prototype.view = function () {
        return (<header>
        <div>The Header</div>
        <nav>
          <mithril_1.default.route.Link href="/contact">Contact</mithril_1.default.route.Link>
          <mithril_1.default.route.Link href="/">Home</mithril_1.default.route.Link>
        </nav>
      </header>);
    };
    return Header;
}());
exports.default = Header;
//# sourceMappingURL=Header.jsx.map