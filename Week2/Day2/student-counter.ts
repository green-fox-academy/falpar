'use strict';

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs: 


// - how many candies are owned by students
// create a function that takes a list of students and logs:

function numberOfCandies(list: any[]): number {
    let number = 0;
    for(let i = 0; i < list.length; i++){
        number+=list[i].candies ; 
        }
    return number;
}
console.log(numberOfCandies(students));

// - Sum of the age of people who have lass than 5 candies

function ageOfStudents(sum: any[]){
    let ages: number = 0;
    for(let i: number = 0; i < sum.length; i++) {
       if(sum[i].candies <= 5){
           ages += sum[i].age;
       }
    }
    return ages;
}
console.log(ageOfStudents(students));