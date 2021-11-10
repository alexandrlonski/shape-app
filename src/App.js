import Menu from './components/Menu';
import ButtonElement from './components/UI/ButtonElement';

export default class App {
  constructor(body) {
    this.rootElement = body;

    this.remove = new ButtonElement('Delete');
    this.menu = new Menu(this.remove);

    this.rootElement.append(this.menu.element);

    this.initListener();
  }

  initListener() {
    this.menu.onClick('active');
  }
}
