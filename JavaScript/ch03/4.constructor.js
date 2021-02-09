console.log(" ") /////////////////////////////////////////////
console.log("---------- factory function -----------") //////////////
console.log(" ") ////////////////////////////////////////////
let makeUser = function(name, age){
   return{
      name: name,
      age: age,
   }
}

makeUser = function(name, age){
   return{name, age}
}

console.log(makeUser('daria', 27))   //{ name: 'daria', age: 27 }
console.log(makeUser('lia', 22))    //{ name: 'lia', age: 22 }

console.log(" ") /////////////////////////////////////////////
console.log("---------- constructor -----------") //////////////
console.log(" ") ////////////////////////////////////////////

// 생성자 : 객체를 만듬 (feat. new 연산자)

function User(name){
   this.name = name // this = {}
   this.greet = function(){
      console.log(`Jestem ${this.name}`)
   }
   // return this
}

console.log(" ") /////////////////////////////////////////////
console.log("---------- function = 값  -----------") //////////////
console.log(" 이름이 없으면 한번만 사용 가능, ") //////////////
console.log(" 이름  있으면 여러번 사용가능 ") //////////////
console.log(" ") /////////////////////////////////////////////

const user1 = new User('bibi')
const user2 = new User('sahara')
user1.greet() // Jestem bibi
user2.greet() // Jestem sahara

let str = String(1)
console.log(typeof str) //string

str = new String(1)
console.log(typeof str) // object

console.log(" ") /////////////////////////////////////////////
console.log("---------- 생성자는 객체를 리턴 -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let human = new function(){
   this.name = 'nia'
   this.age = 27
}

function BigUser(){
   this.name = 'amy'
   return {name: 'vermouth'}
}

function SmallUser(){
   this.name = 'lory'
   return
}

console.log(new BigUser()) // { name: 'vermouth' }
console.log(new SmallUser()) // SmallUser { name: 'lory' }

console.log(new SmallUser) // SmallUser { name: 'lory' }
console.log(SmallUser) // [Function: SmallUser] //변수 값을 읽음
console.log(SmallUser()) // undefined

console.log(" ") /////////////////////////////////////////////
console.log("---------- Object -----------") //////////////
console.log(" ") ////////////////////////////////////////////

const user = new Object()

user.name = 'ola'
user['age'] = 38
user.greet = function(){
   console.log(`Jestem ${this.name}`)
}

user.greet() //Jestem ola 

// 주소값이 다르면 서로 다른객체

console.log(" ") /////////////////////////////////////////////
console.log("---------- view Object -----------") //////////////
console.log(" ") ////////////////////////////////////////////

const person = Object.create(user)
console.log(person) //entry가 없는 {} 
console.log(person.name) // ola
console.log(person === user) // false 상속에 따르면 서로 다른 객체.