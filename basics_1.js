//How to Print in javascript
console.log("hello world")

//from javascript ES-6 (engine we use let, const)
let a = 4
var b = 4.2
//type of is used to find the data type of the variable
console.log(typeof (a))

var b = "3"
console.log(typeof (b))

let required = true
console.log(typeof (required))
//null and undefined

//we cannot redeclare variable with 'let' keyword, but it is possible through 'var' variable.
var c = a + b
console.log(c)

//negation operator - only in case of boolean operator
console.log(required)
console.log(!required)

//re-assigning works with let keyword.
c = a + b
console.log(c)
//for const keyword - re-assigning is not possible. It will give compile time error.