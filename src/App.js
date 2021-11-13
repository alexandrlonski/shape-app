import Menu from './components/Menu';
import Field from './components/Field';
import ButtonElement from './components/UI/ButtonElement';

export default class App {
  constructor(body) {
    this.rootElement = body;

    this.remove = new ButtonElement('Delete');
    this.menu = new Menu(this.remove);
    this.field = new Field();

    this.rootElement.append(this.menu.element, this.field.element);

    this.initListener();
  }

  initListener() {
    this.menu.onClick('active');
    this.field.onClick();
    this.remove.onClick(this.field.element);
  }
}
