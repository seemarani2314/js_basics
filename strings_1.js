
//array - collection of elements
//string - collection of characters
let day = 'tuesday '
console.log(day.length) //8
let subDay = (day.slice(0, 4)) //tues
console.log(subDay)
console.log(day[1]) //u

//tue //day
day = 'tuesday '
let splitDay = day.split("s")
console.log(splitDay[0])
console.log(splitDay[1])
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length) //trim to use to trim the space

//How to calculate difference between date extracted as String
let today = '19'
let dayAfterTomorrow = '27'
let difference = parseInt(dayAfterTomorrow) - parseInt(today)
console.log(difference)
difference.toString() // to change back to String

//How to concatenate two strings
let newQuote = day + "is Funday and today is Sunday"
console.log(newQuote)
let findDay = newQuote.indexOf("day", 5) // find second day so need to start with the incex 5
console.log(findDay)



//find number of occurence of "day" in a string
let newday = 'tuesday'
let quote = newday + "is Funday and today is Sunday"
let count = 0
let val = quote.indexOf("day")
while (val !== -1) {
    count++
    val = quote.indexOf("day", val + 1)
}
console.log("Occurence of word day in a string = " + count)