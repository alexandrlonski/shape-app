import BaseElement from './BaseElement';

export default class InputElement extends BaseElement {
  constructor(id, name, value, checked, type) {
    super('input');

    this.element.setAttribute('type', type);
    this.element.setAttribute('id', id);
    this.element.setAttribute('name', name);
    this.element.setAttribute('value', value);
    this.element.setAttribute('checked', checked);
  }
}
