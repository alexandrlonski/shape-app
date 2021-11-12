import Line from '../Line';
import { straightLineOptions } from '../../../data/lineOptions';

export default class StraightLine extends Line {
  constructor() {
    super(
      straightLineOptions.name,
      straightLineOptions.width,
      straightLineOptions.borderBottom
    );

    this.element.style.width = `${this.x}px`;
    this.element.style.borderBottom = `${this.y}px ${straightLineOptions.style} ${straightLineOptions.color}`;
  }

  createFigure(e, parent) {
    this.element.style.top = `${e.clientY - this.y / 2}px`;
    this.element.style.left = `${e.clientX - this.x / 2}px`;

    parent.append(this.element);
  }
}
