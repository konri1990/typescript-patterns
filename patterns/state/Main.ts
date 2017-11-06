import { PlayerContext } from "./PlayerContext";
import { PlayState } from "./PlayState";
import { PauseState } from "./PauseState";

// insipration https://dzone.com/articles/design-patterns-state

// example of use state pattern
class Startup {
    public static Start(): void {
        let playerContext : PlayerContext = new PlayerContext(new PlayState());

        var i:number = 0;

        while(i<5) {
            playerContext.setState(new PlayState());
            playerContext.play();
            playerContext.setState(new PauseState());
            playerContext.play();
            i++;
        }
    }
}

Startup.Start();
