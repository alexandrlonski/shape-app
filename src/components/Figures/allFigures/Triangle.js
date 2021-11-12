import Figure from '../Figure';
import { triangleOptions } from '../../../data/figuresOptions';

export default class Triangle extends Figure {
  constructor() {
    super(
      triangleOptions.name,
      triangleOptions.borderLeft,
      triangleOptions.borderRight,
      triangleOptions.borderBottom
    );

    this.element.style.width = 0;
    this.element.style.height = 0;
    this.element.style.borderLeft = `${this.x}px solid transparent`;
    this.element.style.borderRight = `${this.y}px solid transparent`;
    this.element.style.borderBottom = `${this.z}px solid ${triangleOptions.color}`;
  }

  createFigure(e, parent) {
    this.element.style.top = `${e.clientY - this.z / 2}px`;
    this.element.style.left = `${e.clientX - this.z / 2}px`;

    parent.append(this.element);
  }
}
