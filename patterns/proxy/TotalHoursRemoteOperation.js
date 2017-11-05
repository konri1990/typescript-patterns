"use strict";
exports.__esModule = true;
var TotalHoursRemoteOperation = /** @class */ (function () {
    function TotalHoursRemoteOperation() {
    }
    TotalHoursRemoteOperation.prototype.totalHours = function (data) {
        return (data.days * data.hours * data.months);
    };
    return TotalHoursRemoteOperation;
}());
exports.TotalHoursRemoteOperation = TotalHoursRemoteOperation;
