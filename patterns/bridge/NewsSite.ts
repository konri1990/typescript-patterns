import { IWebApplication } from "./WebApplication";
import { ITheme } from "./Theme";

export class NewsSite implements IWebApplication {
    theme: ITheme;
    meta: string;
    constructor(meta: string, theme : ITheme) {
        this.meta = meta;
        this.theme = theme;
    }

    DrawMetadata(): string {
        return `Meta data from NewsSite ${this.meta} and ${this.theme.ThemeColour}`;
    }
}