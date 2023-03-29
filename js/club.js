const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.nav')
const line = document.querySelector('.line')
const body = document.querySelector('body')
const links = Array.from(document.querySelectorAll('.nav a'))
const element = Array.from(document.querySelectorAll('.slider__item'))
const windowSlider = document.querySelector('.corts__slider')
const wrapperSlider = document.querySelector('.corts__slider__wrapper')
const buttonNextly = document.querySelector('#next')
const ArrElements = document.querySelectorAll('.slider__item')
const buttonPrevious = document.querySelector('#prev')

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

//slider
const showedSlides = 1
const scrolledSlides = showedSlides 
const elWidth = windowSlider.clientWidth / showedSlides
let newPosition = (scrolledSlides * elWidth) 
let start = 0 
wrapperSlider.style.left = `${start}px`

//scroll next-slide
function widthOfEl (){
    element.forEach(function (el){
        if(windowSlider.clientWidth < 1297){
    el.style.width = `${elWidth}px`} else{
    el.style.width = `1296px`
    }
})}
widthOfEl()
function scrollToNext () {
    const itemsLeaved = Math.round(element.length - (Math.abs(start) + showedSlides * elWidth) / elWidth)
    if(itemsLeaved < scrolledSlides){
    start -= elWidth * itemsLeaved
    wrapperSlider.style.transform = `translateX(${start}px)`}
    else {
        start -= newPosition
        wrapperSlider.style.transform = `translateX(${start}px)` 
    }
    checkedButtons()
}
function scrollToPrev(){
    const itemsRighted = Math.round(Math.abs(start) / elWidth)
    if (itemsRighted >= scrolledSlides){
        start += newPosition
        wrapperSlider.style.transform = `translateX(${start}px)`
    } else {
        start += itemsRighted * elWidth
        wrapperSlider.style.transform = `translateX(${start}px)`
    }
    checkedButtons()
}
function checkedButtons (){
    const itemsRighted = Math.round(Math.abs(start) / elWidth)
    if (itemsRighted > 0){
        buttonPrevious.classList.remove('disable')
    } else {
        buttonPrevious.classList.add('disable')
    }
    const itemsLeaved = Math.round(element.length - (Math.abs(start) + showedSlides * elWidth) / elWidth)
    if(itemsLeaved < 1){
        buttonNextly.classList.add('disable')
    } else {
        buttonNextly.classList.remove('disable')
    }
    }
checkedButtons()

buttonNextly.addEventListener('click', scrollToNext)
buttonPrevious.addEventListener('click', scrollToPrev)