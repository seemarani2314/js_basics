// 1 - use reduce in accumulating calculations
var marks = [20,43,63,79,90,89]
//reduce filter map
let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)


// 2 print the even numbers from an array in a separate subarray
var scores = [12,13,14,16]
let subarray = []
for (let i=0;i<scores.length;i++){
    if(scores[i]%2==0){
       subarray.push(scores[i])
    }
}
console.log(scores)
console.log(subarray)


//3 - using filter to filter the even elements from an array to make a new array
let filteredScores = scores.filter(score => score%2==0)
console.log(filteredScores)

//4 you need to multiply each element of new array with 3 and sum them
let mappedArray = filteredScores.map(score=>score*3)
console.log(mappedArray)
let summedArray = mappedArray.reduce((sum, mark)=>sum+mark,0)
console.log(summedArray)

//5 we can do chaining instead of writing this long length of code
let sumValue = scores.filter(score => score%2==0).map(score=>score*3).reduce((sum, mark)=>sum+mark,0)
console.log(sumValue)