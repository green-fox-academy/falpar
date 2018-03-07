'use strict'
import{Bird} from './zoo'
export interface Flyable {
    land()
    fly()
    takeOff()
   
}

abstract class Vehicle {
    doors: string;
    wheels: number;
    speed: string;

    constructor(doors: string, wheels: number, speed: string){
        this.doors = doors;
        this.wheels = wheels;
        this.speed = speed;
    }
}

class Helicopter extends Vehicle implements Flyable{
    land(){
        return 'I can\'t land on water.';
    }
    fly(){
        return 'I can fly.';
    }
    takeOff(){
        return 'I can take off verticaly.';
    }
}

let newHelicopter = new Helicopter('helicopter', 2, '300 km/h')
console.log(newHelicopter);
console.log(newHelicopter.land());
console.log(newHelicopter.fly());
console.log(newHelicopter.takeOff());
console.log('---------------------------');
let newBird = new Bird("Parrot", 50, 'female','60%');
console.log(newBird);
console.log(newBird.breed());
console.log(newBird.land());