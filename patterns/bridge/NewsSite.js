"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NewsSite = /** @class */ (function () {
    function NewsSite(meta, theme) {
        this.meta = meta;
        this.theme = theme;
    }
    NewsSite.prototype.DrawMetadata = function () {
        return "Meta data from NewsSite " + this.meta + " and " + this.theme.ThemeColour;
    };
    return NewsSite;
}());
exports.NewsSite = NewsSite;
//# sourceMappingURL=NewsSite.js.map