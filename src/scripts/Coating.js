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

    this._img = this._element.querySelectorAll('.coating__img');

    this._img.forEach((item, i) => {
      if (i === 0) {
        item.src = this._imgOneLink;
        item.alt = this._imgOneAlt;
      } else {
        item.src = this._imgTwoLink;
        item.alt = this._imgTwoAlt;
      }
    })

    this._addLightImg();

    return this._element;
  }

}

