'use strict'

// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal


class Animal{
    hunger: number;
    thirst: number; 

    constructor() {
        this.hunger = 50;
        this.thirst = 50;
    }
    eat(){
        this.hunger -= 1;
    }
    drink(){
        this.thirst -= 1;
    }
    play(){
        this.hunger += 1;
        this.thirst += 1;
    }
}


//Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal


class Farm {
    animals: Animal [] = [];
    slots: number = 5;
    bread(x, y, h: string){
        if(this.slots > 0){
            this.animals.push(new Animal());
            this.slots--;
        }
    }
    slaughter(){
// megkeresem a legkevesbe eheset
// kiveszem a t0mbbol splice
// novelem a szabad helyek szamat
         for(let i: number = 0; i <= this.animals.length; i++){
            this.animals.splice(1);
             this.slots++;
         }    
    }   
}
let newFarm = new Farm();
console.log(newFarm);
console.log();
//console.log(newFarm.slaughter());
// console.log(newFarm.animals);
//console.log(Farm)