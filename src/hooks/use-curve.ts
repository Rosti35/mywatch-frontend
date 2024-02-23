import * as d3 from 'd3';

export const useCurve = (data: [number, number][], dimensions: [number, number]) => {
  const xMin = Math.min(...data.map(([x, _]) => x));
  const xMax = Math.max(...data.map(([x, _]) => x));
  const yMin = Math.min(...data.map(([_, y]) => y));
  const yMax = Math.max(...data.map(([_, y]) => y));

  const [width, height] = dimensions;

  function scaleValue(
    value: number,
    minInput: number,
    maxInput: number,
    minOutput: number,
    maxOutput: number,
  ) {
    return ((value - minInput) / (maxInput - minInput)) * (maxOutput - minOutput) + minOutput;
  }

  const builder = d3
    .line()
    .curve(d3.curveCardinal)
    .x(([x]) => scaleValue(x, xMin, xMax, 0, width))
    .y(([, y]) => scaleValue(y, yMin, yMax, height, 0));

  return builder(data) || undefined;
};
