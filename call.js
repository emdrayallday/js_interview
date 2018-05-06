// functions are objects!!
'use strict'
function a(param1, param2) {
  console.log(this)
}

console.log(a.name) // this prints name of function.
console.log(a.length) // # of arguments

a.moo = 1

console.log(a) // you can add properties to functions!
console.log(a.toString()) // you can use object methods!

// you can use call (a function) on your own function!
// keyword call just calls the function
a.call()
a()
// those do the same thing

// Why would you use call instead of just using ().
// You can use it to stablize the this keyword by passing the call function something.
a.call('This will print this!')
/////////////////
// you can also pass arguments with the .call
//////////////////
function b (c,d,e) {
  console.log(this)
  console.log(c)
  console.log(d)
  console.log(e)
}
b.call('this is assigning the this keyword',2,3,4)
