console.log(" ") /////////////////////////////////////////////
console.log("---------- name property -----------") //////////////
console.log(" ") /////////////////////////////////////////////

function greet(){console.log('czesc')}
console.log(greet.name) //greet

let sayHello = function(){}
console.log(sayHello.name) // sayHello

console.log(" ") /////////////////////////////////////////////
console.log("---------- 0 -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let user = {
   sayHi(){},
   sayBye: function(){} 
}

console.log(user.sayHi.name) //sayHi
console.log(user.sayBye.name) //sayBye

console.log(" ") /////////////////////////////////////////////
console.log("---------- length property -----------") //////////////
console.log(" ") /////////////////////////////////////////////

function f1(a){}
function f2(a,b){}
function f3(a,b, ...more){}

console.log(f1.length, f2.length, f3.length) //1 2 2

console.log(" ") /////////////////////////////////////////////
console.log("---------- custom property -----------") //////////////
console.log(" ") /////////////////////////////////////////////

function sayHi(){sayHi.counter++}
sayHi.counter = 0

sayHi()
sayHi()

console.log(sayHi.counter) // 2