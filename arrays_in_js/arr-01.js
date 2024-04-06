let arr = [3, 5, 8, "cr7", "coxim"]
let arr1 = arr.every( function (elem){
    return typeof elem === "number"
})

let arr2 = arr.some( function (elem){
    return typeof elem === "number"
})

let arr3 = arr.map( function (elem){
    return elem * 2
})

let arr4 = arr.filter( function (elem){
    return typeof elem === "number"
})

console.log(`arr --> ${arr}`)
console.log(`every (if number) --> ${arr1}`)
console.log(`some (if number) --> ${arr2}`)
console.log(`map (number *2) --> ${arr3}`)
console.log(`filter (if number) --> ${arr4}`)