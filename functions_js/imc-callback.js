(function(){
    function calculaIMC(peso, altura, cb){ 
        return (typeof cb !== "undefined" && cb((peso / (altura ** 2)))) || (peso / (altura ** 2)).toFixed(1)
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
        console.log(calculaIMC(70, 1.80))
        console.log(calculaIMC(80, 1.80, classificaIMC))
        console.log(calculaIMC(140, 1.80, classificaIMC))
        console.log(calculaIMC(100, 1.80, classificaIMC))
        console.log(calculaIMC(120, 1.80, classificaIMC))
        console.log(calculaIMC(10, 1.80, classificaIMC))
    }catch(e){
        console.log(e.message)
    }
})()
