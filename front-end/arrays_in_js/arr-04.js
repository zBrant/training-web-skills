let arr1 = ["a", "b", "c"]

// os dois apontam para o mesmo endereço de memória
// let arr2 = arr1 

let arr2 = [].concat(arr1) 
arr2[arr2.length] = "new value"

console.log(arr1)
console.log(arr2)