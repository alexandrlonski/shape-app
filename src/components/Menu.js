import BaseElement from './UI/BaseElement';
import ButtonElement from './UI/ButtonElement';
import LabelElement from './UI/LabelElement';

export default class Menu extends BaseElement {
  constructor() {
    super('header', ['header']);
    this.labelRect = new LabelElement(
      'rectangle',
      'figure1',
      'figure',
      'rectangle',
    ).element;

    this.labelSquare = new LabelElement(
      'square',
      'figure2',
      'figure',
      'square',
      true,
    ).element;

    this.labelTriangle = new LabelElement(
      'triangle',
      'figure3',
      'figure',
      'triangle',
    ).element;

    this.labelCircle = new LabelElement(
      'circle',
      'figure4',
      'figure',
      'circle',
    ).element;

    this.button = new ButtonElement().element;

    this.element.append(
      this.labelRect,
      this.labelSquare,
      this.labelTriangle,
      this.labelCircle,
      this.button,
    );
  }
}
