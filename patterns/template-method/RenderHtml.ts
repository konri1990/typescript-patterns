import { BaseRender } from "./BaseRender";

export class RenderHtml extends BaseRender {
    printHeader(): void {
       console.log("<html>");
       console.log("<head></head>");
    }
    printBody(): void {
        console.log("<body>");
        console.log("<h1>Render Html method</h1>");
        console.log("</body>");
    }
    printFooter(): void {
        console.log("</html>");
    }
}
