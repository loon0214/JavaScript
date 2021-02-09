console.log(" ") /////////////////////////////////////////////
console.log("---------- destructing assigment -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let arr = ['ilya','kantor'];
let [firstName,surname] = arr;
console.log(firstName, surname); //ilya kantor
[firstName,surname]= 'taylor swift'.split(' ');
console.log(firstName, surname); //taylor swift

console.log(" ") /////////////////////////////////////////////
console.log("---------- 1 -----------") //////////////
console.log(" ") /////////////////////////////////////////////


let [one,two] = [1,2,3];
console.log(one, two) // 1 2

let [three, four] = [3]
console.log(three, four); // 3 undefined

[one, , three] = [1,2,3,4]
console.log(one, three) // 1 3

console.log(" ") /////////////////////////////////////////////
console.log("---------- 2 -----------") //////////////
console.log(" ") /////////////////////////////////////////////


let [a,b,c] = 'I am'
console.log(a,b,c); // I a

[a,b,c] = new Set([1,2,3,4])
console.log(a,b,c) // 1 2 3

console.log(" ") /////////////////////////////////////////////
console.log("---------- 3 -----------") //////////////
console.log(" ") /////////////////////////////////////////////


let user = {};
[user.name, user.surname] = 'taylor switt'.split(' ')
console.log(user);

user = {
      name:' ola',
      age: 21
}

let entries = Object.entries(user);
console.log(entries)

for(let [key, val] of Object.entries(user))
   console.log(key, val)
   
console.log(" ") /////////////////////////////////////////////
console.log("---------- 4 -----------") //////////////
console.log(" ") /////////////////////////////////////////////

   
let map = new Map([
   ['name', 'edith'],
   ['age', 30]
]);

for(let [key, val] of map)
   console.log(key, val);

console.log(" ") /////////////////////////////////////////////
console.log("---------- 5 -----------") //////////////
console.log(" ") /////////////////////////////////////////////

   
let guest = 'jane';
let admin = 'pia';
   
[guest, admin] = [admin, guest]
console.log(guest, admin);

[one, two, ...rest] = [1,2,3,4]
console.log(one, two, rest);

[name, surname ='anonymous'] = ['july'];
console.log(name, surname);

console.log(" ") /////////////////////////////////////////////
console.log("---------- pattern 에서는 할당하는 변수와 key의 값 일치해야 함. -----------") //////////////
console.log(" ") /////////////////////////////////////////////


let options = {
   title: 'menu',
   width: 100,
   height: 200
};

let {title, width, height} = options;
console.log(title, width, height);

let {width: w, height: h} = options;
console.log(w, h);

//let {title: t, ...other} = options;
//console.log(t, other);

console.log(" ") /////////////////////////////////////////////
console.log("---------- pattern에 기본 값을 줄 수 있다. -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let {title: subject, wide=1000} = options;
console.log(subject, wide);

[options.title, options.width, options.height] = ['article',10,20];
console.log(options);

({title, width, height} = options);
console.log(title, width, height)

console.log(" ") /////////////////////////////////////////////
console.log("---------- 6 -----------") //////////////
console.log(" ") /////////////////////////////////////////////


let bread = {
   size:  {width:100, height:200},
   items: ['cake', 'donut'],
   extra: true
};

let {size, items} = bread;
console.log(size);
console.log(items);

let{
   size: {width: brea, height: level},
   items: [item1, item2]
} = bread;

console.log(brea, level, item1, item2);

console.log(" ") /////////////////////////////////////////////
console.log("---------- argument -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let menu = {
   title: 'menu',
   items: ['list', 'add'],
   expired: 10
};
