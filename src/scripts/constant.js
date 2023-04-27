import ImageCoating1 from '../images/coating/coating-one.jpg'
import ImageCoating2 from '../images/coating/coating-two.jpg'
import ImageCoating3 from '../images/coating/coating-three.jpg'

import ImageBike1 from '../images/bikes/Cervelo-Caledonia-5.jpg'
import ImageBike2 from '../images/bikes/Cannondale-Systemsix-Himod.jpg'
import ImageBike3 from '../images/bikes/Trek-Domane-SL-7.jpg'
import ImageBike4 from '../images/bikes/Cervelo-Aspero-GRX-810.jpg'
import ImageBike5 from '../images/bikes/Specialized-S-Works-Diverge.jpg'
import ImageBike6 from '../images/bikes/Cannondale-Topstone-Lefty-3.jpg'
import ImageBike7 from '../images/bikes/Specialized-S-Works-Shiv.jpg'
import ImageBike8 from '../images/bikes/BMC-Timemachine-01-ONE.jpg'
import ImageBike9 from '../images/bikes/Cervelo-P-Series.jpg'

const sliderCoatingLeft = document.querySelector('.coating__arrow-button_type_left');
const sliderCoatingRight = document.querySelector('.coating__arrow-button_type_right');

const coatingInitialArray = [
  {
    template: '#template_coating',
    title: 'Шоссе',
    subtitle: 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.',
    imgOneLink: ImageCoating1,
    imgOneAlt: 'Фото гор',
    imgTwoLink: ImageCoating2,
    imgTwoAlt: 'Фото лес',
    id: 1
  },
  {
    template: '#template_coating',
    title: 'Грэвел',
    subtitle: 'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.',
    imgOneLink: ImageCoating2,
    imgOneAlt: 'Фото лес',
    imgTwoLink: ImageCoating3,
    imgTwoAlt: 'Фото шоссе',
    id: 2
  },
  {
    template: '#template_coating',
    title: 'ТТ',
    subtitle: 'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.',
    imgOneLink: ImageCoating3,
    imgOneAlt: 'Фото шоссе',
    imgTwoLink: ImageCoating1,
    imgTwoAlt: 'Фото гор',
    id: 3
  }
]


const bikesInitialArray = [
  {
    template: '#template_bikes',
    hrefOne: 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9',
    srcOne: ImageBike7,
    altOne: 'Фото велосипеда Specialized S-Works Shiv',
    pOne: 'Specialized S-Works Shiv',
    hrefTwo: 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835',
    srcTwo: ImageBike8,
    altTwo: 'Фото велосипеда BMC Timemachine 01 ONE',
    pTwo: 'BMC Timemachine 01 ONE',
    hrefThree: 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q',
    srcThree: ImageBike9,
    altThree: 'Фото велосипеда Cervelo P-Series',
    pThree: 'Cervelo P-Series'
  },
  {
    template: '#template_bikes',
    hrefOne: 'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE',
    srcOne: ImageBike4,
    altOne: 'Фото велосипеда Cervelo Aspero GRX 810',
    pOne: 'Cervelo Aspero GRX 810',
    hrefTwo: 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9',
    srcTwo: ImageBike5,
    altTwo: 'Фото велосипеда Specialized S-Works Diverge',
    pTwo: 'Specialized S-Works Diverge',
    hrefThree: 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8',
    srcThree: ImageBike6,
    altThree: 'Фото велосипеда Cannondale Topstone Lefty 3',
    pThree: 'Cannondale Topstone Lefty 3'
  },
  {
    template: '#template_bikes',
    hrefOne: 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN',
    srcOne: ImageBike1,
    altOne: 'Фото велосипеда Cervelo Caledonia-5',
    pOne: 'Cervelo Caledonia-5',
    hrefTwo: 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J',
    srcTwo: ImageBike2,
    altTwo: 'Фото велосипеда Cannondale Systemsix Himod',
    pTwo: 'Cannondale Systemsix Himod',
    hrefThree: 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF',
    srcThree: ImageBike3,
    altThree: 'Фото велосипеда Trek Domane SL-7',
    pThree: 'Trek Domane SL-7'
  }
]

export {sliderCoatingLeft, sliderCoatingRight, coatingInitialArray, bikesInitialArray}
