// "use strict"

x = 20 

function foo(){
    "use strict"
    x = 10
}

foo()
console.log(x)

function dobrar(n1, n1){
    // "use strict"
    console.log(n1, n1)
    return n1 * n1
}

console.log(dobrar(5, 6))

function teste(){
    "use strict"
    console.log(this)
    this.a = "a"
}
teste()