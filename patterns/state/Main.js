"use strict";
exports.__esModule = true;
var PlayerContext_1 = require("./PlayerContext");
var PlayState_1 = require("./PlayState");
var PauseState_1 = require("./PauseState");
// insipration https://dzone.com/articles/design-patterns-state
// example of use state pattern
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.Start = function () {
        var playerContext = new PlayerContext_1.PlayerContext(new PlayState_1.PlayState());
        var i = 0;
        while (i < 5) {
            playerContext.setState(new PlayState_1.PlayState());
            playerContext.play();
            playerContext.setState(new PauseState_1.PauseState());
            playerContext.play();
            i++;
        }
    };
    return Startup;
}());
Startup.Start();
