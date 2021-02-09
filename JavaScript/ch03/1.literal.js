console.log(" ") /////////////////////////////////////////////
console.log("---------- object literal -----------") //////////////
console.log(" ") /////////////////////////////////////////////

{} // 객체생성, 객체를 만드는 문법
let user = {
   name: {
      first: 'bibi',
      last: 'turner'
   },
   'nick name' : 'tiger face',
   age: 17,
   interests : ['muzyki', 'film'],
   sing: function(){
      console.log('la la')
   }
} 
// property 는 가각 , (comma)로 구분.
// 마지막  property ,는 생략가능

console.log(" ") /////////////////////////////////////////////
console.log("---------- read property -----------") //////////////
console.log(" ") /////////////////////////////////////////////


console.log(user.name) //객체명.연산자
console.log(user.name.first)
console.log(user.sing())

//console.log(user.'nick name') //SyntaxError: Unexpected string
console.log(user['nick name']) // tiger face
console.log(user['name']['first']) // bibi

let key ='nick name';
console.log(user[key]); // tiger face

console.log(" ") /////////////////////////////////////////////
console.log("---------- write property -----------") //////////////
console.log(" ") /////////////////////////////////////////////

user.name.first = 'vincent'
user['age'] = 27
console.log(user.name.first, user.age) // cloud 27

console.log(" ") /////////////////////////////////////////////
console.log("---------- number property name -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let man = {
   name: 'charlotte',
   1: 'jeden',
   2: 'dwa'
   }
//console.log(man.1) // missing ) after argument list
console.log(man['1']) // jeden
console.log('name' in man) // true

console.log(" ") /////////////////////////////////////////////
console.log("---------- getter, setter -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let human = {
   _name: 'no name', // _name
   
   get name(){return this._name},
   set name(name){this._name}
   }

human.name ='crown'
console.log(human.name) //crown

human.name ='nia'
console.log(human.name) //nia






let man = {
   name: 'vincent',
   surname: 'valentine',
   
   get   fullName(){return `${this.name} ${this.surname}`},
   set   fullName(name){[this.name, this.surname] = name.split(' ')}
}
console.log(man.fullName) // vincent valentine

man.fullName = 'lala craft'
console.log(man.fullName) //lala craft

console.log(" ") /////////////////////////////////////////////
console.log("---------- domowa praca -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let user2 = {
   _name: 'bia',
   
   get name(){
      return this._name
   },
   
   set name(name){
      if(name.length >= 4) this._name = name
      else console.log('name must be at least 4 characters.')
      }
   }

user2.name = 'nia' // name must be at least 4 characters
user2.name = 'chibi'
console.log(user2.name) //chibi
