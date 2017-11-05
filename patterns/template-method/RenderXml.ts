import { BaseRender } from "./BaseRender";

export class RenderXml extends BaseRender {
    printHeader(): void {
       console.log("<?xml version=\"1.0\"?>");
    }
    printBody(): void {
        console.log("<catalog>");
            console.log("<book id=\"bk101\">"); // todo this section cpuld be replaced by template method too :)
                console.log("<author>Gambardella, Matthew</author>");
                console.log("<title>XML Developer's Guide</title>");
            console.log("</book>");
            console.log("<book id=\"bk102\">");
                console.log("<author>Ralls, Kim</author>");
                console.log("<title>Midnight Rain</title>");
            console.log("</book>");
        console.log("</catalog>");
    }
    printFooter(): void {
        return;
    }
}