console.log(" ") /////////////////////////////////////////////
console.log("---------- proto type -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let ziwierze = {
   name: 'ziwierze',
    age: 3
}

let bunny = {name: 'bunny'}
function Bunny(name){this.name = name}

console.log(ziwierze.__proto__) // {}
console.log(bunny.__proto__) // {}

console.log(Bunny.prototype) // Bunny {}
console.log(Bunny.prototype.constructor) // [Function: Bunny]
console.log(Bunny.prototype.__proto__) // {}

console.log(" ") /////////////////////////////////////////////
console.log("---------- bunny2 -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let bunny2 = new Bunny('bialy')
console.log(bunny2.__proto__) // Bunny {}
console.log(bunny2.constructor) // [Function: Bunny]
console.log(bunny2.name, bunny2.age) // bialy undefined

console.log(" ") /////////////////////////////////////////////
console.log("---------- bunny3 -----------") //////////////
console.log(" ") /////////////////////////////////////////////

Bunny.prototype = ziwierze
let bunny3 = new Bunny('czarny')
console.log(bunny3.__proto__) // { name: 'ziwierze', age: 3 }
console.log(bunny3.constructor) // [Function: Object]

console.log(bunny2.__proto__) // Bunny {}

console.log(" ") /////////////////////////////////////////////
console.log(" even change the proto type, can't change prototype that created past ") //////////////
console.log(" ") /////////////////////////////////////////////

let bunny22 = new bunny2.constructor('złoto') //gold po polsku
console.log(bunny22) // { name: 'złoto' }
console.log(bunny22.__proto__) // { name: 'ziwierze', age: 3 }

let bunny33 = new bunny3.constructor('srebo') // sliver po polsku
console.log(bunny33) // [String: 'srebo'] // 배열 객체 // object 생성자를 통해 만듦

let obj = new Object('srebo')
console.log(obj) // [String: 'srebo'] // object 생성자를 통해 만듦

console.log(" ") /////////////////////////////////////////////
console.log("---------- node.js: javaScript runtime -----------") //////////////
console.log(" ") /////////////////////////////////////////////

function Pies(name){this.name = name}
Pies.prototype.age = 30

let pies = new Pies('żółty') // yellow po polsku
console.log(pies) // Pies { name: 'żółty' }
console.log(pies.name, pies.age) // żółty 30

let pies2 = new pies.constructor('gray')
console.log(pies2.constructor) // [Function: Function]
console.log(pies2.name, pies2.age) // gray 30
