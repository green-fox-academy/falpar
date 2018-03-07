'use strict'

class Plants{
    name: string;
    color: string;       
    water(){

    } 
}

class Garden {
    name: string;
    garden: Plants[] = [];

    constructor(name: string){
        this.name = name;
    }
    addFlower(plant: Flower){
        this.garden.push(plant);
    }
    addTree(plant: Tree){
        this.garden.push(plant);
    }
    getGarden(){
        return this.garden;
    }
    water(){
 
    }
 
 }
class Flower extends Plants{
    name: string;
    color: string;
    constructor(name:string, color:string){
        super()
        this.name = name;
        this.color = color;
    }
}

class Tree extends Plants{
    name: string;
    color: string;
    constructor(name:string, color:string){
        super()
        this.name = name;
        this.color = color;
    }
}


let yellowFlower: Flower = new Flower('rozsa','yellow');
let blueFlower: Flower = new Flower('ibolya', 'blue');
let purpleT = new Tree('purpleTree', 'purple');
let orangeT: Tree = new Tree('orangeTree', 'orange');


console.log(this.garden);
// Watering with 40
// The yellow Flower doesnt need water
// The blue Flower doesnt need water
// The purple Tree needs water
// The orange Tree needs water