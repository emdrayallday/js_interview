
// When refered to this outside of a function, it looks at the global object
console.log(global)


// When referred inside a function
// function checkThis() {
//   console.log(this)
// }
// checkThis()
//

// When inside a variable it points to the variable.
// it returns the mark object rather than the global object

var mark = {
  checkThis: function() {
    console.log(this) // this looks at mark object
    function checkOther() {
      console.log(this) // this looks at global object
    }
    checkOther()
  }
}
mark.checkThis()

// To solve problem, you can assign the this keyword to a variable in a specific spot

var mark1 = {
  checkIt: 'both point to mark1',
  checkThis: function() {

      var self = this
    console.log(self)
 function checkOther() { console.log(self)}
 checkOther()
  }
}
mark1.checkThis()
