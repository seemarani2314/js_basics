//Sorting on an array - sort method only sort Strings not numbers

let fruits = ["Banana", "Kiwi", "Apple", "Pomegranate", "Papaya"]
let sortedFruits = fruits.sort()
console.log(sortedFruits)
console.log(fruits.reverse())

//Sorting numbers

var numbers = [10,5,8,6,12,16,14]
console.log(numbers.sort((a,b)=>a-b)) //sort the numbers
console.log(numbers.sort((a,b)=>b-a)) // reverse the numbers