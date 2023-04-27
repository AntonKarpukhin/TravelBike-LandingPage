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
    this._bikes = this._element.querySelectorAll('.bikes__element');
    this._bikes.forEach((item, i) => {
      if (i === 0) {
        item.querySelector('.bikes__popup').href = this._hrefOne;
        item.querySelector('.bikes__img').src = this._srcOne;
        item.querySelector('.bikes__img').alt = this._altOne;
        item.querySelector('.bikes__description').textContent = this._pOne;
      } else if (i === 1) {
        item.querySelector('.bikes__popup').href = this._hrefTwo;
        item.querySelector('.bikes__img').src = this._srcTwo;
        item.querySelector('.bikes__img').alt = this._altTwo;
        item.querySelector('.bikes__description').textContent = this._pTwo;
      } else {
        item.querySelector('.bikes__popup').href = this._hrefThree;
        item.querySelector('.bikes__img').src = this._srcThree;
        item.querySelector('.bikes__img').alt = this._altThree;
        item.querySelector('.bikes__description').textContent = this._pThree;
      }
    })
    return this._element;
  }


}
