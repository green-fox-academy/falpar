'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!
let url: string = 'https//www.reddit.com/r/nevertellmethebots';
//let newString: string = url.slice(0,-4);
let newString: string = url.replace(/bots/i, "ods" ).replace(/https/, "https:");


console.log(newString);