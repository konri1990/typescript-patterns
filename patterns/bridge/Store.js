"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Store = /** @class */ (function () {
    function Store(meta, theme) {
        this.meta = meta;
        this.theme = theme;
    }
    Store.prototype.DrawMetadata = function () {
        return "Meta data from Store " + this.meta + " and color " + this.theme.ThemeColour;
    };
    return Store;
}());
exports.Store = Store;
//# sourceMappingURL=Store.js.map