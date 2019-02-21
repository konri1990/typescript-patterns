"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// inspiration http://www.dotnettricks.com/learn/designpatterns/template-method-design-pattern-c-sharp
var BaseRender = /** @class */ (function () {
    function BaseRender() {
    }
    BaseRender.prototype.print = function () {
        this.printHeader();
        this.printBody();
        this.printFooter();
    };
    return BaseRender;
}());
exports.BaseRender = BaseRender;
//# sourceMappingURL=BaseRender.js.map