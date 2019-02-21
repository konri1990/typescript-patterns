"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TotalHoursRemoteOperation = /** @class */ (function () {
    function TotalHoursRemoteOperation() {
    }
    TotalHoursRemoteOperation.prototype.totalHours = function (data) {
        return (data.days * data.hours * data.months);
    };
    return TotalHoursRemoteOperation;
}());
exports.TotalHoursRemoteOperation = TotalHoursRemoteOperation;
//# sourceMappingURL=TotalHoursRemoteOperation.js.map