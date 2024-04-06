let word = "meu carro ta na chuva" 

console.log(word.slice(1, 6))
console.log(word.substring(1, 6) + "\n")

let wordAsObj = new String("minha string como objeto")
console.log(wordAsObj)
console.log(wordAsObj.valueOf())
console.log(wordAsObj.toString())

let stringComEspacos = "    string com espacos      "

console.log(stringComEspacos)
console.log(stringComEspacos.trim(), "<-----")
console.log(stringComEspacos.trimEnd(), "<-----")
console.log(stringComEspacos.trimStart(), "<-----")

let num = "0123456789"
console.log(num.padStart(20, "*"))
console.log(num.padEnd(20), "<-----")
console.log("tamanho --->", num.length)

let telefone = "91234-2345"
let telefone2 = "1234-2345"

function mascararTelefone(num){
    return num.slice(0,1) + num.slice(1, 8).replace(/[\d]/g, "*") + num.slice(-2)
}

function mascararTelefone2(num){
    return num.split('').map((n, i) => (i>0 && i <num.length-2 && n !== "-") ? "*" : n).join('')
}

console.log(mascararTelefone(telefone))
console.log(mascararTelefone(telefone2))

console.log("---------")
console.log(mascararTelefone2(telefone))
console.log(mascararTelefone2(telefone2))