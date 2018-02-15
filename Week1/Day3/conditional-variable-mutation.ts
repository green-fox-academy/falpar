
let a: number = 24;
let out: number = 0;

// if a is even increment out by one
if ((a % 2) === 0 ) {
    out += 1;
}
console.log(out);

let b: number = 13;
let out2: string = '';

// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"

if ((b > 10) && (b < 20)){
    out2 = 'Sweet!';
    console.log(out2);
} else if(b < 10) {
    out2 = 'Less!';
    console.log(out2);
}else if (b > 20) {
    out2 = 'More!';
    console.log(out2);
}


let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

if ((credits >= 50) && (isBonus === false)) {
    c -= 2;
    console.log(c);
} else if ((credits < 50) && (isBonus === false)) {
    c -= 1;
    console.log(c);
} else if (isBonus = true) {
    c = c;
    console.log(c);
}


