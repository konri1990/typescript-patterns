"use strict";
exports.__esModule = true;
var RenderHtml_1 = require("./RenderHtml");
var RenderXml_1 = require("./RenderXml");
// example of template method pattern
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.Start = function () {
        var htmlRendering = new RenderHtml_1.RenderHtml();
        var xmlRendering = new RenderXml_1.RenderXml();
        console.log("Render html:");
        htmlRendering.print();
        console.log("-----------------------------------");
        console.log("Render xml");
        xmlRendering.print();
    };
    return Startup;
}());
Startup.Start();
