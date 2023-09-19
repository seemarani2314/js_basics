//var - keyword is confined to global level/function level but if IF block is used we can re-initailize it.
//let - keyword is confined to global level/block level {scope is inside this}

var greet = "Morning"

if (1 == 1) {
   var greet = "Afternoon"
}

function a() {
   var greet = "Evening"
}

console.log(greet)