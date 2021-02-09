console.log(" ") /////////////////////////////////////////////
console.log("---------- proto -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let zwierze = {name: 'zwierzeta'}
let bunny ={age: 3}

console.log(" ") /////////////////////////////////////////////
console.log("---------- proto type -----------") //////////////
console.log(" ") /////////////////////////////////////////////

console.log(zwierze.__proto__) //{}
console.log(bunny.__proto__) //{}

bunny.__proto__ = zwierze;
console.log(bunny.__proto__) // { name: 'zwierze' }
console.log(bunny.name, bunny.age) // zwierze 3

ziwierze = {walk(){console.log('ziwierze walk')}}
bunny = {__proto__: ziwierze}
bunny.walk() // ziwierze walk

bunny.walk = function(){console.log('bunny walk')} //객체.property name
bunny.walk() // bunny walk

let user = {
   _name: 'user',
   get name(){return this._name},
   set name(name){this._name = name}
}

let admin = {__proto__: user}

console.log(admin.name) // user

ziwierze ={
   name:'ziwierze',
   weight: 50,
   eat(){console.log(`${this.name} eat`)}   
}

bunny = {
   name: 'bunny',
   eat(){console.log(`${this.name} eat`)}
}

let lion = {
   name: 'lion',
   eat(){console.log(`${this.name} eat`)},
   __proto__: ziwierze
}

ziwierze.eat() // ziwierze eat
bunny.eat() // bunny eat 
lion.eat() // lion eat

console.log(Object.keys(bunny)) // [ 'name', 'eat' ]

for(let key in bunny)
   console.log(key)
   
/*
name
eat
 */
   
console.log(Object.keys(lion)) // [ 'name', 'eat' ]
for(let key in lion)
   console.log(key)
/*
 name
eat
weight
 */
   
for(let key in lion){
   let isOwn = lion.hasOwnProperty(key)
   
   if(isOwn) console.log(`child property: ${key}`)
   else console.log(`parent property: ${key}`)
}
/*
child property: name
child property: eat
parent property: weight
*/