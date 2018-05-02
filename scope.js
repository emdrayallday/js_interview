function foo() {
  console.log(myvar)
}

function bar() {
  var myvar = 1
  foo()
}
//bar()

// this does not work

function goo () {
  var myvar = 1
  function hi() {
    console.log(myvar)
  }
  hi()
}
goo()

// this works...it looks up to the next layer of scope

  var myvar = 1
function boo () {

  function hi() {
    console.log(myvar)
  }
  hi()
}
boo()

// this also works
