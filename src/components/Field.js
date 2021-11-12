import BaseElement from './UI/BaseElement';
import figureState from '../data/figureState';
import { Circle, Rectangle, Square, Triangle } from './Figures';
import { DottedLine, StraightLine } from './Lines';

export default class Field extends BaseElement {
  constructor() {
    super('div', ['field']);

    this.figures = [
      Circle,
      Rectangle,
      Square,
      Triangle,
      DottedLine,
      StraightLine,
    ];
  }

  onClick() {
    this.element.addEventListener('click', (e) => {
      this.figures.forEach((Figure) => {
        if (new Figure().figureName !== figureState.figure[0]) return;
        new Figure().createFigure(e, this.element);
      });
    });
  }
}
