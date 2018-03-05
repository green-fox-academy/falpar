'use strict'
class Person {
    name: string;
    age: number;
    gender: string;
    introduce(){
        console.log('Hi, I\'m ' + name + 'a ' + this.age + 'year old '+ this.gender )
    }
    getGoal() {
        console.log('My goal is: Live for the moment!');
    }
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;

    }
}

var newPerson: Person = new Person('Jane Doe', 30, 'female');


class Student {
    name: string;
    age: number;
    gender: string;
    previousOrganization: string;
    skippedDays: number;
    introduce(){
        console.log('Hi, I\'m ' + name + 'a ' + this.age + 'year old '+ this.gender + 'from' + this.previousOrganization + 'who skipped ' + this.skippedDays + 'days ' + 'from the course already' )
    }
    getGoal() { 
        console.log('Be a junior software developer.');
    }
    skipDays(numberOfDays){
        this.skippedDays+=numberOfDays;
    }
    constructor(name: string, age: number, gender: string, previousOrganization: string, skippedDays=0){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.previousOrganization = previousOrganization;

    }
}
let newStudent: Student = new Student('Jane Doe', 30, 'female', 'The School of Life');
console.log (newStudent);