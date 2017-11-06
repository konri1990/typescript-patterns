"use strict";
exports.__esModule = true;
var PauseState_1 = require("./PauseState");
var PlayState = /** @class */ (function () {
    function PlayState() {
    }
    PlayState.prototype.getName = function () {
        return "Play";
    };
    PlayState.prototype.pressPlay = function (context) {
        context.setState(new PauseState_1.PauseState());
    };
    return PlayState;
}());
exports.PlayState = PlayState;