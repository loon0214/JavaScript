console.log(" ") /////////////////////////////////////////////
console.log("---------- Odd vs Even -----------") //////////////
console.log(" ") /////////////////////////////////////////////

function sayOdd(num){
   console.log(`${num} is an odd number.`)
}

function sayEven(num){
   console.log(`${num} is and even number.`)
}

function lookNum(x, y){
   const num = parseInt(Math.random()*10)+1
   if(num %2 != 0)x(num)
   else y(num)
}

lookNum(sayOdd, sayEven)
console.log(" ") /////////////////////////////////////////////
console.log("---------- pass -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let chef1 = function(food){return `sweet ${food}`}
let chef2 = function(food){return `hot$ {food}`}
let waiter = function(food, chef){return chef(food)}

console.log(waiter('pasta', chef1),
         waiter('pasta', chef1),
         waiter('schwainehaxen',chef2))

 
