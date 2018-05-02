// Strict mode -- makes debugging easier
// code errors that would otherwise have been ignored

 // *** "use strict" // <--- how to enable it! -- must be string

/* uses

 1)Let's you know when you've forgotten to declare a variable
 2) Stops you from using words that are reserved for future versions of JavaScript
 3) Can't delete functions, variables, or function arguments
 4) Makes eval keyword a little safer
*/




// why a string? when it was first implemented all browsers didn't support
// so if not a string an older browser would have failed, but if it's a string an older browser would just be like hey it's a string no biggie
"use strict"


/////////
// other way to use, only will apply to function block
////////

// not strict mode..
function newCode() {
  "use strict"
  //strict mode...
}

/////////
// Example 1
////////

/* Without strict mode, assigning a value to an undeclared variable will automatically create a
    global object. In the browser it's window, in Node its global.
*/

// iWasNotDeclared = 2
// console.log(global.iWasNotDeclared)

var theVal = 0;

thVal = 1
if (theVal > 0) {
  console.log("Hello!")
}

// you would expect to see hello since you assigned theVal to 1, however you made a syntax error.
// if using "use strict" at the top of the file you will get an error saying thVal is not defined!!!



////////////////////
//// Example 2
///////////////////



////////////////////
//// Example 3
///////////////////


////////////////////
//// Example 4
///////////////////

var a = 2
eval("var a = 1")
console.log(a)

/*
