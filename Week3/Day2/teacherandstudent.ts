'use strict'

// Teacher Student
// Create Student and Teacher classes
// Student
// learn()
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer()

class Teacher{
    teach(x: Student){

    }
    answer(){
        console.log(5+10);
    }

}

class Student{

    question(){
        console.log(1+2);
    }
    learn(){
        
    }

}

let istvan = new Teacher()
let hallgato = new Student();
istvan.answer();
hallgato.question();