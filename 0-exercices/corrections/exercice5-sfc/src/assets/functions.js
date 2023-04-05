export function scroll() {
  window.addEventListener("scroll", () => {
    const hdr = document.querySelector("header")
    hdr.style.opacity = 1
    hdr.style.top = '2px'
  })
}

export function search() {
  const search = document.querySelector("input[type=search]")
  const placeholder = search.getAttribute("placeholder")
  let wdth = getComputedStyle(search).getPropertyValue("width")
  let bgC = getComputedStyle(search).getPropertyValue("background-color")
  wdth = wdth.substring(0, wdth.length - 2) // remove px
  const newWdth = parseInt(wdth) * 1.5
  const evts = ['focus', 'blur']
  evts.forEach(evt => {
    search.addEventListener(evt, function () {
      switch(evt) {
        case 'focus':
          bgC = "#261c1a09"
          wdth = newWdth
          this.removeAttribute("placeholder")
        break
        case 'blur':
          bgC = '#fff'
          wdth = newWdth / 1.5
          this.setAttribute("placeholder", placeholder)
        break
      }
      this.style.backgroundColor = bgC
      this.style.width = `${wdth}px`
    })
  })
}

export function zoom() {
  const articles = document.querySelectorAll("article")
  const artEvents = ['mouseenter', 'mouseleave']
  artEvents.forEach(evt => {
    articles.forEach((article) => {
      article.addEventListener(evt, function () {
        const lg = this.children.length
        const img = this.children[lg - 2]
        if(evt === "mouseenter") {
          img.style.opacity = 0.5
          img.style.transform = "scale(1.25)"
        } else {
          img.style.opacity = 1
          img.style.transform = "scale(1)"
        }
      })
    })
  })
}

export function modalOpen(forms) {
  const modal = document.querySelector("#modal")
  const modalDiv = modal.querySelector('.modal-content>div')
  const btns = document.querySelectorAll(".btn-modal")
  btns.forEach(function (btn) {
    btn.addEventListener('click', function() {
      let indexform = btn.getAttribute('data-form-index')
      modal.querySelector('h3').innerText = this.firstChild.textContent
      modal.style.display = "block"
      modalDiv.innerHTML = '' // clean
      modalDiv.innerHTML = forms[indexform]
    })
  })
}

export function modalClose() {
  const close = document.querySelector(".close")
  close.addEventListener('click', function () {
    document.querySelector("#modal").style.display = "none"
  })
}