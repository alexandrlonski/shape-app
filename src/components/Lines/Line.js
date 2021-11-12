import BaseElement from '../UI/BaseElement';

export default class Line extends BaseElement {
  constructor(figureName, x = 0, y = 0, z = 0) {
    super('div', ['line']);

    this.figureName = figureName;
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
