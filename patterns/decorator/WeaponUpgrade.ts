import { DecoratorPattern } from "./IWeapon";
    
export abstract class WeaponUpgrade implements DecoratorPattern.IWeapon    
{
    damage: number;    
    protected weapon: DecoratorPattern.IWeapon;     
     
    constructor(weapon : DecoratorPattern.IWeapon)    
    {    
        this.weapon = weapon;
        this.damage = weapon.damage;    
    }
}