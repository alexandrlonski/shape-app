import figureState  from '../data/figureState';
import { Circle, Rectangle, Square, Triangle } from './Figures';
import BaseElement from './UI/BaseElement';

export default class Field extends BaseElement {
  constructor() {
    super('div', ['field']);

    this.figures = [Circle, Rectangle, Square, Triangle];
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
