import Figure from '../Figure';
import { squareOptions } from '../../../data/figuresOptions';

export default class Square extends Figure {
  constructor() {
    super(squareOptions.name, squareOptions.width, squareOptions.height);

    this.element.style.width = `${this.x}px`;
    this.element.style.height = `${this.y}px`;
    this.element.style.background = squareOptions.color;
  }

  createFigure(e, parent) {
    this.element.style.top = `${e.clientY - this.y / 2}px`;
    this.element.style.left = `${e.clientX - this.x / 2}px`;

    parent.append(this.element);
  }
}
