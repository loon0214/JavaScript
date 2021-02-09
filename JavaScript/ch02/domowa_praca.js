console.log(" ") /////////////////////////////////////////////
console.log("---------- 1.calculate.js -----------") //////////////
console.log(" ") /////////////////////////////////////////////
/*
다음 조건을 가진 산술 연산 function을 만드세요.
- parameter(피연산자1, 피연산자2, 연산종류)를 받는다.
- 연산 종류에 맞는 계산 결과를  return 한다.
- 호출자가 연산 종류를 명시하지 않으면 더하기를 한다.
 */

function cal(x, y, operator='+'){
   let result = 0
   
   switch(operator){
   case '+' : result = x+y; break;
   case '-' : result = x-y; break;
   case '*' : result = x*y; break;
   case '/' : result = x/y;
   }
   return result;
}

console.log(cal(1,2,'*')) //2
console.log(cal(1,2)) // 3


console.log(" ") /////////////////////////////////////////////
console.log("---------- 2.cal callback -----------") //////////////
console.log(" ") /////////////////////////////////////////////
/* hw1 을 callback 형태로 refactoring 하세요. */

function add(a,b)         {return a+b}
function minus(a,b)         {return a-b}
function multiply(a,b)      {return a*b}
function divide(a,b)      {return a/b}
//function cal(a,b, fn=add){return fn(a,b)}??????

console.log(cal(1,2, add), //3
         cal(1,2, minus),
         cal(1,2, multiply),
         cal(1,2, divide),
         cal(1,2))
         
console.log(" ") /////////////////////////////////////////////
console.log("---------- 4. cook -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let chef1 = (food) => `sweet ${food}`
let chef2 = (food) => `cold ${food}`
let waiter = (food, chef) => chef(food)

console.log(waiter('lody', chef1), // sweet lody
         waiter('lody', chef2), // cold lody
         waiter('czekolada', chef2)) // cold czekolada

         
console.log(" ") /////////////////////////////////////////////
console.log("---------- 9. clock -----------") //////////////
console.log(" ") /////////////////////////////////////////////

setInterval(() => console.log(new Date() +0), 3000);