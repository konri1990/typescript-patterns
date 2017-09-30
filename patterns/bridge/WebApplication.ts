// inspiration https://simpleprogrammer.com/2015/06/08/design-patterns-simplified-the-bridge-pattern/
import { ITheme } from "./Theme";
export interface IWebApplication {
    meta : string;
    DrawMetadata(): string;
    theme : ITheme;
}