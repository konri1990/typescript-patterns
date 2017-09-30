"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Blog_1 = require("./Blog");
var Theme_1 = require("./Theme");
var Store_1 = require("./Store");
var NewsSite_1 = require("./NewsSite");
// example of bridge pattern
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.Start = function () {
        // tslint:disable-next-line:typedef
        var redColour = {};
        redColour.ThemeColour = Theme_1.Colour.Red;
        // tslint:disable-next-line:typedef
        var blueColour = {};
        blueColour.ThemeColour = Theme_1.Colour.Blue;
        // tslint:disable-next-line:typedef
        var blogApp = new Blog_1.Blog("css/js for blog", blueColour);
        // tslint:disable-next-line:typedef
        var storeApp = new Store_1.Store("css/js for shop", redColour);
        // tslint:disable-next-line:typedef
        var newsApp = new NewsSite_1.NewsSite("css/js for newsSite", redColour);
        console.log(blogApp.DrawMetadata());
        console.log(storeApp.DrawMetadata());
        console.log(newsApp.DrawMetadata());
    };
    return Startup;
}());
Startup.Start();
//# sourceMappingURL=Main.js.map