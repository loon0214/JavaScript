let timeId = setInterval(() => console.log('tictok'),2000)

setTimeout(()=> {
   clearInterval(timeId)
   console.log('stop')
}, 3000)

console.log(new Date())