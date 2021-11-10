import BaseElement from './UI/BaseElement';
import stateFigure from '../data/stateFigure';

export default class Menu extends BaseElement {
  constructor(button) {
    super('header', ['header']);

    this.Rect = new BaseElement('div', ['container', 'rectangle']);
    this.Square = new BaseElement('div', ['container', 'square']);
    this.Triangle = new BaseElement('div', ['container', 'triangle']);
    this.Circle = new BaseElement('div', ['container', 'circle']);
    this.StraightLine = new BaseElement('div', ['container', 'straight-line']);
    this.DottedLine = new BaseElement('div', ['container', 'dotted-line']);
    this.button = button;

    this.element.append(
      this.Rect.element,
      this.Square.element,
      this.Triangle.element,
      this.Circle.element,
      this.StraightLine.element,
      this.DottedLine.element,
      this.button.element
    );
  }

  onClick(className) {
    this.element.addEventListener('click', (e) => {
      if (e.target !== this.element) {
        e.stopPropagation();

        this.element.childNodes.forEach((child) => {
          if (e.target === child) {
            child.classList.add(className);

            stateFigure.figure = [child.classList[1]];
          } else {
            child.classList.remove(className);
          }
        });
      }
    });
  }
}
