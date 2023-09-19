//for loop
/*
for (let k=0; k<=10;k++){
    console.log(k)
} */

//find multiples of 2 and 5 from 1 to 10 and only first 3 digit

let n = 0;
for(let i=1;i<=100;i++){
    if(i%2==0 && i%5 == 0){
        n++
        console.log(i)
        if(n==3)
        break
    }
}