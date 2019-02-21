//inspiration https://github.com/jonnyreeves/js-logger
import { SingletonPattern } from "./ILogger";

export class Logger implements SingletonPattern.ILogger {    
    private static _instance : Logger;

    static getInstance() : SingletonPattern.ILogger {
        if(Logger._instance == null){
            Logger._instance = new Logger();
        }
        return Logger._instance;
    }

    debug(text: string) {
        console.debug("[Debug]: " + text);
    }

    error(text: string) {
        console.debug("[Error]: " + text);
    }

    info(text: string) {
        console.info("[Info]: " + text);
    }

}