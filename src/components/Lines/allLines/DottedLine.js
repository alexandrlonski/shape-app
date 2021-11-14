import Line from '../Line';
import {
  dottedLineOptions,
  commonLineOptions,
} from '../../../data/lineOptions';
import { figureState } from '../../../data/figureState';

export default class DottedLine extends Line {
  constructor() {
    super(
      dottedLineOptions.name,
      commonLineOptions.width,
      dottedLineOptions.borderBottom
    );

    this.element.style.width = `${this.x}px`;
    this.element.style.borderBottom = `${this.y}px ${dottedLineOptions.style} ${dottedLineOptions.color}`;
  }

  createFigure(e, parent) {
    this.element.style.top = `${figureState.figureFirstY}px`;
    this.element.style.left = `${figureState.figureFirstX}px`;
    this.element.style.transform = `rotate(${commonLineOptions.deg}deg)`;

    parent.append(this.element);
  }
}
