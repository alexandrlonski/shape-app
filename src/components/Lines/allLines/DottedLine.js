import Line from '../Line';
import { dottedLineOptions } from '../../../data/lineOptions';

export default class DottedLine extends Line {
  constructor() {
    super(
      dottedLineOptions.name,
      dottedLineOptions.width,
      dottedLineOptions.borderBottom
    );

    this.element.style.width = `${this.x}px`;
    this.element.style.borderBottom = `${this.y}px ${dottedLineOptions.style} ${dottedLineOptions.color}`;
  }

  createFigure(e, parent) {
    this.element.style.top = `${e.clientY - this.y / 2}px`;
    this.element.style.left = `${e.clientX - this.x / 2}px`;
    this.element.style.transform = 'rotate(45deg)';

    parent.append(this.element);
  }
}
