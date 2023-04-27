import DrawObject from "./draw.js";

export default function DrawBLALine(gl,canvas) {

    const canvasHeight = canvas.height;
    const canvasWidth = canvas.width;

    function normalise(pos, axis) {
        const halfAxis = axis / 2;
        let normalised = pos / halfAxis - 1;
        return normalised;
      }

    let vertexData = [];
    let X0 = 400;
    let Y0 = 400;
    let X1 = 100;
    let Y1 = 100;
  
    let dx = Math.abs(X1 - X0);
    let dy = Math.abs(Y1 - Y0);
    let slope = dy / dx;
  
    let X, Y, steps, p;
    if (slope < 1) {
      // m<1
      if (X0 > X1) {
        [X0, Y0, X1, Y1] = [X1, Y1, X0, Y0];
      }
      X = X0;
      Y = Y0;
      vertexData.push(normalise(X, canvasWidth));
      vertexData.push(normalise(Y, canvasHeight));
      steps = X1 - X0;
      p = 2 * dy - dx;
      for (let i = 0; i < steps; i++) {
        if (p >= 0) {
          Y++;
          p += 2 * dy - 2 * dx;
        } else {
          p += 2 * dy;
        }
        X++;
        vertexData.push(normalise(X, canvasWidth));
        vertexData.push(normalise(Y, canvasHeight));
      }
    } else {
      // m>1
      if (Y0 > Y1) {
        [X0, Y0, X1, Y1] = [X1, Y1, X0, Y0];
      }
      X = X0;
      Y = Y0;
      vertexData.push(normalise(X, canvasWidth));
      vertexData.push(normalise(Y, canvasHeight));
      steps = Y1 - Y0;
      p = 2 * dx - dy;
      for (let i = 0; i < steps; i++) {
        if (p >= 0) {
          X++;
          p += 2 * dx - 2 * dy;
        } else {
          p += 2 * dx;
        }
        Y++;
        vertexData.push(normalise(X, canvasWidth));
        vertexData.push(normalise(Y, canvasHeight));
      }
    }
    DrawObject(gl,gl.POINTS, 1,vertexData,0, vertexData.length);
  }