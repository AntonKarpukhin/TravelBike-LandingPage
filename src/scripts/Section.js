export class Section {
  constructor( { renderer } ) {
    this._renderer = renderer;
  }

  rendererSlide(slides, selector) {
    this._renderer(slides, selector);
  }

  rendererSlides(slide, selector) {
    document.querySelector(selector).prepend(slide);
  }
}
