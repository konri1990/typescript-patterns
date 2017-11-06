import { StatePattern } from "./IState";
import { PlayerContext } from "./PlayerContext";
import { PauseState } from "./PauseState";

export class PlayState implements StatePattern.IState {

    getName(): string {
        return "Play";
    }

    pressPlay(context: PlayerContext): void {
        context.setState(new PauseState());
    }
}