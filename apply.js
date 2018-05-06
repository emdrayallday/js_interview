function a(b,c,d) {
console.log(this)
console.log(b)
console.log(c)
console.log(d)
}

a.apply(1, [2,3,4])


// apply is similar to call, but you pass arguments as an array

//but why use apply instead of calls

// normally you would use call, unless the function takes a variable number of parameters

function sum() {
  var total = 0
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}

var things = [1,2,3,4,5,23,64,72]

var x = sum.call(null,1,2,3)
var y = sum.apply(null, things)
console.log('using sum', x)
console.log('apply', y)

// you would use apply when you are not sure of the # of paramaters and need to pass an array
