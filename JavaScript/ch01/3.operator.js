console.log(" ") /////////////////////////////////////////////
console.log("---------- arithmetic -----------") //////////////
console.log(" ") /////////////////////////////////////////////

const val = 1+2*3/2; console.log(val) //4

console.log(" ") /////////////////////////////////////////////
console.log("---------- incrementing -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let i = 1; console.log(++i); //2
i= 1;
console.log(i++); //1
console.log(i); //2

console.log(" ") /////////////////////////////////////////////
console.log("---------- concatenation -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let foo = 'Hello,';
let bar = 'world!!';
console.log(foo+' '+bar); //Hello, World!!

foo= 1;
bar = '2';
console.log(foo+ bar); //12
//unary plus operator(+)
console.log(foo+ Number(bar)); //3
console.log(foo+ +bar); //3

console.log(" ") /////////////////////////////////////////////
console.log("---------- logical -----------") //////////////
console.log(" ") /////////////////////////////////////////////

const one = 1;
const zero = 0;
const two = 2;

console.log(one || zero); //1
console.log(zero || one); //1
console.log(one && zero); //0
console.log(one && two); //2
console.log(two && one); //1

//foo && doSomething(foo)
// bar = baz || createBar()

console.log(" ") /////////////////////////////////////////////
console.log("---------- equivalent -----------") //////////////
console.log(" ") /////////////////////////////////////////////

const baz ='1';
console.log(one == zero); //false
console.log(one != zero); //true
console.log(one == baz); //true

console.log(" ") /////////////////////////////////////////////
console.log("---------- identical -----------") //////////////
console.log(" ") /////////////////////////////////////////////

console.log(one === baz); //false
console.log(one !== baz); //true
console.log(one === parseInt(baz)); //true

console.log("----------------");
console.log('kotka' === 'kotka'); //true
console.log(1 === 1); //true
console.log({} === {}); //false
console.log(function(){} === function(){}); //false

console.log("-----------------");
console.log(one > two); // false
console.log(two > one); // true
console.log(one <= baz); //true