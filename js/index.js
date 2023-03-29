const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.nav')
const line = document.querySelector('.line')
const body = document.querySelector('body')
const sliderEl = document.querySelector('.coachs__coach')
const ArrOfEl = Array.from(document.querySelectorAll('.coachs__coach'))
const sliderWrapper = document.querySelector('.coachs__slider__wrapper')
const sliderWindow = document.querySelector('.coachs__slider')
const photo = Array.from(document.querySelectorAll('.coachs__coach__photo'))
const names = Array.from(document.querySelectorAll('.coachs__coach__name'))
const infos = Array.from(document.querySelectorAll('.coachs__coach__info'))
const buttonNext = document.querySelector('.button__next')
const buttonPrev = document.querySelector('.button__previous')
const element = Array.from(document.querySelectorAll('.slider__item'))
const ArrElements = document.querySelectorAll('.slider__item')
const wrapperSlider = document.querySelector('.services__slider__wrapper')
const buttonPrevious = Array.from(document.querySelectorAll('.buttons__wrapper'))[0]
const buttonNextly = Array.from(document.querySelectorAll('.buttons__wrapper'))[1]
const windowSlider = document.querySelector('.services__slider')
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

const liArr = Array.from(document.querySelectorAll('li'))
const beforeElArr = Array.from(document.querySelectorAll('.before'))

function placeOfLi (){
    for (let i=0; i <liArr.length; i++){
        const distance = 56
        liArr[i].style.top = distance * i + 'px' 
        beforeElArr[i].style.top = distance * i + 3 + 'px'
    }
}
placeOfLi()


//slider
// определяем по ширине экрана сколько будет отображаться элементов
let slidesToShow
switch (true){
    case (sliderWindow.clientWidth >= 1276) : slidesToShow = 6;break;
    case (sliderWindow.clientWidth >= 1080) : slidesToShow = 5;break;
    case (sliderWindow.clientWidth >= 864) : slidesToShow = 4;break;
    case (sliderWindow.clientWidth >= 648) : slidesToShow = 3;break;
    case (sliderWindow.clientWidth >= 432) : slidesToShow = 2;break;
    case (sliderWindow.clientWidth <= 431 ) : slidesToShow = 1;break
}
const slidesToScroll = slidesToShow // сколько элементов проскролливать
const padding = 20 // необязательный паддинг между элементами
const sliderElWidth = (sliderWindow.clientWidth - (padding * slidesToShow)) / slidesToShow // динамически изменяемая ширина элементов в з-ти от отображаемых
let movePosition = (slidesToScroll * sliderElWidth) + (slidesToScroll * padding) // насколько каждый раз изменяется сдвиг оболочки
let position = 0 // стартовая позиция оболочки

// устанавливаем ширину элемнта
function doSlider (){
    ArrOfEl.forEach(function (el){
      el.style.width = `${sliderElWidth}px` 
    })
}
doSlider()

// функция отвечающая за скролл дальше
function scrollSliderNext () {
    const itemsLeft = Math.round(ArrOfEl.length - (Math.abs(position) + slidesToShow * sliderElWidth) / sliderElWidth)
    if(itemsLeft < slidesToScroll){
    position -= sliderElWidth * itemsLeft
    sliderWrapper.style.transform = `translateX(${position}px)`}
    else {
        position -= movePosition
        sliderWrapper.style.transform = `translateX(${position}px)`  
    }
    checkButtons()
}

// функция отвечающая за сколл назад
function scrollSliderPrev(){
    const itemsRight = Math.round(Math.abs(position) / sliderElWidth)
    if (itemsRight >= slidesToScroll){
        position += movePosition
        sliderWrapper.style.transform = `translateX(${position}px)`  
    } else {
        position += itemsRight * sliderElWidth
        sliderWrapper.style.transform = `translateX(${position}px)`  
    }
    checkButtons()
}

// функция отвечающая за выключение включение кнопок
function checkButtons (){
    const itemsRight = Math.round(Math.abs(position) / sliderElWidth)
    if (itemsRight > 0){
        buttonPrev.classList.remove('disable')
    } else {
        buttonPrev.classList.add('disable')
    }
    const itemsLeft = Math.round(ArrOfEl.length - (Math.abs(position) + slidesToShow * sliderElWidth) / sliderElWidth)
    if(itemsLeft < 1){
        buttonNext.classList.add('disable')
    } else {
        buttonNext.classList.remove('disable')
    }
    }
checkButtons()

// события вешаем на кнопки
buttonNext.addEventListener('click', scrollSliderNext)
buttonPrev.addEventListener('click', scrollSliderPrev)
// slider

//second-slider
const showedSlides = 1
const scrolledSlides = showedSlides 
const elWidth = windowSlider.clientWidth / showedSlides
console.log(elWidth)
let newPosition = (scrolledSlides * elWidth) 
let start = 0 
wrapperSlider.style.left = `${start}px`
//scroll next-slide
function widthOfEl (){
    element.forEach(function (el){
    el.style.width = `${elWidth}px`})
}
widthOfEl()
function scrollToNext () {
    const itemsLeaved = Math.round(element.length - (Math.abs(start) + showedSlides * elWidth) / elWidth)
    if(itemsLeaved < scrolledSlides){
    start -= elWidth * itemsLeaved
    console.log(start)
    wrapperSlider.style.transform = `translateX(${start}px)`}
    else {
        start -= newPosition
        console.log(start)
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