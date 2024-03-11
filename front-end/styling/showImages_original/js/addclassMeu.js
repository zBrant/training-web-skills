(function(){
    document.body.classList.remove("no-js")
    let cards = [...document.querySelectorAll(".card")]

    function defineStyle(elemento, n){
        elemento.style.transition = `opacity ${n}s`
        elemento.style.opacity = n
    }

    window.addEventListener("scroll", ()=>{
        cards.forEach(elem =>{
            if(elem.getBoundingClientRect().bottom-100 < window.innerHeight){
                elem.querySelectorAll("img").forEach(elem => {
                    if(elem.style.opacity !== "1") defineStyle(elem, 1);
                })
            }
        })
    })
})();