import BaseElement from './BaseElement';
import InputElement from './InputElement';

export default class LabelElement extends BaseElement {
  constructor(text, id, name, value, checked = false, type = 'radio') {
    super('label', ['container']);
    this.element.setAttribute('for', id);
    this.input = new InputElement(id, name, value, checked, type).element;
    this.element.innerHTML = `<span class=${text}></span>`;
    this.element.prepend(this.input);
  }
}
