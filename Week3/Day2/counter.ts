'use strict'

// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter{
    num: number = 0;
    add(number: number) {
        this.num++;
    }
    get(){
        return this.num;
    }
    reset(){
        this.num = 0;
        return this.num;
    }
}
let a = new Counter();
console.log(a.get())
console.log(a.reset());