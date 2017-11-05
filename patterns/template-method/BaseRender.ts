// inspiration http://www.dotnettricks.com/learn/designpatterns/template-method-design-pattern-c-sharp
export abstract class BaseRender {
    public print(): void {
        this.printHeader();
        this.printBody();
        this.printFooter();
    }
    abstract printHeader(): void;
    abstract printBody(): void;
    abstract printFooter(): void;
}