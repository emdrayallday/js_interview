console.log('type of 1', typeof(1))
console.log('type of string', typeof('a'))
console.log('type of true', typeof(true))
console.log('type of undefined', typeof(undefined))
console.log('type of null -- this is JavaScript error', typeof(null))
console.log('type of empty object', typeof({}))

// What's the difference between a dynamically typed language versus (javascript)
// type of variables are determined dynamically at run time
var a = 'moo'
console.log('var a is a string', typeof(a))
a = 1
console.log('var a is now a number', typeof(a))



// versus a statically typed language (java)
// type of variable is defined statically as we write code for APP
/*

String a = 'moo'
a = 1 // Error;

*/


// With dynamic you can get up and running quickly, but only see errors at runtime

// With static, the compiler will throw an error earlier


///////////////////////////
//// Difference btwn null/undefined
//////////////////////////

var what
console.log('what was not assigned', what)

var b = null

console.log('b is null, only a programmer will ever set a value to null', b)

/* In static language like Java, we are saying we know a will be a string
    we just don't know what it is yet (concept of an absense of a value)

String a = null
*/


// in javascript null is actually a value of "null"
