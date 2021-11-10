import App from './App';

import './style.scss';

window.onload = () => {
  const { body } = document;
  const init = new App(body);

  return init;
};
