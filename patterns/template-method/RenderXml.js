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
exports.__esModule = true;
var BaseRender_1 = require("./BaseRender");
var RenderXml = /** @class */ (function (_super) {
    __extends(RenderXml, _super);
    function RenderXml() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RenderXml.prototype.printHeader = function () {
        console.log("<?xml version=\"1.0\"?>");
    };
    RenderXml.prototype.printBody = function () {
        console.log("<catalog>");
        console.log("<book id=\"bk101\">"); // todo this section cpuld be replaced by template method too :)
        console.log("<author>Gambardella, Matthew</author>");
        console.log("<title>XML Developer's Guide</title>");
        console.log("</book>");
        console.log("<book id=\"bk102\">");
        console.log("<author>Ralls, Kim</author>");
        console.log("<title>Midnight Rain</title>");
        console.log("</book>");
        console.log("</catalog>");
    };
    RenderXml.prototype.printFooter = function () {
        return;
    };
    return RenderXml;
}(BaseRender_1.BaseRender));
exports.RenderXml = RenderXml;
