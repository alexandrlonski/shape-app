import BaseElement from './BaseElement';

export default class ButtonElement extends BaseElement {
  constructor() {
    super('button', ['btn']);
    this.element.textContent = 'Delete';
  }
}
