import { StatePattern } from "./IState";
import { PauseState } from "./PauseState";

export class PlayerContext {
    private _state : StatePattern.IState;

    constructor(state : StatePattern.IState) {
        this._state = state;
    }

    public setState(state : StatePattern.IState): void {
        this._state = state;
    }

    public play(): void {
        console.log("Play button is pressed by context : " + this._state.getName());
        this._state.pressPlay(this);
    }

    public getState(): StatePattern.IState {
        return this._state;
    }
}