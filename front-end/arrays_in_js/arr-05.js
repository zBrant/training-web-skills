let arr = [9, 3, 7, 1, 4, 6, 0]

let size = arr.push(12, 324, true, "asdf")
console.log(`retorno do push => ${size}`)
console.log(arr)

let elem = arr.pop()
console.log(`retorno do pop (elem removido) => ${elem}`)
console.log(arr)

let fItem = arr.shift() 
console.log(`retorno do shift (remove primeiro elem) => ${fItem}`)
console.log(arr)

fItem = arr.unshift(32,4656,7676) 
console.log(`retorno do unshift (insere nas primeiras posições) => ${fItem}`)
console.log(arr)

let arr2 = arr.slice(2, 5) 
console.log(`slice arr => ${arr2}`)
console.log(arr)

let arr3 = arr.splice(2, 5, "arroz") 
console.log(`splice arr => ${arr3}`)
console.log(arr)