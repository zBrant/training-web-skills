function getRandomNumber(inicio = 0, fim = 10, integer = true){
    let r = Math.random() * (fim - inicio) + inicio
    return (integer) ? parseInt(r) : r  
}

console.log(getRandomNumber(15, 25, false))
console.log(getRandomNumber(15, 25, true))
