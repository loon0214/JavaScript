console.log(" ") /////////////////////////////////////////////
console.log("---------- 5.call.js -----------") //////////////
console.log(" ") ////////////////////////////////////////////

let user1 = {
   name: 'isabel',
   greet(){console.log(`nazywam sie ${this.name}.`)}
}
let user2 = {
   name: 'jade',
   greet(){console.log(`nazywam sie ${this.name}.`)}
}

user1.greet()
user2.greet()

let name = 'marie'
function greet(){console.log(`nazywam sie ${this.name}`)}

user1 = {name: 'nia'}
user2 = {name: 'tia'}

greet()
greet.call(user1)
greet.call(user2)

user1 = {
   name: 'ria',
   greet(){console.log(`nazywam sie ${this.name}`)}
}

user2 = {name: 'carol'}

user1.greet() 
//user2.greet() // TypeError: user2.greet is not a function
user1.greet.call(user2)