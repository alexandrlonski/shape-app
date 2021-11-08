import Field from './components/Field';
import Menu from './components/Menu';

export default class App {
  constructor(body) {
    this.rootElement = body;
    this.menu = new Menu().element;
    this.field = new Field().element;
    this.field.classList.add('field');
    this.rootElement.append(this.menu, this.field);
  }
}
