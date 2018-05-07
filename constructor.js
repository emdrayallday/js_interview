// how to implement pseudo principles in JS
// mimics OOP paradigms of Java/C++
// pseudo classical inheritance / or constructor pattern

// function constructor

'use strict'

function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.fullName = function () {
    return this.firstName + ' ' + this.lastName
  }
}

var dude = new Person('mark', 'johnson')
console.log(dude)

// this can also be written by using the call Function

var sameWay = {}
Person.call(sameWay, 'mark', 'johnson')
console.log(sameWay)

// it's not exactly the same though
// the new keyword does a lot more
// you can add function to pseudo classes by line 12

console.log(dude.fullName())

// another way is by using function prototypes

// first we dive into the new keyword
