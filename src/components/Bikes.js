export class Bikes {
  constructor( {template, hrefOne,  srcOne, altOne, pOne, hrefTwo, srcTwo, altTwo, pTwo, hrefThree, srcThree, altThree, pThree}) {
    this._template = document.querySelector(template).content;
    this._hrefOne = hrefOne
    this._srcOne = srcOne
    this._altOne = altOne
    this._pOne = pOne
    this._hrefTwo = hrefTwo
    this._srcTwo = srcTwo
    this._altTwo = altTwo
    this._pTwo = pTwo
    this._hrefThree = hrefThree
    this._srcThree = srcThree
    this._altThree = altThree
    this._pThree = pThree
  }

  _getElement() {
    return this._template.querySelector('.bikes__wrapper').cloneNode(true);
  }

  generate() {
    this._element = this._getElement();

    this._bike1 = this._element.querySelector('.bikes__element_type_one');
    this._bike1.querySelector('.bikes__popup').href = this._hrefOne;
    this._bike1.querySelector('.bikes__img').src = this._srcOne;
    this._bike1.querySelector('.bikes__img').alt = this._altOne;
    this._bike1.querySelector('.bikes__description').textContent = this._pOne;

    this._bike2 = this._element.querySelector('.bikes__element_type_two');
    this._bike2.querySelector('.bikes__popup').href = this._hrefTwo;
    this._bike2.querySelector('.bikes__img').src = this._srcTwo;
    this._bike2.querySelector('.bikes__img').alt = this._altTwo;
    this._bike2.querySelector('.bikes__description').textContent = this._pTwo;

    this._bike3 = this._element.querySelector('.bikes__element_type_three');
    this._bike3.querySelector('.bikes__popup').href = this._hrefThree;
    this._bike3.querySelector('.bikes__img').src = this._srcThree;
    this._bike3.querySelector('.bikes__img').alt = this._altThree;
    this._bike3.querySelector('.bikes__description').textContent = this._pThree;

    return this._element;
  }


}
