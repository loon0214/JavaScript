console.log(" ") /////////////////////////////////////////////
console.log("---------- JSON(JavaScript Object Notation -----------") //////////////
console.log(" ") /////////////////////////////////////////////
// jQuery is a fast, small, and feature-rich JavaScript library.
// how to user, not a grammar 기억부분 o 문법 x
// DOM (Document Object Model)
let user = {
   name: 'kelly',
   age: 30,
   isAdmin: false,
   course: ['HTML', 'CSS'],
   wife: null
}

// Json != javascript, js에 객체를 표기하는 문법을 흉내

let json = JSON.stringify(user);
console.log(typeof json) // string
console.log(json)        // {"name":"kelly","age":30,"isAdmin":false,"course":["HTML","CSS"],"wife":null}


console.log(" ") /////////////////////////////////////////////
console.log("----------  npm (node package manager) -----------") //////////////
console.log(" ") /////////////////////////////////////////////
//npm i -g json  : Json 설치

user = {
   name: 'jessie',
   room: {number : 23, 
   participants: ['july', 'ann']},
   greet(){return 'dzein dobry'},
   [Symbol('id')]: 123,
   color: undefined
}

//function , symbol, undefied  has been deleted
// 객체 표시 {"name":"jessie","room":{"number":23,"participants":["july","ann"]}}
console.log(JSON.stringify(user)) 

let room = {number: 23}
let meetup = {title: 'conference', room}
console.log(JSON.stringify(meetup))

room.toJSON = function(){return this.number}
console.log(JSON.stringify(meetup))

console.log(" ") /////////////////////////////////////////////
console.log("---------- encoding: 기호화 -----------") //////////////
console.log(" ") /////////////////////////////////////////////

// decode: 현실화

//let manJson = '{"name": "will","age" : 27,"major": ["CS","art"],"friend": {name:"sia","age": 25}}'
//
//let man = JSON.parse(manJson);
//console.log(man);