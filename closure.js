function sayHello(name) {
  var text = 'Hello ' + name
  return function() {
      console.log(text)
  }

}

var sayMark = sayHello("mark")
sayMark()

/*
when a function returns a Function
the 2nd function has a reference to the first function

*/


var foo = []
for (var i = 0; i < 10; i++) {
  foo[i] = function() { return i }
}

console.log(foo[0]())
console.log(foo[1]())
console.log(foo[2]())

// when closure is created it doesn't get a copy of i
// closure points to value of i in the outer scope
// by the time we call foo the loop is exhauses and i = 10


/// so how to implement something the way we thought it should work?
// join forces with immediately invoked function expressions

var foo = []
for (var i = 0; i < 10; i++) {
  (function(){
    var y = i
      foo[i] = function() { return y }
  })()


}

console.log(foo[0]())
console.log(foo[1]())
console.log(foo[2]())
