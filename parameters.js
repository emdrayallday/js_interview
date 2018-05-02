"use strict"

// what is passed by value?

// if you change value inside a function, it won't be affected outside of scope

var a = 1
function foo(a) {
  var a = 2
  console.log('a inside', a)
}
foo(a)
console.log('a outside', a)

// what is passedy by reference?

// when passing object into function your not passing in a copy,
// if you change a property you change the property in outerscope
var b ={}
function boo(b) {
   b.moo = 'boo'
  console.log('b inside', b )
}
boo(b)
console.log('b outside', b )


/*
however
Changing the value of a variable never changes the underlying primitive or object,
it just points the variable to a new primitive or object.
*/

var c = {foo: 'bar'}
function notChanged(c) {
  c = {hello: 'world'}
  console.log('c in not changed', c)
}
notChanged(c)
console.log('c outside of function', c)
