(function () {
    const header = document.querySelector(".hero-content h1")
    const hero = document.querySelector(".hero-content")
    const p = document.createElement("p")
    let contagem = header.firstElementChild.textContent.trim().split(" ")

    let dia = contagem[0].split("/").reverse() 
    dia.push(...contagem[1].split("H"))
    let dataEmMs = Date.UTC(...dia)

    console.log(dataEmMs)

    // setInterval(countData, 1000)
    // hero.append(p)

    // function countData(){
    //     let diferenca = (dataEmMs - Date.now()) 
    //     console.log(diferenca)
    //     let diaCr = Math.floor(diferenca / (1000*60*60*24))
    //     let horasCr = Math.floor(diferenca % (1000*60*60*24) / (1000*60*60))
    //     let minCr = Math.floor(diferenca % (1000*60*60) / (1000*60))
    //     let segCr = Math.floor(diferenca % (1000*60) / 1000)
    //     p.innerHTML = `Contagem Regressiva: <span> ${diaCr} days | ${horasCr} hours | ${minCr} minutes | ${segCr} seconds</span>`
    // }

    let diferenca = (dataEmMs - Date.now()) 
    console.log(diferenca)
    let diaCr = Math.floor(diferenca / (1000*60*60*24))
    let horasCr = Math.floor(diferenca % (1000*60*60*24) / (1000*60*60))
    let minCr = Math.floor(diferenca % (1000*60*60) / (1000*60))
    let segCr = Math.floor(diferenca % (1000*60) / 1000)

    setInterval(()=>{
        countData(diaCr, horasCr, minCr, segCr--)
        if(segCr < 0){
            segCr = 59
            minCr--
        }

        if(minCr < 0){
            minCr = 59
            horasCr--
        }

        if(horasCr < 0){
            diaCr--
            horasCr = 23
        }

    }, 1000)
    hero.append(p)

    function countData(d,h,m,s){
        p.innerHTML = `Contagem Regressiva: <span> ${d} days | ${h} hours | ${m} minutes | ${s} seconds</span>`
    }
})()