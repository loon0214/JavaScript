console.log(" ") /////////////////////////////////////////////
console.log("---------- 1.array -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let arr = new Array(1, "hello", {age:3}, function() {});  
console.log(arr);

arr = [1, true, {age:30}, function fn() {}];
console.log(arr);
// 배열 객체를 생성하는 방법은 array와, literal이 있다.
// 배열에 있는 원소들의 데이터타입은 서로 달라도 된다.

//객체에서 key의 date type = String
//배열에서 key의 date type = number

arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr[3] = 'c';
console.log(arr);
console.log(arr[1]);
console.log(arr.length);  // 배열객체의 length는 원소의 개수를 얻어낸다.

for(let i=0; i<arr.length; i++)
   console.log(arr[i]);

for(let item of arr)
   console.log(item);

console.log(" ") /////////////////////////////////////////////
console.log("---------- concat -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let aArr = [1, 2];
let bArr = [2, 3];
let totArr = aArr.concat(bArr);  // concat은 주어객체(aArr)을 건드리지 않고, 새로운 배열객체(totArr)를 생성한다.
console.log(totArr); // [1, 2, 2, 3]


arr = ['hello', 'world', '!!'];

let str = arr.join();
console.log(str);
console.log(typeof str);

console.log(arr.join('/'));  // 배열 arr을 구분자 '/'로 구분하여 출력한다. 결과 : hello/world/!
console.log(arr.join(''));

console.log(" ") /////////////////////////////////////////////
console.log("---------- stack -----------") //////////////
console.log(" ") /////////////////////////////////////////////

// 쌓여서, 마지막 들어온 것부터 출력
// FILO:      first in, last out

arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr.pop());  // 3을 꺼내고 나서, 배열에서는 3이 사라지게 된다.
console.log(arr);

console.log(" ") /////////////////////////////////////////////
console.log("---------- queue -----------") //////////////
console.log(" ") /////////////////////////////////////////////

// FIFO:   first in, first out

arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr.shift());  // 가장 먼저 넣었던 데이터 1을 꺼내고 나서, 배열에서는 1이 사라지게 된다.
console.log(arr);

console.log(" ") /////////////////////////////////////////////
console.log("---------- reverse -----------") //////////////
console.log(" ") /////////////////////////////////////////////

// 순서를 역순으로.

arr = [1, 2, 3];
arr.reverse();  // 배열의 인덱스를 역순으로 뒤집는다.
console.log(arr);

console.log(" ") /////////////////////////////////////////////
console.log("---------- slice -----------") //////////////
console.log(" ") /////////////////////////////////////////////

// 선택 이전 제외 후, 호출

arr = [0, 1, 2];
let newArr = arr.slice(1);  // 배열의 1번째 인덱스(1)부터 잘라내기를 해서, 새로운 배열에 삽입한다. (1, 2)
console.log(newArr);
console.log(arr);

console.log(" ") /////////////////////////////////////////////
console.log("---------- splice -----------") //////////////
console.log(" ") /////////////////////////////////////////////

arr = [0, 7, 8, 5];
arr.splice(1, 2, 1, 2, 3, 4);  // 배열의 1번째부터 2번째 인덱스까지(7, 8) 잘라내기를 하고, 거기에 새로운 값(1, 2, 3, 4)를 삽입한다. 결과 : (0, 1, 2, 3, 4, 5)
console.log(arr);

console.log(" ") /////////////////////////////////////////////
console.log("---------- sort -----------") //////////////
console.log(" ") /////////////////////////////////////////////

// 오름 차순으로 정렬
arr = [3,5,1,2,1,4]
arr.sort()
console.log(arr) // [ 1, 1, 2, 3, 4, 5 ]

// 내림 차순으로 정렬
arr = [3,5,1,2,1,4]
arr.sort((a,b) => b-a)
console.log(arr) // [ 5, 4, 3, 2, 1, 1 ]

console.log(" ") /////////////////////////////////////////////
console.log("---------- 0 -----------") //////////////
console.log(" ") /////////////////////////////////////////////

arr = ['a', 'b', undefined, 'c'];

for(let i=0; i<arr.length; i++)
   console.log(arr[i]);

for(let item of arr)
   console.log(item);

console.log(" ") /////////////////////////////////////////////
console.log("---------- 1 -----------") //////////////
console.log(" ") /////////////////////////////////////////////


let fruits = ['apple', 'orange', 'pear'];

for(let idx in fruits)
   console.log(`${fruits[idx]}`);
// 배열 객체의 키(idx)를 지정하고, 키의 값을 읽어낸다.

console.log(" ") /////////////////////////////////////////////
console.log("---------- for Each -----------") //////////////
console.log(" ") /////////////////////////////////////////////

function print(e) {console.log(e);}
function print2(e, i) {console.log(`${i} : ${e}`);}
function negate(e, i, arr) {arr[i] = -e;}

arr = [1, 2];
console.log("---------- aaaaaaaaa -----------") //////////////

arr.forEach(print); // 배열객체의 요소들을 읽어낸다.
console.log("---------- bbbbbbbbb -----------") //////////////
arr.forEach(print2); // 배열객체의 인덱스를 읽어낸다.
console.log("---------- ccccccccc -----------") //////////////
arr.forEach(negate); // 배열객체의 요소들을 음수들로 출력한다. [ -1, -2 ]

console.log(arr);

console.log(" ") /////////////////////////////////////////////
console.log("---------- Group -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let group = {
   title: "art",
   students: ["winston", "ucal", "martha"],
   showList() {
      this.students.forEach (
         student => console.log(this.title, student)
      );
   }
};

group.showList();

console.log(" ") /////////////////////////////////////////////
console.log("---------- matrix -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let matrix = [ // column의 갯수가 같아야 된다. [1,2,3], [3,4] x
   [1, 2],
   [3, 4]
];
// 매트릭스가 되려면 행과 열의 개수가 같아야 한다.

// serializing
arr = [1, 2, 3];
console.log(arr);
console.log(arr.toString());
console.log(String(arr));

console.log(" ") /////////////////////////////////////////////
console.log("---------- [] -----------") //////////////
console.log(" ") ////////////////////////////////////////////

// 배열객체와 정수형에 대해 + 연산을 수행한 결과.
console.log([] + 1);
console.log([1] + 1);
console.log([1, 2] + 1);

// 빅데이터 R, 머신 러닝 phython