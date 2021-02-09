let date = new Date();
console.log(date);

console.log(" ") /////////////////////////////////////////////
console.log("---------- timestamp: millisecond 단위로 시간 표시 -----------") //////////////
console.log(" ") /////////////////////////////////////////////


date = new Date(0) // 0 milli sec가 지났을때 = 기준 시간
console.log(date)

date = new Date(24 * 3600 * 1000) // 24 hr x 60 mins x 60 sec x 1000(1sec)
console.log(date)

date = new Date(-24 * 3600 * 1000) // 24 hr x 60 mins x 60 sec x 1000(1sec)
console.log(date)

console.log(" ") /////////////////////////////////////////////
console.log("---------- destructing -----------") //////////////
console.log(" ") /////////////////////////////////////////////

date = new Date('2025-12-26T13:15:15.999Z'); // UTC
console.log(date);

console.log(
      date.getFullYear(),      // 2025
      date.getMonth(),      // 11 (12월) 0 ~ 11
      date.getDate(),         // 26
      date.getHours(),      // 22 (korean time = UTC + 9 hour)
      date.getMinutes(),      // 15
      date.getSeconds(),      // 15
      date.getMilliseconds(),   // 999
      date.getDay()         // 5 일 월 화 수 목 "금" 토
)

console.log(new Date().getTime()); // 1590023936750