console.log(" ") /////////////////////////////////////////////
console.log("---------- 4. set -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let set = new Set()
set.add({name: 'july'})
set.add({name: 'pia'})
set.add({name: 'july'})

// 이름이 같더라도 중복 되지 않음 , 
// 객체가 다르기 때문. 주소값다름. 동명이인.

console.log(set) // Set { { name: 'july' }, { name: 'pia' }, { name: 'july' } }

let user1 = {name: 'july'}
let user2 = {name: 'pia'}

set.clear()

console.log(" ") /////////////////////////////////////////////
console.log("---------- set 중복 허용 x-----------") //////////////
console.log(" ") /////////////////////////////////////////////

set.add(user1)
set.add(user2)
set.add(user1)
// set은 중복값을 알아서 처리
console.log(set) // Set { { name: 'july' }, { name: 'pia' } }
console.log(set.size) //2

console.log(" ") /////////////////////////////////////////////
console.log("---------- iterable set-----------") //////////////
console.log(" ") /////////////////////////////////////////////

for(let user of set)
   console.log(user)

   // 첫번째 = 두번째 value 값 같음
set.forEach((val, valAgain, set) => console.log(val, valAgain))

console.log(set.has(user1))    // true
console.log(set.delete(user2))   // true
console.log(set.size)          // 1

set = new Set([1,2,3])
console.log(set)             // Set { 1, 2, 3 }

set = new Set('Dzien dobry')
console.log(set)

   