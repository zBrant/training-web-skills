let arr = [4, 5, 10, 20, 35, 4, 5]

console.log(`index primeiro elemento encontrado => ${arr.indexOf(5)}`)
console.log(`index ultimo elemento encontrado => ${arr.lastIndexOf(5)}`)

console.log(`elemento existe => ${arr.includes(5)}`)
console.log(`primeiro elemento que satisfaz a condição do callback => ${arr.find(function(elem){
    return elem > 20
})}`)
console.log(`index do primeiro elemento que satisfaz a condição => ${arr.findIndex(function(elem){
    return elem > 20
})}`)