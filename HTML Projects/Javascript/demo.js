"use strict";

let theThing;
for (let i = 0; i < length; i++)
{
    theThing = someCollectionOfThings[i];
    //do something with it, maybe change it...

    someCollectionOfThings[i] = thething;
}

 // This is cleaner than ^

let thething; 
for (theThing of someCollectionOfThings)
{
    // use theThing however you want ...
}