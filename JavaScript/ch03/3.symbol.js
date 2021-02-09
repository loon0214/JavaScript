let id1 = Symbol('id')
let id2 = Symbol('id')

console.log(id1 == id2)    //false
console.log(id1)          // Symbol(id)
console.log(id1.toString()) // Symbol(id)
console.log(id1.description)// id

console.log(" ") /////////////////////////////////////////////
console.log("---------- hidden property -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let user = {name: 'nia'}
let id = Symbol('id')
user[id] = 1

console.log(user.id) // undefined
console.log(user[id]) // 1

user = {
      name: 'marie',
      age: 22,
      [id]:2 // 나만의 property [] -> symbol hided
}

console.log(user.id) // undefined
console.log(user[id]) // 2

for(let key in user)
   console.log(key)

console.log(Object.keys(user)) // [ 'name', 'age' ] id hided