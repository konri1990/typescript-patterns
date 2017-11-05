import { RenderHtml } from "./RenderHtml";
import { BaseRender } from "./BaseRender";
import { RenderXml } from "./RenderXml";

// example of template method pattern
class Startup {
    public static Start(): void {
        let htmlRendering: BaseRender = new RenderHtml();
        let xmlRendering: BaseRender = new RenderXml();

        console.log("Render html:");
        htmlRendering.print();
        console.log("-----------------------------------");
        console.log("Render xml");
        xmlRendering.print();
    }
}

Startup.Start();

