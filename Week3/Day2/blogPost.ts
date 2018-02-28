'use strict'

// Create a BlogPost class that has
// an authorName
// a title

// a text
// a publicationDate
// Create a few blog post objects:
// "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
// Lorem ipsum dolor sit amet.
// "Wait but why" titled by Tim Urban posted at "2010.10.10."
// A popular long-form, stick-figure-illustrated blog about almost everything.
// "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
// Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.

class BlogPost{
    autorName: string;
    title: string;
    text: string;
    publicationDate: string;

    constructor(aName: string, ttle:string, txt:string, pubDate: string){
        this.autorName = aName;
        this.title = ttle;
        this.text = txt;
        this.publicationDate = pubDate;
    }
}

let postA = new BlogPost('John Doe','Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000-5-4')
console.log(postA);
let postB = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010-10-10');
console.log(postB);
let postC = new BlogPost('William Turton','One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28');
console.log(postC);