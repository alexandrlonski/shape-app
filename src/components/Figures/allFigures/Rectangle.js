import Figure from '../Figure';
import { rectangleOptions } from '../../../data/figuresOptions';

export default class Rectangle extends Figure {
  constructor() {
    super(
      rectangleOptions.name,
      rectangleOptions.width,
      rectangleOptions.height
    );

    this.element.style.width = `${this.x}px`;
    this.element.style.height = `${this.y}px`;
    this.element.style.background = rectangleOptions.color;
  }

  createFigure(e, parent) {
    this.element.style.top = `${e.clientY - this.y / 2}px`;
    this.element.style.left = `${e.clientX - this.x / 2}px`;

    parent.append(this.element);
  }
}
