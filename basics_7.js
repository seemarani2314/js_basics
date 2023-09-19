//Basic Function with name
function add(a, b) {
    return a + b
}
let sum = add(5, 6)
console.log(sum)


//anyonymus function = do not have names = Function expressions
let sumOfIntegers = function (a, b) {
    return a + b
}
console.log(sumOfIntegers(2, 3))

//how to declare anyonymus function with fat pipe
let sumOfNumbers = (c, d) => c + d
console.log(sumOfNumbers(3, 5))