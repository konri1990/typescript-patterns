import { Blog } from "./Blog";
import { Colour, ITheme } from "./Theme";
import { Store } from "./Store";
import { NewsSite } from "./NewsSite";

// example of bridge pattern
class Startup {
    public static Start(): void {
        // tslint:disable-next-line:typedef
        let redColour = <ITheme>{};
        redColour.ThemeColour = Colour.Red;
        // tslint:disable-next-line:typedef
        let blueColour = <ITheme>{};
        blueColour.ThemeColour = Colour.Blue;
        // tslint:disable-next-line:typedef
        let blogApp = new Blog("css/js for blog", blueColour);
        // tslint:disable-next-line:typedef
        let storeApp = new Store("css/js for shop", redColour);
        // tslint:disable-next-line:typedef
        let newsApp = new NewsSite("css/js for newsSite", redColour);

        console.log(blogApp.DrawMetadata());
        console.log(storeApp.DrawMetadata());
        console.log(newsApp.DrawMetadata());
    }
}

Startup.Start();

