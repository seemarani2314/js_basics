//if else
const flag = true

if (!flag) {
    console.log("condition satisfied")
} else {
    console.log("condition not satisfied")
    console.log(flag)
}

//while loop
let i = 0
while (i < 10) {
    i++
    //console.log("I am inside the loop")
    console.log(i)
}

//do while loop
do {
    i++
} while (i > 10)
console.log(i)

//while loop or do while loop is used in case we need to execute the loop based on some condition like true or false, for n number of loop we can use for loop 
let required = true
while (required) {
    console.log(required)
    required = false
}