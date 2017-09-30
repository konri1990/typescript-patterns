import { IWebApplication } from "./WebApplication";
import { ITheme } from "./Theme";

export class Store implements IWebApplication {
    theme: ITheme;
    meta: string;
    constructor(meta: string, theme : ITheme) {
        this.meta = meta;
        this.theme = theme;
    }

    DrawMetadata(): string {
        return `Meta data from Store ${this.meta} and color ${this.theme.ThemeColour}`;
    }
}