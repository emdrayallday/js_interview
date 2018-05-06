'use strict'

var a = function() {
  console.log(this)
}.bind(1)
a()


// bind will set the this keyword to 1 throughout you application whenever it is called.

// bind only works with function expressions, has to be associated with variable.

// function are in fact objects!
