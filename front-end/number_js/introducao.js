let numero = 1234567.890

// numeros de digitos apos o ponto 
console.log(numero.toFixed(5))
console.log(typeof numero.toFixed(5))

// numeros de digitos 
console.log(numero.toPrecision(14)) 
console.log(typeof numero.toPrecision(14))
console.log((345).toPrecision(6))

numero = 65.18653

console.log(numero.toExponential())
console.log(numero.toExponential(4))

numero = 15
console.log(numero.toString(2))
console.log(typeof numero.toString(2))

console.log("---BIN---")
console.log((1).toString(2))
console.log((2).toString(2))
console.log((3).toString(2))
console.log((4).toString(2))
console.log((5).toString(2))
console.log((6).toString(2))
console.log((7).toString(2))
console.log((8).toString(2))
console.log((9).toString(2))
console.log((10).toString(2))

console.log("---HEX---")
console.log((11).toString(16))
console.log((12).toString(16))
console.log((13).toString(16))
console.log((14).toString(16))
console.log((15).toString(16))
console.log((16).toString(16))
console.log((17).toString(16))
console.log((18).toString(16))
console.log((19).toString(16))
console.log((20).toString(16))

numero = 123456.789
console.log("normal -->", numero.toLocaleString())
console.log("BR -->\t  ", numero.toLocaleString("pt-BR"))
console.log("US -->\t  ", numero.toLocaleString("en-US"))

console.log("BRL -->\t  ", numero.toLocaleString("pt-BR", {style: "currency", currency:"BRL"}))
console.log("USD -->\t  ", numero.toLocaleString("en-US", {style: "currency", currency:"USD"}))
console.log("EUR -->\t  ", numero.toLocaleString("pt-PT", {style: "currency", currency:"EUR"}))

console.log(Number.MAX_VALUE,"<---->", Number.MIN_VALUE)
console.log(isFinite(0/0))
console.log(0/0)
console.log(isFinite(0))
console.log(isFinite(5))

console.log()

let numAsString = "4.573"
console.log(isNaN(numAsString))
console.log("num ->", numAsString, "type ->", typeof numAsString, "parseFloat ->", parseFloat(numAsString))
console.log()
numAsString = "a4.457"
console.log(isNaN(numAsString))
console.log("num ->", numAsString, "type ->", typeof numAsString, "parseFloat ->", parseFloat(numAsString))