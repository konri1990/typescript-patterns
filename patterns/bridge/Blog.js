"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Blog = /** @class */ (function () {
    function Blog(meta, theme) {
        this.meta = meta;
        this.theme = theme;
    }
    Blog.prototype.DrawMetadata = function () {
        return "Meta data from Blog " + this.meta + " and color " + this.theme.ThemeColour;
    };
    return Blog;
}());
exports.Blog = Blog;
//# sourceMappingURL=Blog.js.map