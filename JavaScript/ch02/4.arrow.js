console.log(" ") /////////////////////////////////////////////
console.log("---------- a + b -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let add = function(a,b){return a+b}

add = (a,b) => a+b
console.log(add(1,2)) //3

console.log(" ") /////////////////////////////////////////////
console.log("---------- n = 2*n -----------") //////////////
console.log(" ") /////////////////////////////////////////////


const double = n => 2*n
console.log(double(2)) //4

console.log(" ") /////////////////////////////////////////////
console.log("---------- greet -----------") //////////////
console.log(" ") /////////////////////////////////////////////


const greet = () =>  console.log('Dzien dobry')
greet() // Dzien dobry

console.log(" ") /////////////////////////////////////////////
console.log("---------- age -----------") //////////////
console.log(" ") /////////////////////////////////////////////

const age = 18
const welcome = (age < 20)?
      ()=> console.log("you are in teens"):
      ()=> console.log("you are not in teens")
   welcome() //you are in teens
   
console.log(" ") /////////////////////////////////////////////
console.log("---------- sum -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let sum = (a,b) =>
   {const result = a+b; return result}

console.log(sum(1,2)) //3

// 명령문 2개 이상시 {} block 사용