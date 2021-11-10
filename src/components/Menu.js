import BaseElement from './UI/BaseElement';
import figureState from '../data/figureState';

export default class Menu extends BaseElement {
  constructor(button) {
    super('header', ['header']);

    this.rect = new BaseElement('div', ['container', 'rectangle']);
    this.square = new BaseElement('div', ['container', 'square']);
    this.triangle = new BaseElement('div', ['container', 'triangle']);
    this.circle = new BaseElement('div', ['container', 'circle']);
    this.straightLine = new BaseElement('div', ['container', 'straight-line']);
    this.dottedLine = new BaseElement('div', ['container', 'dotted-line']);
    this.button = button;

    this.element.append(
      this.rect.element,
      this.square.element,
      this.triangle.element,
      this.circle.element,
      this.straightLine.element,
      this.dottedLine.element,
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

            figureState.figure = [child.classList[1]];
          } else {
            child.classList.remove(className);
          }
        });
      }
    });
  }
}
