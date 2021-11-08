import { Figure } from './figure';

export class Circle extends Figure {
  constructor(width = 50, height = 50) {
    super(width, height);
  }
  static figureName = 'circle';

  create(e) {

      const div = document.createElement('div');
      
      div.style.position = 'absolute';
      div.style.top = `${event.clientY - (this.height/2)}px`;
      div.style.left = `${event.clientX - (this.width/2)}px`;
      div.style.width = `${this.width}px`;
      div.style.height = `${this.height}px`;
      div.style.background = 'orange';
      div.style.borderRadius = '50%';

      document.querySelector('.field').append(div);
  }
}
