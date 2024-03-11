function formatarNome(name){
    let index = name.indexOf(' ')
    if(index<0) return name
    return `${name.substring(index)}, ${name.slice(0 ,index)}`.trim()
}

console.log(formatarNome("Daniel"))
console.log(formatarNome("Daniel Morales"))
console.log(formatarNome("Daniel Tapias Morales"))