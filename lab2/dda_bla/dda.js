import DrawObject from "./draw.js";

export default function DrawDDALine(gl,canvas) {

  const canvasHeight = canvas.height;
  const canvasWidth = canvas.width;

  let vertexData = [];
  let X0 = 200;
  let Y0 = 200;
  let X1 = 100;
  let Y1 = 100;

  function normalise(pos, axis) {
    const halfAxis = axis / 2;
    let normalised = pos / halfAxis - 1;
    return normalised;
  }
  console.log(canvasHeight,canvasWidth)

  let dx = Math.abs(X1 - X0);
  let dy = Math.abs(Y1 - Y0);
  let steps = dx > dy ? dx : dy;

  let Xinc = dx / steps;
  let Yinc = dy / steps;

  let X = X0;
  let Y = Y0;
  for (let i = 0; i < steps; i++) {
    vertexData.push(normalise(X, canvasWidth));
    vertexData.push(normalise(Y, canvasHeight));
    vertexData.push(0);
    X += Xinc;
    Y += Yinc;
  }
  console.log(vertexData);
  DrawObject(gl,gl.POINTS, 1, vertexData,0,vertexData.length);
}