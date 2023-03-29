const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.nav')
const line = document.querySelector('.line')
const body = document.querySelector('body')
const links = Array.from(document.querySelectorAll('.nav a'))

function doBurger(){
    burger.classList.toggle('active__burger')
    nav.classList.toggle('active')
    body.classList.toggle('locked')
    line.classList.toggle('line__active')
}
function forLinks (){
    links.forEach((el) =>{
  el.addEventListener('click', doBurger)
    })
}
forLinks()
burger.addEventListener('click', doBurger)

//doModalWindow
