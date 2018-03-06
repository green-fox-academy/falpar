'use strict'
class Person {
    name: string;
    age: number;
    gender: string;
    introduce(){
        console.log (`Hi, I\'m ${this.name} a ${this.age} year old ${this.gender}.`);
    }
    getGoal() {
       console.log('My goal is: Live for the moment!');
    }
    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female'){
        this.name = name;
        this.age = age;
        this.gender = gender;

    }
}

class Student extends Person {
    previousOrganization: string = 'The School of Life';
    skippedDays: number = 0;
    introduce(){
        console.log(`Hi, I\'m  ${this.name} a  ${this.age} year old ${this.gender} from  ${this.previousOrganization} who skipped  ${this.skippedDays} 'days from the course already`);
    }
    getGoal() { 
        console.log('Be a junior software developer.');
    }
    skipDays(numberOfDays){
        return this.skippedDays+=numberOfDays;
    }
    constructor(name?: string, age?: number, gender?: string, previousOrganization?: string){
        super(name, age, gender);
        this.previousOrganization = previousOrganization;

    }
}

class Mentor extends Person {
    level: string = 'senior';
    introduce(){
        console.log(`Hi, I\'m ${this.name} a ${this.age} year old ${this.gender} ${this.level} mentor.`);
    }
    getGoal() { 
        console.log('Educate brilliant junior software developers.');
    }
   
    constructor(name?: string, age?: number, gender?: string, level?: string){
        super(name, age, gender);
        this.level = level;

    }

}


class Sponsor extends Person {
    skippedDays: number;
    company: string;
    hiredStudents: number = 0;
    hire(){
        
        return this.hiredStudents++;
    }
    introduce(){
        console.log(`Hi, I\'m ' ${this.name} a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} so far.`);
    }
   
    getGoal() { 
        console.log('Hire brilliant junior software developers.');
    }
   
    constructor(name?: string, age?: number, gender?: string, company?: string){
        super(name, age, gender)
        this.company = company;
    }
    
}


class Cohort {
    name: string;
    students: Student [] = [];
    mentors: Mentor []=[] ;
    constructor(name){
        this.name = name;
    }

    addStudent(Student){
        this.students.push(Student);
    }

    addMentor(Mentor){
        this.mentors.push(Mentor);
    }
    info(){
        
        console.log(`The ${this.name} cohort has ${this.students.length} and ${this.mentors.length} mentors`)
    }
   
}


let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);
student.skipDays(3);

for (let i = 0; i < 6; i++) {
    elon.hire();
  }
  
  for (let i = 0; i < 4; i++) {
    sponsor.hire();
  }
  
  for (let person of people) {
    person.introduce();
    person.getGoal();
  }

  let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();