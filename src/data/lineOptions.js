import { figureState } from './figureState';

const commonLineOptions = {
  width: 200,
  deg: 0,
};
const dottedLineOptions = {
  name: 'dotted-line',
  borderBottom: 3,
  style: 'dotted',
  color: '#000000',
};
const straightLineOptions = {
  name: 'straight-line',
  deg: 0,
  borderBottom: 3,
  style: 'solid',
  color: '#000000',
};
const computeLinePosition = () => {
  const x1 = figureState.figureFirstX;
  const x2 = figureState.figureSecondX;
  const y1 = figureState.figureFirstY;
  const y2 = figureState.figureSecondY;

  commonLineOptions.width = Math.round(
    Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
  );
  commonLineOptions.deg =
    Math.round((Math.atan2(y1 - y2, x1 - x2) * 180) / Math.PI) + 180;
};
export {
  dottedLineOptions,
  straightLineOptions,
  commonLineOptions,
  computeLinePosition,
};
