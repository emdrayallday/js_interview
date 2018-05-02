# "JavaScript Questions"

1. What does use strict do?

 strict mode allows you to place a program or function in a strict operating context. Makes debugging easier, code errors that would have been ignored will now be more obvious

2. Does JS pass parameters by value or by reference?

  Passing primitive types (Numbers, Booleans, Strings) are passed by value <br>
  Passing Objects are passed by reference

3. What are the different types in JS?

  Boolean<br> - primitive
  Number<br> - primitive
  String<br> - primitive
  Null<br> - primitive
  Undefined<br> - primitive
  Object

4. Difference of == and ===?

  triple = checks for type and value, double = checks for values.

5. NaN coercion

  isNaN("1") will be false even though it's a string.<br>
  this is because of type coercion in JS.<br>
  Imagine using Number("1") inside of the isNaN()

  in interview say you can compare NaN to itself, which will always be false if not a number.

6. What are the different scopes in javascript?

  Global variables --- available any part which also adds to global object in node or window object in browser<br>

  function or local scope variables --- only available inside function

7. What is variable hoisting?

  variables are split initially, they are declared at the top but only assigned when it's time to run. See hoisting.js

8. What is scope chain?

  In JS it's lexically, which means it runs in order on page

9. What is an IIFE and why might you use it?

  Immediately Invoked Function Expression pronounced iffy

  A function that is immediately ran, this could be used to eliminate global variables
  <br>since the variable will be in a function scope instead of global scope.
