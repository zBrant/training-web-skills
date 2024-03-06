(function(){
    function calculaIMC(peso, altura){ 
        if(typeof peso !== "number" || typeof altura !== "number") 
            throw new Error("not a number")
        return (peso / (altura ** 2)).toFixed(1)
    }

    function classificaIMC(imc){
        if(imc  < 16.9){
            return "muito abaixo do peso"
        }else if(imc < 18.4){
            return "abaixo do peso"
        }else if(imc < 24.9){
            return "peso normal"
        }else if(imc < 29.9){
            return "acima do peso"
        }else if(imc < 34.9){
            return "obesidade 1"
        }else if(imc < 40){
            return "obesidade 2"
        }else {
            return "obesidade 3"
        }
    }

    try{
        let imc = calculaIMC(70, 1.80)
        console.log(classificaIMC(imc))
    }catch(e){
        console.log(e.message)
    }
})()
