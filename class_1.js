//kexport this class in another class
module.exports = class Person {
    age = 30
    get location(){
        return "Estonia"
    }
//constructor is a special method which executes by default when we create an object of a class

    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
        console.log(this.firstName+this.lastName)
    }
}

let firstPerson = new Person("Archit","Shukla")
console.log(firstPerson.age)
console.log(firstPerson.location)
firstPerson.fullName()
let secondPerson = new Person("Seema","Rani")
console.log(secondPerson.age)
console.log(secondPerson.location)
secondPerson.fullName() 