import Line from '../Line';
import {
  straightLineOptions,
  computeLinePosition,
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
    computeLinePosition();
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

// Math.asin(500 / 650);
// console.log(Math.asin(500 / 650));
// function angle(cx, cy, ex, ey) {
//   var dy = ey - cy;
//   var dx = ex - cx;
//   var theta = Math.atan2(dy, dx); // range (-PI, PI]
//   theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
//   //if (theta < 0) theta = 360 + theta; // range [0, 360)
//   return theta;
// }
// console.log(angle(20, 40, 50, 90));
