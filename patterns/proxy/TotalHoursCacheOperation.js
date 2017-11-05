"use strict";
exports.__esModule = true;
var TotalHoursRemoteOperation_1 = require("./TotalHoursRemoteOperation");
// it's example how we can use proxy pattern for 'caching'
// specially usefull when calculate operation take too long time,
// we can proxy this calculation if it is called on the same object
var TotalHoursCacheOperation = /** @class */ (function () {
    function TotalHoursCacheOperation() {
        this._salaryCalculationLongOperation = new TotalHoursRemoteOperation_1.TotalHoursRemoteOperation();
    }
    TotalHoursCacheOperation.prototype.totalHours = function (data) {
        if (this.takeFromCacheResult(data)) {
            console.log("Requested object is the same, return value from cache: ");
        }
        else {
            console.log("New object -> need recalculate, this can take some time...");
            this._data = data;
            this.refreshInternalCache();
        }
        return this.lastCalculation;
    };
    TotalHoursCacheOperation.prototype.takeFromCacheResult = function (data) {
        return (JSON.stringify(this._data) === JSON.stringify(data));
    };
    TotalHoursCacheOperation.prototype.refreshInternalCache = function () {
        this.lastCalculation = this._salaryCalculationLongOperation.totalHours(this._data);
    };
    return TotalHoursCacheOperation;
}());
exports.TotalHoursCacheOperation = TotalHoursCacheOperation;
