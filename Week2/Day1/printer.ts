'strict use'
// -  Create a function called `printer`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)




function printer(newArray: any[]) {
    newArray.forEach(function(value) {
    console.log(value);})
    }
let myArray: any[] = [2, 'nice', 3, 51, 7];
console.log(myArray)
