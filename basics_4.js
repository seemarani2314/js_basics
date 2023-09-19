//Array is a collection of elements of homogenius nature

var marks = Array(6) // lenght of the array is 6
var marks = new Array(20, 43, 63, 79, 90, 89) // total elements are 6

//create subarray from an array
submarks = marks.slice(2, 5) //starts at 2nd array and till 5th elements wants to slice
console.log(submarks)
console.log(marks)

var marks = [20, 43, 63, 79, 90, 89]    // how to declare and initialize
marks[3] = 64  // how to assign new value to an array

for (i = 0; i < marks.length; i++) {
    console.log(marks[i] + 5)
} // how to retrieve all elements of an array

//sum up all the elements of an array
sum = 0
for (j = 0; j < marks.length; j++) {
    sum = sum + marks[j]
}
console.log(sum)

marks[6] = 90 //added one more element to the array
marks.push(98) // adding an element to an array
marks.unshift(10) //add element at the start of the array

console.log(marks) // it will print all elemnts of an array
console.log(marks.length) // to find the length of an array
marks.pop() // deletes the last element from an array
console.log(marks)
console.log(marks.indexOf(10)) // to find the index of the added element to an array

//to find that the element is present in the array or not - 120 presents or not?
console.log(marks.includes(90))