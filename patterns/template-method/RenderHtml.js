"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseRender_1 = require("./BaseRender");
var RenderHtml = /** @class */ (function (_super) {
    __extends(RenderHtml, _super);
    function RenderHtml() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RenderHtml.prototype.printHeader = function () {
        console.log("<html>");
        console.log("<head></head>");
    };
    RenderHtml.prototype.printBody = function () {
        console.log("<body>");
        console.log("<h1>Render Html method</h1>");
        console.log("</body>");
    };
    RenderHtml.prototype.printFooter = function () {
        console.log("</html>");
    };
    return RenderHtml;
}(BaseRender_1.BaseRender));
exports.RenderHtml = RenderHtml;
//# sourceMappingURL=RenderHtml.js.map