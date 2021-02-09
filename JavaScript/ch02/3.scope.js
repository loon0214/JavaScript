console.log(" ") /////////////////////////////////////////////
console.log("---------- 6.1 scope -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let msg = 'Earth'

{
   let msg ='Dzien dobry'
   console.log(msg) // Dzien dobry
}

{
   let msg = 'Swiat'
   console.log(msg) // Swiat
}
console.log(msg) //Earth

console.log(" ") /////////////////////////////////////////////
console.log("---------- 6.2 scope -----------") //////////////
console.log(" ") /////////////////////////////////////////////
 
const greeting = 'Dzien dobry'
function say(name){console.log(greeting, name)}
say('bibi') // Dzien dobry, bibi   


console.log(" ") /////////////////////////////////////////////
console.log("---------- 6.3 scope -----------") //////////////
console.log(" ") /////////////////////////////////////////////
 
sayHi(); // Czesc
// sayHello(); // ReferenceError: Cannot access 'sayHello' before initialization
// tell();   // ReferenceError: tell is not defined
   
function sayHi(){console.log('Czesc')}

const sayHello = function(){console.log("Dzien Dobry")}

sayHi(); //Czesc
sayHello(); //Dzien Dobry

console.log(" ") /////////////////////////////////////////////
console.log("---------- 6.4 scope -----------") //////////////
console.log(" ") /////////////////////////////////////////////

const age = 18
if(age < 20){
   function welcome(){console.log("you are in teens")}
}
welcome(); // you are in teens

if(age < 20){
   const allow = function(){console.log("you are in 10s")}
}
//allow(); // ReferenceError: allow is not defined {} 벗어나면서 증발


