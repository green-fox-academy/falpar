'use strict'

// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor(color: string, text1: string, textColor1:string){
        this.backgroundColor = color;
        this.text = text1;
        this.textColor = textColor1;
    }

}
let post1 = new PostIt('orange', 'Idea1', 'blue text');
console.log(post1);
let post2 = new PostIt('pink','Awsome!', 'black');
console.log(post2);
let post3 = new PostIt('yellow', 'Superb!', 'green text');
console.log(post3);

