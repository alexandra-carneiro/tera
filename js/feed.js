let bars = document.querySelector('.bars')
let nav = document.querySelector('nav')
let x = document.querySelector('.x')
let btnTheme = document.querySelector('#btnTheme')

// Abrir nav
bars.addEventListener("click", () => {
  nav.setAttribute("data-aberto", "aberto")
  bars.style.visibility = "hidden"
  x.style.visibility = "visible"
})

// Fechar nav
x.addEventListener("click", () => {
  nav.setAttribute("data-aberto", "fechado")
  bars.style.visibility = "visible"
  x.style.visibility = "hidden"
})


btnTheme.addEventListener("click", () => {
  document.querySelector('html').classList.toggle('dark-mode')
})