const ok = true;
const fail = false;

console.log(" ") /////////////////////////////////////////////
console.log("---------- if -----------") //////////////
console.log(" ") /////////////////////////////////////////////

if(fail){}//never run

if(fail){console.log("Hello, World!!");}

if(fail){}
else{
   if(ok) console.log("Earth");
   else console.log("Luna");
}

//false
/*
false;
'';
' ';
NaN;
null;
undifined;
0;

false '' NaN null undefined 0

//true
'hello';
[];
{}
-1;
*/

console.log(" ") /////////////////////////////////////////////
console.log("---------- ternary -----------") //////////////
console.log(" ") /////////////////////////////////////////////

const foo = ok ? 1:0;
console.log(foo); //1

console.log(" ") /////////////////////////////////////////////
console.log("---------- switch -----------") //////////////
console.log(" ") /////////////////////////////////////////////

const bar ='bar';

   switch(bar){
      case 'bar': console.log('bar'); break;
      case 'baz':   console.log('baz'); break;
      default   : console.log('all right');
      } // bar