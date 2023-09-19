//var - keyword is confined to global level/function level but if IF block is used we can re-initailize it.
//let - keyword is confined to global level/block level {scope is inside this}
//const - keyword cannot be re-intialized

let greet = "Morning"
const red = "red"

if(1==1){
  let greet = "Afternoon"
}

function a(){
 let greet = "Evening"
}

console.log (greet)

console.log (red)