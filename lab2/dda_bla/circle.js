import DrawObject from "./draw.js";

export default function DrawCircleMidPoint(gl,canvas) {
    const canvasHeight = canvas.height;
    const canvasWidth = canvas.width;

    function normalise(pos, axis) {
        const halfAxis = axis / 2;
        let normalised = pos / halfAxis - 1;
        return normalised;
      }

    let vertexData = [];
    let radius = 180;
    let xc = 250;
    let yc = 250;
  
    let x = 0;
    let y = radius;
    let p = 1 - radius;
  
    while (x <= y) {
      vertexData.push(normalise(xc + x, canvasWidth));
      vertexData.push(normalise(yc + y, canvasHeight));
      vertexData.push(0);
      vertexData.push(normalise(xc + y, canvasWidth));
      vertexData.push(normalise(yc + x, canvasHeight));
      vertexData.push(0);
      vertexData.push(normalise(xc - x, canvasWidth));
      vertexData.push(normalise(yc + y, canvasHeight));
      vertexData.push(0);
      vertexData.push(normalise(xc - y, canvasWidth));
      vertexData.push(normalise(yc + x, canvasHeight));
      vertexData.push(0);
      vertexData.push(normalise(xc + x, canvasWidth));
      vertexData.push(normalise(yc - y, canvasHeight));
      vertexData.push(0);
      vertexData.push(normalise(xc + y, canvasWidth));
      vertexData.push(normalise(yc - x, canvasHeight));
      vertexData.push(0);
      vertexData.push(normalise(xc - x, canvasWidth));
      vertexData.push(normalise(yc - y, canvasHeight));
      vertexData.push(0);
      vertexData.push(normalise(xc - y, canvasWidth));
      vertexData.push(normalise(yc - x, canvasHeight));
      vertexData.push(0);
  
      if (p < 0) {
        x++;
        p += 2 * x + 1;
      } else {
        x++;
        y--;
        p += 2 * x - 2 * y + 1;
      }
    }
  
    DrawObject(gl,gl.POINTS, 1, vertexData, 0, vertexData.length);
  }
  