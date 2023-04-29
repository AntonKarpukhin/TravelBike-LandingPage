import "../pages/index.sass";

import { Section } from "./Section";
import { Coating } from "./Coating";
import { Bikes } from "./Bikes";

import { bikesInitialArray, coatingInitialArray, sliderCoatingLeft, sliderCoatingRight } from "./constant";
import { changePageColor } from "./pageChangeColor";

//Создание экземпляра класса Секции.
const sectionRender = new Section({
  renderer: (slides, selector) => {
    sectionRender.rendererSlides(slides, selector)
  }
})

//Отрисовка Coating слайдера.
coatingInitialArray.forEach(item => {
  const slideCoating = new Coating({
    template: item.template,
    title: item.title,
    subtitle: item.subtitle,
    imgOneLink: item.imgOneLink,
    imgOneAlt: item.imgOneAlt,
    imgTwoLink: item.imgTwoLink,
    imgTwoAlt: item.imgTwoAlt,
    id: item.id
  })
  sectionRender.rendererSlide(slideCoating.generate(), '.coating')
})

//Отрисовка Bikes табов.
bikesInitialArray.forEach(item => {
  const slideBike = new Bikes({
    template: item.template,
    hrefOne: item.hrefOne,
    srcOne: item.srcOne,
    altOne: item.altOne,
    pOne: item.pOne,
    hrefTwo: item.hrefTwo,
    srcTwo: item.srcTwo,
    altTwo: item.altTwo,
    pTwo: item.pTwo,
    hrefThree: item.hrefThree,
    srcThree: item.srcThree,
    altThree: item.altThree,
    pThree: item.pThree
  })
  sectionRender.rendererSlide(slideBike.generate(), '.bikes__layout');
})


// Функционал Coating слайдера.
const slides = document.querySelectorAll('.coating__wrapper')
let slideIndexCoating = 3;

function showSlidesCoating(count) {
  if (count > slides.length) {
    slideIndexCoating = 1;
  }
  if (count < 1) {
    slideIndexCoating = slides.length;
  }

  slides.forEach(item => item.classList.remove('coating__wrapper_active'))
  slides[slideIndexCoating - 1].classList.add('coating__wrapper_active');

}

showSlidesCoating(slideIndexCoating);

function changeSlidesCoating (num) {
  showSlidesCoating(slideIndexCoating += num);
}
sliderCoatingLeft.addEventListener('click', () => {
  changeSlidesCoating(1)
})
sliderCoatingRight.addEventListener('click', () => {
  changeSlidesCoating(-1)
})

// Функционал Bikes табов
export let colorPage = 'white'
export const tabsSlide = document.querySelectorAll('.bikes__wrapper');
export const tabs = document.querySelectorAll('.bikes__link');
export const tabsParent = document.querySelector('.bikes__navigation');

function showTabsBike(i) {
  if (colorPage === 'white') {
    tabs.forEach(item => item.classList.remove('bikes__link_active-white'))
    tabs.forEach(item => item.classList.remove('bikes__link_active-black'))
    tabs[i].classList.add('bikes__link_active-white')

    tabs.forEach(item => item.classList.remove('dark_type_button'))
  } else {
    tabs.forEach(item => item.classList.remove('bikes__link_active-white'))
    tabs.forEach(item => item.classList.remove('bikes__link_active-black'))
    tabs[i].classList.add('bikes__link_active-black')

    tabs.forEach(item => item.classList.add('dark_type_button'))
  }

  tabsSlide.forEach(item => item.classList.remove('bikes__wrapper_active'))
  tabsSlide[i].classList.add('bikes__wrapper_active')
}

showTabsBike(0)

tabsParent.addEventListener('click', (evt) => {
  const target = evt.target;
  if (target && target.classList.contains('bikes__link')) {
    tabs.forEach((item, i) => {
      if (item === target) {
        showTabsBike(i)
      }
    })
  }
})

//Валидация инпута.
const input = document.querySelector('.footer__input')
const inputTypeOk = document.querySelector('.footer__ok')


input.addEventListener('focus', () => {
  inputTypeOk.classList.add('footer__ok_type_active')
})

input.addEventListener('input', () => {
  if (input.value.length > 0 && input.validity.valid) {
    inputTypeOk.addEventListener('click', () => {
      input.classList.add('animations')
      input.value = 'Круто!'
      setTimeout(() => {
        inputTypeOk.classList.remove('footer__ok_type_active')
        input.classList.remove('animations')
        input.value = ''
      }, 1500)
    })
  } else {
    inputTypeOk.classList.remove('footer__ok_type_active')
  }
})


// Функционал Бургера
const burger = document.querySelector('.header__burger');
const popupBurger = document.querySelector('.header__popup');
const popupLink = document.querySelectorAll('.header__popup-link');

burger.addEventListener('click', () => {
  if (!burger.classList.contains('header__burger_active')) {
    burger.classList.add('header__burger_active');
    popupBurger.classList.add('header__popup_active');
    document.querySelector('body').style.overflow = 'hidden'
  } else {
    burger.classList.remove('header__burger_active');
    popupBurger.classList.remove('header__popup_active');
    document.querySelector('body').style.overflow = ''
  }
})

popupLink.forEach(link => {
  link.addEventListener('click', () => {
    popupBurger.classList.remove('header__popup_active')
    burger.classList.remove('header__burger_active');
    document.querySelector('body').style.overflow = ''
  })
})

//Селект добавление цвета и функционал Селекта и дотов.
const select = document.querySelector('.bikes__select ');
const dots = document.querySelector('.bikes__dots');
const dot = document.querySelectorAll('.bikes__dot');

select.addEventListener('click', (evt) => {
  if (colorPage === 'dark') {
    evt.target.style.backgroundColor = 'rgba(51, 51, 51, 1)'
  } else {
    evt.target.style.backgroundColor = ''
  }
  showTabsBike(evt.target.value - 1)
})

dots.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('bikes__dot')) {
    dot.forEach(item => item.classList.remove('bikes__dot_active'))
    evt.target.classList.add('bikes__dot_active')
    bikesMobileRender(evt.target.getAttribute('data-dot') - 1)
  }
})

function bikesMobileRender(num) {
  const bikes = document.querySelector('.bikes__wrapper_active').querySelectorAll('.bikes__element');

  bikes.forEach(bike => {
    bike.classList.add('bikes__element_active');
    bike.classList.remove('animations');
  })
  bikes[num].classList.remove('bikes__element_active')
  bikes[num].classList.add('animations')
}


// Переключение темы.
const changer = document.querySelectorAll('.change');
changer.forEach(item => {
  item.addEventListener('click', () => {
    if (colorPage === 'white') {
      colorPage = 'dark'
      changer.forEach(element => element.style.left = '50%');
      changePageColor()
    } else {
      colorPage = 'white'
      changer.forEach(element => element.style.left = '0');
      changePageColor()
    }
    showTabsBike(0)
  })
})
