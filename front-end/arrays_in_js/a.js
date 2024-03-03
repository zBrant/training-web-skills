let peso = [
    {
        peso: 15,
        nome: "abaixo"
    },
    {
        peso: 25,
        nome: "normal"
    },
    {
        peso: 30,
        nome: "acima"
    }
]

let imc = 21
// console.log(Object.values(peso))
// console.log(Object.values(peso).find((value) => imc <= value["peso"]))
console.log(peso.find((value) => imc <= value["peso"]))
