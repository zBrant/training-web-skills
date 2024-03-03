const arr = [1, 2, 3]
const arr2 = [4, 5, 6]

function fun(){
    console.log(arguments)
    console.log(arguments.length)
}

fun(1,2,3) // arguments.length = 3
fun(arr) // arguments.length = 1
fun([1,2,3])

fun(...[1,2,3]) // arguments.length = 3
fun(...arr) // arguments.length = 3

arr.push(...arr2)
console.log(arr)