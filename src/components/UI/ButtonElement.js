import BaseElement from './BaseElement';

export default class ButtonElement extends BaseElement {
  constructor(content) {
    super('button', ['btn']);

    this.element.textContent = content;
  }

  onClick(parent) {
    this.element.addEventListener('click', () => {
      if (parent && parent.childNodes.length) {
        parent.lastChild.remove();
      }
    });
  }
}
