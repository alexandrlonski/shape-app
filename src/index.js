import App from './App';
import { Square } from './figures/square';
import { Rectangle } from './figures/rectangel';
import { Circle } from './figures/circle';
import { Triangle } from './figures/triangle';

import './style.scss';

window.onload = () => {
  const { body } = document;
  new App(body);
  let stateFigure = null;
  const array = [Square, Rectangle, Circle, Triangle];

  document.querySelectorAll('[type=radio]').forEach((item) => {
    item.addEventListener('click', () => {
      stateFigure = item.value;
    });
  });
  document.querySelector('.field').addEventListener('click', (e) => {
    console.log(stateFigure);
    const FigureClass = array.filter((item) => item.figureName === stateFigure);
    console.log(FigureClass);
    const figure = new FigureClass[0]();
    figure.create(e);
  });

  document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('.field').lastChild.remove();
  });
};
