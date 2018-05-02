'use strict'

// what is variable hoisting?

// since I am using use strict you would expect an error
// however, due to variable hoisting a is already declared and looks like this

/*
var a

console.log(a)

a = 1

*/

console.log(a) // this prints undefined
var a = 1


// thats what hoisting is, in JS it automatically declares the variable
// at the top of the enclosing scope


function foo() {
  console.log(a)
  var a = 1
}

/*
 foo actually looks like this

function foo() {
  var a
  console.log(a)
  a = 1
}

*/

// this happens with functions as well so you can call a function above where it's written.


////////////////
// ex
/////////////
bar()
function bar() {
  console.log('hello')
}


// however don't let this confuse you

foobar()
var foobar = function () {
  console.log('will not work')
}

// this is b/c of variable hoisting like before...it realy looks like This

/*

var foobar

foobar()

foobar = function () {
  console.log('will not work')
}
*/
