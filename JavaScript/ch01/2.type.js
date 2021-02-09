console.log(" ") /////////////////////////////////////////////
console.log("---------- string -----------") //////////////
console.log(" ") /////////////////////////////////////////////
let foo = "I am a string"
foo = 'So am I'
foo =`back tick`
   
foo = 'ona mowi "JavaScript jest spoko"'; //dynamic typing
foo = "ona mowi \"JavaScript jest spoko\""
console.log(foo)
   
// ' "  의미상 같음

console.log(" ") /////////////////////////////////////////////
console.log("---------- number 실수: 64 bit floating point number -----------") //////////////
console.log(" ") /////////////////////////////////////////////
foo = 100;
foo = 100.10;
foo = 0.10;

console.log(1/0); //Infinity
console.log('a'/1); // NaN :not a Number

foo = 1; console.log(isFinite(foo)) //true
foo = 'hello'; console.log(isFinite(foo)) //false

console.log(" ") /////////////////////////////////////////////
console.log("---------- empty -----------") //////////////
console.log(" ") /////////////////////////////////////////////

foo ='1'; console.log(parseInt(foo)) //1
foo = 'a'; console.log(parseInt(foo)); //NaN
foo = '100px'; console.log(parseInt(foo)); //100
foo = '+1'; console.log(parseInt(foo)); //1
foo = '-1'; console.log(parseInt(foo)); //-1
foo = '123456-1211111'; console.log(parseInt(foo)); //123456


console.log(" ") /////////////////////////////////////////////
console.log("---------- 12.6 -----------") //////////////
console.log(" ") /////////////////////////////////////////////

foo ='12.6';
console.log(parseInt(foo)) //12
console.log(parseFloat(foo)) //12.6
console.log(Number(foo)) //12.6

//bigint: 2**53bit, 16 digit number over
//////foo = 1n;

//boolean 
const ok = true;
const fail = false;

//null: nothing, empty, unknown
let val = null;

console.log(" ") /////////////////////////////////////////////
console.log("---------- undefined -----------") //////////////
console.log(" ") /////////////////////////////////////////////
let val2;
console.log(val2); //undefined
val2 = undefined;

console.log(" ") /////////////////////////////////////////////
console.log("---------- symbol -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let id = Symbol('id')
console.log(typeof id) // symbol

console.log(" ") /////////////////////////////////////////////
console.log("---------- typeof -----------") //////////////
console.log(" ") /////////////////////////////////////////////

console.log(typeof 'a'); //string
//console.log(typeof 3);
//console.log(typeof 1n);
console.log(typeof true); //boolean
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof meh); //undefined
console.log(typeof foo); //string

console.log(typeof function(){}); //function
console.log(typeof {}); //object
console.log(typeof []); //object
//console.log(typeof symbol("a"));

console.log(" ") /////////////////////////////////////////////
console.log("---------- casting -----------") //////////////
console.log(" ") /////////////////////////////////////////////

val = true
val = String(val)
console.log(typeof val); //string

val = '6'/'2'; console.log(val); //3
val = false / true; console.log(val); //0

console.log(" ") /////////////////////////////////////////////
console.log("---------- Number -----------") //////////////
console.log(" ") /////////////////////////////////////////////

val = '1';
val = Number(val);
console.log(typeof val); //number

console.log(Number('1'), //1
          Number(true), // 1 
          Number(' '), //0
          Number(''),  //0
          Number(null), //0 
          Number('a'),  // NaN
          Number(undefined)) // NaN
          
console.log(" ") /////////////////////////////////////////////
console.log("---------- boolean -----------") //////////////
console.log(" ") /////////////////////////////////////////////

console.log(Boolean(-1)); //true
console.log(Boolean('a')); //ture
console.log(Boolean('0')); //true
console.log(Boolean(' ')); // true

console.log("----------  -----------") //////////////
console.log(Boolean(0)); //false
console.log(Boolean('')); //false

console.log("----------  -----------") //////////////
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false

console.log("----------  -----------") //////////////


//
foo = NaN; 
console.log(isNaN(foo)); //true
console.log(1==1); //true
console.log(foo == NaN); //false? ??? teach me

foo = 1; console.log(isFinite(foo)); //true
foo = 'hello'; console.log(isFinite(foo)); //false
//dynamic typing, duck typing
