import { DecoratorPattern } from "./IWeapon";
import { WeaponUpgrade } from "./WeaponUpgrade";
    
export class SteelSwordDecorator extends WeaponUpgrade    
{
    constructor(weapon : DecoratorPattern.IWeapon)  
    {   
        super(weapon);
        this.damage = 100 + this.damage;
    }    
}    
  