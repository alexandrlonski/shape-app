import BaseElement from './UI/BaseElement';
import {
  figureState,
  calcFigure1Position,
  calcFigure2Position,
} from '../data/figureState';
import { Circle, Rectangle, Square, Triangle } from './Figures';
import { DottedLine, StraightLine } from './Lines';

export default class Field extends BaseElement {
  constructor() {
    super('div', ['field']);

    this.figures = [Circle, Rectangle, Square, Triangle];
    this.lines = [DottedLine, StraightLine];
  }

  onClick() {
    this.element.addEventListener('click', (e) => {
      if (
        figureState.figure[0] !== 'straight-line' &&
        figureState.figure[0] !== 'dotted-line'
      ) {
        this.createFigure(e);
      } else {
        this.createLine(e);
      }
    });
  }

  createFigure(e) {
    this.figures.forEach((Figure) => {
      if (new Figure().figureName !== figureState.figure[0]) return;
      new Figure().createFigure(e, this.element);
    });
  }

  createLine(e) {
    if (e.target.className === 'figure' && !figureState.positionFrom[0]) {
      calcFigure1Position(e);
    }
    if (
      e.target.style.left !== figureState.positionFrom[0] &&
      e.target.style.top !== figureState.positionFrom[1] &&
      e.target.className === 'figure'
    ) {
      calcFigure2Position(e);

      this.lines.forEach((Line) => {
        if (new Line().figureName !== figureState.figure[0]) return;
        new Line().createFigure(e, this.element);
      });
      figureState.positionFrom = [];
      figureState.positionTo = [];
    }
  }
}
