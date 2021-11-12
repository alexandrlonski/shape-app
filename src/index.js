import App from './App';
import './style.scss';

window.onload = () => {
  const { body } = document;
  return new App(body);
};
