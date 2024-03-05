(function(){

    let contador = document.querySelector("#contador span")
    const textArea = document.querySelector("#txtDescricao") 

    textArea.addEventListener("keyup", () => {
        contador.textContent = 255 - (textArea.textLength)
    })

    const checkbox = document.querySelector("#chkAceito")
    const btnAdc = document.querySelector("#btn") 

    checkbox.addEventListener("click", () => {
        btnAdc.disabled = !btnAdc.disabled 
    })

    const titulo = document.querySelector("#txtTitulo")
    
    btnAdc.addEventListener("click", (e) => {
        if(!titulo.value){
            document.getElementById("feedbackMessage").style.transform = "translateY(0)"
            e.preventDefault()
            titulo.focus()
        }
    })

    const btnClose = document.querySelector("#feedbackMessage button") 
    btnClose.addEventListener("click", () => {
        if(titulo.value === ''){
            document.getElementById("feedbackMessage").style.transform = "translateY(calc(-2rem - 100%))"
        }
    })

})()