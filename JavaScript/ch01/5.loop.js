console.log(" ") /////////////////////////////////////////////
console.log("---------- for -----------") //////////////
console.log(" ") /////////////////////////////////////////////

for(let i=0; i<2; i++)
   console.log(`for:${i}`); //$변수 ,string

/*
for:0
for:1 
*/

for(let i=0,limit=2; i<limit; i++)
   console.log(`for:${i}`);//지역변수

/*
for:0
for:1 
*/

console.log(" ") /////////////////////////////////////////////
console.log("---------- while -----------") //////////////
console.log(" ") /////////////////////////////////////////////

let i = 0;
while(i<2){
   console.log(`while:${i+10}`);
   i++;
}

/*
while: 10
while: 11
*/

i= -1;
while(++i<2)
   console.log(`while: ${i+10}`);

/*
while: 10
while: 11
*/

console.log(" ") /////////////////////////////////////////////
console.log("---------- do while -----------") //////////////
console.log(" ") /////////////////////////////////////////////
         
do{
   console.log('do');
}while(false); //do


for(let i=0; i<5; i++){
   if(i >=2) break;
   console.log('hello');
}