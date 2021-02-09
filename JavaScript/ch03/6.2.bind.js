console.log(" ") /////////////////////////////////////////////
console.log("---------- 6.2 -----------") //////////////
console.log(" ") ////////////////////////////////////////////

let name = 'lia'
let man ={name: 'liu'}

function greet(){console.log(`nazywam sie ${this.name}.`)}

greet() //nazywam sie lia.

let fn = greet.bind(man)
fn() // nazywam sie liu.

setTimeout(fn, 1000)

let user = {
   name: 'jade',
   greet(){console.log(`nazywam sie ${this.name}.`)}
}

let greetFn = user.greet.bind(user)
setTimeout(greetFn, 1000) // nazywam sie liu.

user.greet = function(){console.log("Hello, World!!")}