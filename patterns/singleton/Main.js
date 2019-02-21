"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = require("./Logger");
// example of singleton, get browser settings as single instace to app
// generally singleton pattern can be used for Logger, read settings from for example browser  
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.Start = function () {
        var logger = Logger_1.Logger.getInstance();
        logger.debug("Simple message");
        logger.error("Unexpected error");
    };
    return Startup;
}());
Startup.Start();
//# sourceMappingURL=Main.js.map