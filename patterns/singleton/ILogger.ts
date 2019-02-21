export namespace SingletonPattern {
    export interface ILogger {
        debug(text : string) : void;
        error(text : string) : void;
        info(text : string) : void;
    }
}