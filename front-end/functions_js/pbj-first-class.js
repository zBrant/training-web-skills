function fn(cb){
    console.log("executar acao de callback")
    console.log(typeof cb)
    typeof cb === "function" && cb()
    console.log("\n")
}

fn()
fn(function(){
    console.log("funcao passada por paramentro")
})

function callback(){
    console.log("funcao callback passada por paramentro")
}
fn(callback)

const obj = {
    callback
}
obj.callback()

function fn2(n1){
    return function(n2){
        return n1 * n2
    } 
}

const funcao2 = fn2(10)
const mult = funcao2(2)

console.log(mult)
