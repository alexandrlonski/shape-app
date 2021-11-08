import { Figure } from './figure';

export class Triangle extends Figure {
  constructor(width = 0, height = 0, borderLeft = 25, borderRight = 25, borderBottom = 50) {
    super(width, height);
    this.borderLeft = borderLeft;
    this.borderRight = borderRight;
    this.borderBottom = borderBottom;
  }
  static figureName = 'triangle';

  create(e) {

      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.top = `${event.clientY - (this.borderBottom/2)}px`;
      div.style.left = `${event.clientX - (this.borderBottom/2)}px`;
      div.style.width = `${this.width}px`;
      div.style.height = `${this.width}px`;
      div.style.borderLeft = `${this.borderLeft}px solid transparent`;
      div.style.borderRight = `${this.borderRight}px solid transparent`;
      div.style.borderBottom = `${this.borderBottom}px solid green`;
      

      

      document.querySelector('.field').append(div);

  }
}