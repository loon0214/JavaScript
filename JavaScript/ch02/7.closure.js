console.log(" ") /////////////////////////////////////////////
console.log("---------- nested function -----------") //////////////
console.log(" ") /////////////////////////////////////////////

function init(){
   let name = 'amanda'
      
   function displayName(){console.log(name)}
   displayName()
}

init() //amanda

console.log(" ") /////////////////////////////////////////////
console.log("---------- closure = function + lexcical environment -----------") //////////////
console.log(" ") /////////////////////////////////////////////

function makeFn(){
   let name= 'cloud'
   
   function displayName(){console.log(name)}
   return displayName
}

let myFn = makeFn()
myFn() // cloud

console.log(" ") /////////////////////////////////////////////
console.log("---------- 0 -----------") //////////////
console.log(" ") /////////////////////////////////////////////

function makerCounter(){
   let count = 0
   
   return function(){return count++}
   }

let counter = makerCounter()
console.log(counter(), counter(), counter()) // 0 1 2