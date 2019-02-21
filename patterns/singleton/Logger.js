"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getInstance = function () {
        if (Logger._instance == null) {
            Logger._instance = new Logger();
        }
        return Logger._instance;
    };
    Logger.prototype.debug = function (text) {
        console.debug("[Debug]: " + text);
    };
    Logger.prototype.error = function (text) {
        console.debug("[Error]" + text);
    };
    Logger.prototype.info = function (text) {
        console.info("[Info]" + text);
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map