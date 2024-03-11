(function () {
  document.body.classList.remove("no-js")
  let elements = [...document.querySelectorAll("[data-addclass-on-scroll]")]

  window.addEventListener("scroll", addClassOnScroll)

  function isElementIntoView(el) {
    let rect = el.getBoundingClientRect()
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.top >= 0 && rect.bottom <= innerHeight)
    )
  }

  function addClassOnScroll() {

    if (elements.length == 0) {
      window.removeEventListener("scroll", addClassOnScroll)
      console.log("evento removido com sucesso")
    }

    elements.forEach(el => {
      if (isElementIntoView(el)) {
        let delay = parseInt(el.getAttribute("data-addclass-on=scrool-dalay")) || 0
        setTimeout(function () {
          let _class = el.getAttribute("data-addClass-on-scroll")
          el.classList.add(_class)
          el.removeAttribute("data-addClass-on-scroll-delay")
          el.removeAttribute("data-addClass-on-scroll-delay")
          elements = [...document.querySelectorAll("[data-addclass-on-scroll]")]
        }, delay)
      }
    });
  }

  addClassOnScroll()
})();