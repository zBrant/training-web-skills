(function(){
    function calcualMedia(){
        let length = arguments.length
        let soma = 0

        for (let i = 0; i < length; i++) {
            if(typeof arguments[i] !== "number")
                throw new Error("Not a number")
            soma += arguments[i];
        }

        return length && soma / length
    }

    try{
        console.log(calcualMedia(1,2,3,4,5))
        console.log(calcualMedia())
        console.log(calcualMedia(8, "asflkjsa"))
    }catch(e){
        console.log(e.message)
    }
})()

