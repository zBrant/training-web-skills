let n = 0

setTimeout(function(){
    console.log("timeout depois de 2000ms")
}, 2000)

const intervalo =  setInterval(function(){
    console.log("interval n: ", ++n)
    if(n >= 2000) clearInterval(intervalo)
}, 10) 