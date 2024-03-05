(function(){
    // não renderiza as tags 
    // document.querySelector(".top-bar p").textContent += "Kratos Ronaldo Silva"

    // renderiza as tags 
    // document.querySelector(".top-bar p").innerHTML += "<b> Kratos Ronaldo Silva </b>"

    const elem = document.querySelector(".top-bar p")
    // const nomeUsuario = "Kratos Ronaldo Silva"
    const nomeUsuario = null

    if(!nomeUsuario){
        // elem.style.display = "none"
        // elem.parentElement.style.display = "none"
        // elem.remove()
        const elemToRm = elem.parentElement
        elemToRm.parentElement.removeChild(elemToRm)
        return
    }

    elem.innerHTML += `<b> ${nomeUsuario} </b>`
})()
