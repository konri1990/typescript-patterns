"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerContext = /** @class */ (function () {
    function PlayerContext(state) {
        this._state = state;
    }
    PlayerContext.prototype.setState = function (state) {
        this._state = state;
    };
    PlayerContext.prototype.play = function () {
        console.log("Play button is pressed by context : " + this._state.getName());
        this._state.pressPlay(this);
    };
    PlayerContext.prototype.getState = function () {
        return this._state;
    };
    return PlayerContext;
}());
exports.PlayerContext = PlayerContext;
//# sourceMappingURL=PlayerContext.js.map