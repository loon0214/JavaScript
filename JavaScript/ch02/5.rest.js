console.log(" ") /////////////////////////////////////////////
console.log("---------- 1 -----------") //////////////
console.log(" ") /////////////////////////////////////////////

function sum(a,b){return a+b} 
console.log(sum(1,2,3)) //3 (1(a) , 2(b) 선택 , 3?(버림))

console.log(" ") /////////////////////////////////////////////
console.log("---------- rest parameter -----------") //////////////
console.log(" ") /////////////////////////////////////////////

function sumAll(...args){ // total sum
   let tot = 0;
   
   for(let arg of args) tot += arg;
   return tot;
}

console.log(sumAll(1), sumAll(1,2,3)); //1 ,6

console.log(" ") /////////////////////////////////////////////
console.log("---------- 2 -----------") //////////////
console.log(" ") /////////////////////////////////////////////


function printName(firstName, lastName, ...titles){ //titles => else
   console.log(firstName, lastName); // Elizabeth turner
   console.log(titles[0],titles[1], titles[2]); //operator consul undefined
   console.log(titles.length); //2
}

printName('Elizabeth','turner', 'operator', 'consul');

console.log(" ") /////////////////////////////////////////////
console.log("---------- 3 -----------") //////////////
console.log(" ") /////////////////////////////////////////////

function showName(){
   console.log(arguments.length)
   console.log(arguemnts[0], arguments[1])
}

//showName() //0 // undefined undefined
//showName('emy', 'turner') //2 //emy turner

console.log(" ") /////////////////////////////////////////////
console.log("---------- sprea syntax -----------") //////////////
console.log(" ") /////////////////////////////////////////////

console.log(Math.max(1,2,3)) //3

let arr = [1,2,3];
console.log(Math.max(arr)); // NaN
console.log(Math.max(...arr)); //3

let arr1 = [1, -2, 3];
let arr2 = [4, 1, -4];
console.log(...arr1, ...arr2); // 1,-2, 3,   4, 1, -4
console.log(Math.max(...arr1, ...arr2)); //4
console.log(Math.max(...arr1, 1, ...arr2, 9)); //9

let merged = [...arr1, 1, ...arr2, 9]
console.log(merged)
/*
[
   1, -2 ,3 ,1,
   4, 1, -4, 9
]
*/

console.log(" ") /////////////////////////////////////////////
console.log("---------- string --변환--> arr -----------") //////////////
console.log(" ") /////////////////////////////////////////////


let greeting = 'hello'
   arr = [...greeting]
console.log(greeting) // hello

arr2 = Array.from(greeting)
console.log(arr2) // [ 'h', 'e', 'l', 'l', 'o' ]

console.log(" ") /////////////////////////////////////////////
console.log("---------- 0 -----------") //////////////
console.log(" ") /////////////////////////////////////////////


arr = [ 'h', 'e', 'l', 'l', 'o' ]
greeting = [...greeting] // y
console.log(greeting) // [ 'h', 'e', 'l', 'l', 'o' ]