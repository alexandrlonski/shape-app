import { Figure } from './figure';

export class Rectangle extends Figure {
  constructor(width = 80, height = 40) {
    super(width, height);
  }
  static figureName = 'rectangle';

  create(e) {

      const div = document.createElement('div');

      div.style.position = 'absolute';
      div.style.top = `${event.clientY - (this.height/2)}px`;
      div.style.left = `${event.clientX - (this.width/2)}px`;
      div.style.width = `${this.width}px`;
      div.style.height = `${this.height}px`;
      div.style.background = 'red';

      document.querySelector('.field').append(div);
    
  }
}
