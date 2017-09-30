import { IWebApplication } from "./WebApplication";
import { ITheme } from "./Theme";

export class Blog implements IWebApplication {
    theme: ITheme;
    meta: string;
    constructor(meta: string, theme : ITheme) {
        this.meta = meta;
        this.theme = theme;
    }

    DrawMetadata(): string {
        return `Meta data from Blog ${this.meta} and color ${this.theme.ThemeColour}`;
    }
}