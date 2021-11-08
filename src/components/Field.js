import BaseElement from './UI/BaseElement';

export default class Field extends BaseElement {
  constructor() {
    super('div');
    this.element.setAttribute('width', '1000px');
    this.element.setAttribute('height', '600px');
  }
}
