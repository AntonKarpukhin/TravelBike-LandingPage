import "../pages/index.sass";
import { Coating } from "../components/Coating";
import {Section} from "../components/Section";
import { bikesInitialArray, coatingInitialArray, sliderCoatingLeft, sliderCoatingRight } from "./constant";
import { Bikes } from "../components/Bikes";

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
  sectionRender.rendererSlide(slideBike.generate(), '.bikes')
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






let colorPage = 'white'
// Функционал Bikes табов
const tabsSlide = document.querySelectorAll('.bikes__wrapper');
const tabs = document.querySelectorAll('.bikes__link');
const tabsParent = document.querySelector('.bikes__navigation');

function showTabsBike(i) {

  if (colorPage === 'white') {
    tabs.forEach(item => item.classList.remove('bikes__link_active_type_white'))
    tabs.forEach(item => item.classList.remove('bikes__link_active_type_black'))
    tabs[i].classList.add('bikes__link_active_type_white')

    tabs.forEach(item => item.classList.remove('dark_type_button'))
  } else {
    tabs.forEach(item => item.classList.remove('bikes__link_active_type_white'))
    tabs.forEach(item => item.classList.remove('bikes__link_active_type_black'))
    tabs[i].classList.add('bikes__link_active_type_black')

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

input.addEventListener('input', () => {
  if (input.value.length > 0 && input.validity.valid) {
    inputTypeOk.classList.add('footer__ok_type_active')
  } else {
    inputTypeOk.classList.remove('footer__ok_type_active')
  }
} )

inputTypeOk.addEventListener('click', () => {
  input.value = 'Круто!'
  setTimeout(() => {
    inputTypeOk.classList.remove('footer__ok_type_active')
    input.value = ''
  }, 1500)
})



// Переключение темы.
const ilk = document.querySelector('.footer__radio');
const changer = document.querySelector('.footer__change');

changer.addEventListener('click', () => {
  const arrs = document.querySelectorAll('.dark')

  colorPage === 'white' ? colorPage = 'dark' : colorPage = 'white'

  if (colorPage === 'dark') {

    changer.style.left = '50%';

    arrs.forEach(item => {
      if (item.classList.contains('dark_title')) {
        item.classList.add('dark_type_title')
      } else if (item.classList.contains('dark_subtitle')) {
        item.classList.add('dark_type_subtitle')
      } else if (item.classList.contains('dark_body')) {
        item.classList.remove('body')
        item.classList.add('dark_type_body')
      } else if (item.classList.contains('dark_footer')) {
        item.classList.add('dark_type_footer')
      } else if (item.classList.contains('dark_button')) {
        item.classList.add('dark_type_button')
      } else if (item.classList.contains('dark_input')) {
        item.classList.add('dark_type_input')
      }
    })
  } else {

    changer.style.left = '0';

    arrs.forEach(item => {
      if (item.classList.contains('dark_title')) {
        item.classList.remove('dark_type_title')
      } else if (item.classList.contains('dark_subtitle')) {
        item.classList.remove('dark_type_subtitle')
      } else if (item.classList.contains('dark_body')) {
        item.classList.add('body')
        item.classList.remove('dark_type_body')
      } else if (item.classList.contains('dark_footer')) {
        item.classList.remove('dark_type_footer')
      } else if (item.classList.contains('dark_button')) {
        item.classList.remove('dark_type_button')
      } else if (item.classList.contains('dark_input')) {
        item.classList.remove('dark_type_input')
      }
    })
  }

  showTabsBike(0)
  console.log(arrs)
})




