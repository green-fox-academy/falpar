'use string';

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

//let a:string = "xanax";

function xToY(a: string){
    if(a.indexOf('x') === -1){
        return a;
    }else{
        a=a.replace('x', 'y');
        return xToY(a);
    }
}
let text1:string = 'xanax, xanax, xanax, xanax';
console.log(xToY(text1));