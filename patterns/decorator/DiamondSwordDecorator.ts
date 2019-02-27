import { DecoratorPattern } from "./IWeapon";
import { WeaponUpgrade } from "./WeaponUpgrade";
    
export class DiamondSwordDecorator extends WeaponUpgrade    
{
    constructor(weapon : DecoratorPattern.IWeapon)  
    {   
        super(weapon);
        this.damage = 200 + this.damage;
    }    
}