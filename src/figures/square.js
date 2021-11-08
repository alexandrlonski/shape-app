import { Figure } from './figure';

export class Square extends Figure {
  static figureName = 'square';

  create(e) {

      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.top = `${event.clientY - (this.height/2)}px`;
      div.style.left = `${event.clientX - (this.width/2)}px`;
      div.style.width = `${this.width}px`;
      div.style.height = `${this.width}px`;
      div.style.background = 'blue';

      document.querySelector('.field').append(div);

  }
}
