// object is collection of properties
//export another class in this class
const newPerson = require('./class_1')

let person = {
    firstName: 'Seema',
    lastName: 'Rani',
    age: 24,
    fullName: function () {
        console.log(this.firstName + this.lastName)
    }
}

console.log(person.firstName)
console.log(person.lastName)
person.fullName()

console.log(person['firstName'])
console.log(person['lastName'])

person.firstName = 'Archit'
person.lastName = 'Shukla'
console.log(person.firstName)
console.log(person.lastName)

//add new properties
person.gender = 'Male'
console.log(person)

//delete existing property
delete person.gender
console.log(person)

//how to check property exist 
console.log('gender' in person)
console.log('firstName' in person)

//print all items of the property in a loop
//print all the values of the javascript objects
for (let key in person) {
    console.log(person[key])
}

let newperson = new newPerson("Chris ", "Edward")
newperson.fullName()