console.log(" ") /////////////////////////////////////////////
console.log("---------- 태생이 iterable인 것은 array와, string이다. -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let range = {from: 1, to: 3};

// 객체가 iterable이 되기 위한 조건
// 해당 객체는 Symbol.iterator function를 가지고 있어야 한다.
// Symbol.iterator function은 next 메소드를 가진 객체를 리턴해야 한다.

range[Symbol.iterator] = function() {  // Symbol.iterator function
   return {
      current: this.from,
      last: this.to,
      next() {  // next 메소드
         if(this.current <= this.last)
            return {done: false, value: this.current++};
         else
            return {done: true};
      }
   }
};

//array string = iterable

for(let num of range)
   console.log(num);

range = {
   from: 1,
   to: 3,  // to 값을 Infinity 로 지정하면 무한대로 쓸 수 있다.
   
   [Symbol.iterator]() {
      this.current = this.from;
      return this;
   },

   next() {
      if(this.current <= this.to)
         return {done: false, value: this.current++}
      else
         return {done: true};
   }
}

for(let num of range)
   console.log(num);

console.log(" ") /////////////////////////////////////////////
console.log("---------- iterable string -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let greeting = "hello";
console.log(greeting[Symbol.iterator]);
let iterator = greeting[Symbol.iterator]();

while(true) {
   let result = iterator.next();
   if(result.done)
      break;
   console.log(result.value);
};


for(let char of greeting)
   console.log(char);

console.log(" ") /////////////////////////////////////////////
console.log("---------- array-like -----------") //////////////
console.log(" ") /////////////////////////////////////////////

// array-like 조건
// 인덱스 형태의 번호의 키를 가지고 있어야 한다.
// length 키를 가지고 있어야 한다.

let arr = {
   0: "hello",
   1: "world",  // length를 2로 설정하면, 0, 1번 인덱스까지만 취급한다.
   3: "earth",
   length: 4
};

// for(let item of arr) { }  // 실행하면, 에러가 뜸 : iterable이 아님.


for(let key in arr) {
   console.log(key, arr[key]);
}

arr = Array.from(arr);  // array-like를 array로 변환이 가능하다.
console.log(arr);

for(let word of arr)
   console.log(word);

arr = Array.from(range);  // iterable인 range를 iterable로 변환이 가능하다.
console.log(arr);

arr = Array.from("hello"); // iterable string