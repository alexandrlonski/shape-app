const figureState = {
  figure: [],
  figureFirstX: null,
  figureFirstY: null,
  positionFrom: [],
  figureSecondX: null,
  figureSecondY: null,
  positionTo: [],
};

const calcFigure1Position = (e) => {
  figureState.figureFirstX =
    +e.target.style.left.slice(0, -2) + +e.target.style.width.slice(0, -2) / 2;
  figureState.figureFirstY =
    +e.target.style.top.slice(0, -2) + +e.target.style.height.slice(0, -2) / 2;

  figureState.positionFrom[0] = e.target.style.left;
  figureState.positionFrom[1] = e.target.style.top;
};

const calcFigure2Position = (e) => {
  figureState.figureSecondX =
    +e.target.style.left.slice(0, -2) + +e.target.style.width.slice(0, -2) / 2;
  figureState.figureSecondY =
    +e.target.style.top.slice(0, -2) + +e.target.style.height.slice(0, -2) / 2;

  figureState.positionTo[0] = e.target.style.left;
  figureState.positionTo[1] = e.target.style.top;
};

export { figureState, calcFigure1Position, calcFigure2Position };
