console.log(" ") /////////////////////////////////////////////
console.log("---------- ADD property -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let user = {};

user.height = '200 cm' 
user['weight'] = '80 kg'

console.log(user.height, user.weight)

console.log(" ") /////////////////////////////////////////////
console.log("---------- DELETE property -----------") //////////////
console.log(" ") /////////////////////////////////////////////

delete user.weight // 객체.property 이름
console.log(user.weight) //undefined

console.log(" ") /////////////////////////////////////////////
console.log("---------- look object's key -----------") //////////////
console.log(" ") /////////////////////////////////////////////

user = {
   name: 'joanna',
   age : 18
}

console.log('name' in user)

for(let key in user)
   console.log(`${key}: ${user[key]}`)

console.log(Object.keys(user)); // [ 'greet' ]
console.log(Object.values(user)); // [ [Function: greet] ]
console.log(Object.entries(user)) // [ [ 'greet', [Function: greet] ] ]

console.log(" ") /////////////////////////////////////////////
console.log("---------- function property -----------") //////////////
console.log(" ") /////////////////////////////////////////////

user = {greet: function(){console.log('Hello, World!!')}}
user = {greet(){console.log("czesc, kochanie")}}

user.greet() //czesc, kochanie






const foo = function(){}
foo.cnt = 1
console.log(foo.cnt)

function makeUser(name, age){
   return{
         name: name,
         age: age,
   }
}

console.log(makeUser('daria', 27))

makeUser = function(name, age){
   return{
      name,
      age
   }
}

console.log(makeUser('cloud', 22))

   

