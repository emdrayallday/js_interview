// Strict mode -- makes debugging easier
// code areas that would otherwise have been ignored

 // *** "use strict" // <--- how to enable it! -- must be string

// why a string? when it was first implemented all browsers didn't support
// so if not a string an older browser would have failed, but if it's a string an older browser would just be like hey it's a string no biggie



/////////
// other way to use, only will apply to function block
////////

// not strict mode..
function newCode() {
  "use strict"
  //strict mode...
}

/////////
// Example
////////

/* Without strict mode, assigning a value to an undeclared variable will automatically create a
    global object. In the browser it's window, in Node its global.
*/

iWasNotDeclared = 2
console.log(global.iWasNotDeclared)
