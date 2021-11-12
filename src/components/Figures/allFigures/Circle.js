import Figure from '../Figure';
import { circleOptions } from '../../../data/figuresOptions';

export default class Circle extends Figure {
  constructor() {
    super(
      circleOptions.name,
      circleOptions.width,
      circleOptions.height,
      circleOptions.borderRadius
    );

    this.element.style.width = `${this.x}px`;
    this.element.style.height = `${this.y}px`;
    this.element.style.borderRadius = `${this.z}%`;
    this.element.style.background = circleOptions.color;
  }

  createFigure(e, parent) {
    this.element.style.top = `${e.clientY - this.y / 2}px`;
    this.element.style.left = `${e.clientX - this.x / 2}px`;

    parent.append(this.element);
  }
}
