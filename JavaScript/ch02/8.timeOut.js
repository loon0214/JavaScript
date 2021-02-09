console.log(" ") /////////////////////////////////////////////
console.log("---------- 1000ms = 1s -----------") //////////////
console.log(" ") /////////////////////////////////////////////

function sayHi(){console.log("czesc?")}
setTimeout(sayHi, 1000) // call back after set time

function greet(phrase, who){console.log(phrase, who)}
setTimeout(greet, 2000, "Dzien dobry~", 'bibi')

let timeId = setTimeout(() => console.log("czesc"), 3000)
console.log(timeId)

let timeId2 = setInterval(() => console.log('tictok'), 2000)

clearTimeout(timeId)