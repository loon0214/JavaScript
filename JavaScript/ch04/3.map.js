console.log(" ") /////////////////////////////////////////////
console.log("---------- 3. map -----------") //////////////
console.log(" ") /////////////////////////////////////////////

// map 에는 데이터를 key와 value 형태로 저장
// 첫번째 파라미터 key, 두번째 value

let map = new Map()

map.set('1', 'hello')
map.set(1, {name: 'dia'})
map.set(true, function fn(){})

// Object key type = Symbol(감추고 싶을때 사용)

console.log(map.get('1'))    // hello
console.log(map.get(true))   // [Function: fn]

console.log(map.has(1))    // true
console.log(map.size)      // 3

console.log(" ") /////////////////////////////////////////////
console.log("---------- Delete -----------") //////////////
console.log(" ") /////////////////////////////////////////////

console.log(map.delete(1))   // true
console.log(map.size)      //2 -> delete complete (hello has been deleted)

map.clear()
console.log(map.size)      //0

console.log(" ") /////////////////////////////////////////////
console.log("---------- 객체를 key로 쓰고 싶으면 -> map 사용 -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let person = {name: 'demon'}
map = new Map()
map.set(person, 12)
console.log(map.get(person)) // 12


console.log(" ") /////////////////////////////////////////////
console.log("---------- chaning -----------") //////////////
console.log(" ") /////////////////////////////////////////////


map = new Map();
map.set(1, 'amy').set(2, 'avril').set(3,'adel')
console.log(map) // Map { 1 => 'amy', 2 => 'avril', 3 => 'adel' }


console.log(" ") /////////////////////////////////////////////
console.log("---------- iterable map -----------") //////////////
console.log(" ") /////////////////////////////////////////////


let greens = new Map([
   ['garlic', 500],
   ['tomato', 350],
   ['onion', 50]
])

for(let vegetable of greens)
   console.log(vegetable)

for(let user of map)
console.log(user)

for(let vegetable of greens.keys()) // key들 만 불러옴
   console.log(vegetable)
   
for(let amount of greens.values()) // value(값) 들만 불러옴
   console.log(amount) 

greens.forEach((val, key, map) => console.log(key, val)) // key,value 출력

console.log(" ") /////////////////////////////////////////////
console.log("---------- object → map -----------") //////////////
console.log(" ") /////////////////////////////////////////////

// 배열을 원소로 갖고 있는 벼열이면 변경 가능

let user = {
      name: 'amy',
      age : 17
}

let entries = Object.entries(user)
console.log(entries) // Object type
map = new Map(entries)
console.log(map) // map type

console.log(" ") /////////////////////////////////////////////
console.log("---------- entries → object -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let items =[
   ['apple',   1],
   ['orange',   2],
   ['pear',    3]
]

let fruits = Object.fromEntries(items)
console.log(fruits)

console.log(" ") /////////////////////////////////////////////
console.log("---------- map → object -----------") //////////////
console.log(" ") /////////////////////////////////////////////

map = new Map()
map.set('apple', 1)
map.set('orange', 2)
map.set('pear', 3)

entries = map.entries()
console.log(entries)

fruits = Object.fromEntries(entries)
console.log(fruits)

//set은 key가 없어서 값으로만 구분해야한다.

