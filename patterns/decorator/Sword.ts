import { DecoratorPattern } from "./IWeapon";

export class Sword implements DecoratorPattern.IWeapon {
    damage: number;
    
    constructor(){
        this.damage = 10;
    }
}  
