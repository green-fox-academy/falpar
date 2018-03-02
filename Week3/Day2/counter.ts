'use strict'


class Counter{
    num: number = 6;
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