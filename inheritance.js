//Inheritance is the main pillar in Object Oriented Programming
//one class can inherit/acquire the properties/methods of another class
//The class which inherits the properties of other is known as subclass (derived class, child class)
//The class whose properties are inherited is known as superclass

const Person = require("./class_1")
class Pet extends Person {

    get location() {
        return "Blue Cross"
    }

    constructor(firstName, lastName) {
        //call parent class constructor
        super(firstName, lastName)
    }
}

let newPet = new Pet("Tom ", "Riddle")
newPet.fullName()
console.log(newPet.location)