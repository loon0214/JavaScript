console.log(" ") /////////////////////////////////////////////
console.log("---------- function declartion -----------") //////////////
console.log(" ") /////////////////////////////////////////////

function greet(){console.log("Hello, World!!")} //code block
greet(); // Hello, World!!

console.log(" ") /////////////////////////////////////////////
console.log("---------- function expression -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let salute = function(){console.log("Czesc?");};
salute(); // Czesc?

console.log(" ") /////////////////////////////////////////////
console.log("---------- parameter 있는 function -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let sayHello = function(user, greeting){return `${greeting}, ${user}`}
console.log(sayHello('rebecca','ciao')) // ciao, rebecca

//function을 값으로서 복사 할당한다.
const sayHi = function(){console.log('hi')}
const say = sayHi;
say(); //hi

console.log(" ") /////////////////////////////////////////////
console.log("---------- function expression -----------") //////////////
console.log(" ") // function을 return 값으로 사용한다.

let praise = function(user, greeting){
   const phrase = greeting + ', ' + user +'.'
   
   return function(){console.log(phrase)}
   }

let praise2 = praise('bibi', 'dzien dobry')
console.log(praise2) //[function]
praise2(); //dzien dobry

// 이름 없는 function을 1회용으로 사용한다.
(function(){console.log("earth")})() //earth

console.log(" ") /////////////////////////////////////////////
console.log(" 이름 없는, 이름 있는 function을 parameter로 사용한다.") //////////////
console.log(" ") /////////////////////////////////////////////

let myFn = function(fn){
   const result = fn()
   console.log(result)
}

myFn(function() {return 'Luna'}) // Luna

let argFn = function(){return 'interstellar'}
myFn(argFn) //interstellar

console.log(" ") /////////////////////////////////////////////
console.log("---------- function() -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let add = new Function('a','b','return a + b');
console.log(add(11111, 22222)) //33333
console.log(typeof add) // function

console.log(" ") /////////////////////////////////////////////
console.log("---------- parameter 기본 값 -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let showMsg = function(from, msg ='message is not exist'){
console.log(`${from}: ${msg}`);
}

showMsg('trinity', ' follow a bunny') // follow a bunny
showMsg('trinity'); // message isn't exist


console.log(" ") /////////////////////////////////////////////
console.log(" to be continue") //////////////
console.log(" ") /////////////////////////////////////////////



console.log(" ") /////////////////////////////////////////////
console.log("---------- NFE: Name Fucntion Express -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let tellHi = function fn(who){
   if(who) console.log(`czesc, ${who}.`)
   else fn('guest')
}

tellHi() // czesc. guest.
tellHi('bibi') // czesc, bibi.
// fn() // ReferenceError: fn is not defined

