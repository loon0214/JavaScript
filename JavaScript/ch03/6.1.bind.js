console.log(" ") /////////////////////////////////////////////
console.log("---------- 6.1 -----------") //////////////
console.log(" ") ////////////////////////////////////////////

let user = {
   name: 'madonna',
   greet(){
      console.log(`nazywam sie ${this.name}`) // nazywan sie madonna
   }
}

user.greet() // nazywan sie undefined
setTimeout(user.greet, 100)

let fn = user.greet
setTimeout(fn, 200) // nazywan sie undefined

setTimeout(function(){
   user.greet() // nazywan sie madonna
}, 300)

setTimeout(() => user.greet(), 400) // nazywan sie madonna

name = 'lia'
let man = {}