"use strict";
exports.__esModule = true;
var PlayState_1 = require("./PlayState");
var PauseState = /** @class */ (function () {
    function PauseState() {
    }
    PauseState.prototype.getName = function () {
        return "Pause";
    };
    PauseState.prototype.pressPlay = function (context) {
        context.setState(new PlayState_1.PlayState());
    };
    return PauseState;
}());
exports.PauseState = PauseState;
