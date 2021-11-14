import Line from '../Line';
import {
  straightLineOptions,
  commonLineOptions,
} from '../../../data/lineOptions';
import { figureState } from '../../../data/figureState';

export default class StraightLine extends Line {
  constructor() {
    super(
      straightLineOptions.name,
      commonLineOptions.width,
      straightLineOptions.borderBottom
    );

    this.element.style.width = `${this.x}px`;
    this.element.style.borderBottom = `${this.y}px ${straightLineOptions.style} ${straightLineOptions.color}`;
  }

  createFigure(e, parent) {
    this.element.style.top = `${figureState.figureFirstY}px`;
    this.element.style.left = `${figureState.figureFirstX}px`;
    this.element.style.transform = `rotate(${commonLineOptions.deg}deg)`;

    parent.append(this.element);
  }
}
