"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorkingData_1 = require("./WorkingData");
var TotalHoursCacheOperation_1 = require("./TotalHoursCacheOperation");
// example of template method pattern
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.Start = function () {
        var workingData1 = new WorkingData_1.WorkingData(8, 30, 12);
        var calculation = new TotalHoursCacheOperation_1.TotalHoursCacheOperation();
        console.log(calculation.totalHours(workingData1));
        console.log(calculation.totalHours(workingData1));
        var workingData2 = new WorkingData_1.WorkingData(8, 30, 24);
        console.log(calculation.totalHours(workingData2));
    };
    return Startup;
}());
Startup.Start();
//# sourceMappingURL=Main.js.map