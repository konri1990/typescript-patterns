//inspiration https://www.c-sharpcorner.com/UploadFile/20c06b/design-patterns-decorator/
//https://www.youtube.com/watch?v=17XTOODeWQE&feature=youtu.be

import { DecoratorPattern } from "./IWeapon";
import { Sword } from "./Sword";
import { SteelSwordDecorator} from "./SteelSwordDecorator";
import { DiamondSwordDecorator } from "./DiamondSwordDecorator";

class Startup {
    public static Start(): void { 
        let sword : DecoratorPattern.IWeapon = new Sword();
        console.log("Sword damage: " + sword.damage);

        sword = new SteelSwordDecorator(sword);
        console.log("Sword damage: " + sword.damage);

        sword = new SteelSwordDecorator(sword);
        console.log("Sword damage: " + sword.damage);

        sword = new DiamondSwordDecorator(sword);
        console.log("Sword damage: " + sword.damage);
    }
}

Startup.Start();

