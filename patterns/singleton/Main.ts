import { SingletonPattern } from "./ILogger"
import { Logger } from "./Logger"

// example of singleton, get browser settings as single instace to app
// generally singleton pattern can be used for Logger, read settings from for example browser  
class Startup {
    public static Start(): void {
        let logger : SingletonPattern.ILogger = Logger.getInstance();

        logger.debug("Simple message");
        logger.error("Unexpected error");
    }
}

Startup.Start();

