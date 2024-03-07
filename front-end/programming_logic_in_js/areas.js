function calcularAreaRetangulo(l, a){
    if(typeof l !== "number" || typeof a !== "number"){
        throw new Error("not numbers")
    }
    return l * a
}

function calcularAreaTriangulo(b, h){
    if(typeof b !== "number" || typeof h !== "number"){
        throw new Error("not numbers")
    }
    return (b*h)/2
}

function calcularAreaCirculo(r){
    if(typeof r !== "number"){
        throw new Error("r is not a number")
    }
    return Math.PI * (r**2)
}
