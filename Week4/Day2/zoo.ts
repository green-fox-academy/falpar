'use strict'

import {Flyable} from './flyable'
abstract class Animal{
    name: string;
    age: number;
    gender: string;
    energy: string;
    constructor(name: string, age: number, gender:string,energy:string,){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.energy = energy;
    }
    getName(){
        return this.name;
    }
    breed(){

    }
    breathe(){

    }
}

class Reptile extends Animal{
    breed(){
        return 'laying eggs';
    }

}

class Mammal extends Animal{
    breed(){
        return 'pushing miniature versions out '

    }
}
export class Bird extends Animal implements Flyable{
    breed(){
        return 'Laying eggs';
    }
    land(){
        return 'I can land on water.';
    }
    fly(){
        return 'I can fly with my wings.';
    }
    takeOff(){
        return 'I can take off verticaly.';
    }
}


let reptile = new Reptile("Crocodile", 3, 'female', '100%');
let mammal = new Mammal("Koala", 2, 'female', '60%');
let bird = new Bird("Parrot", 50, 'female','60%');

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());
