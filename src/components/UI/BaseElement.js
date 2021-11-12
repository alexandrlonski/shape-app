export default class BaseElement {
  constructor(tag = 'div', styles = []) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
  }
}
