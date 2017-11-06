import { StatePattern } from "./IState";
import { PlayerContext } from "./PlayerContext";
import { PlayState } from "./PlayState";

export class PauseState implements StatePattern.IState {
    getName(): string {
        return "Pause";
    }

    pressPlay(context: PlayerContext): void {
        context.setState(new PlayState());
    }
}