export class Coating {
  constructor({template, title, subtitle, imgOneLink, imgOneAlt, imgTwoLink, imgTwoAlt, id}) {
    this._template = document.querySelector(template).content;
    this._title = title;
    this._subtitle = subtitle;
    this._imgOneLink = imgOneLink;
    this._imgOneAlt = imgOneAlt;
    this._imgTwoLink = imgTwoLink;
    this._imgTwoAlt = imgTwoAlt;
    this._id = id;
  }

  _addLightImg() {
    if (this._id === 1) {
      this._element.querySelector('.coating__element-img').classList.add('coating__element-img_type_highway')
    } else if (this._id === 2) {
      this._element.querySelector('.coating__element-img').classList.add('coating__element-img_type_gravel')
    } else if (this._id === 3) {
      this._element.querySelector('.coating__element-img').classList.add('coating__element-img_type_tt')
    }
  }

  _getElement() {
    return this._template.querySelector('.coating__wrapper').cloneNode(true);
  }

  generate() {
    this._element = this._getElement();

    this._element.querySelector('.coating__title').textContent = this._title;
    this._element.querySelector('.coating__subtitle').textContent = this._subtitle;

    this._img1 = this._element.querySelector('.coating__img_type_one');
    this._img2 = this._element.querySelector('.coating__img_type_two');

    this._img1.src = this._imgOneLink;
    this._img1.alt = this._imgOneAlt;
    this._img2.src = this._imgTwoLink;
    this._img2.alt = this._imgTwoAlt;

    this._addLightImg();

    return this._element;
  }

}

