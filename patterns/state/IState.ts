import { PlayerContext } from "./PlayerContext";

export namespace StatePattern {
    export interface IState {
        pressPlay(player : PlayerContext): void;
        getName(): string;
    }
}