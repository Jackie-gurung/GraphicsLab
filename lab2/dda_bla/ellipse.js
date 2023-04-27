import DrawObject from "./draw.js";

export default function DrawEllipseMidPoint(gl,canvas) {
    
    const canvasHeight = canvas.height;
    const canvasWidth = canvas.width;

    function normalise(pos, axis) {
        const halfAxis = axis / 2;
        let normalised = pos / halfAxis - 1;
        return normalised;
      }

    let vertexData = [];
    let a = 150;
    let b = 200;
    let xc = 220;
    let yc = 250;
  
    let x = 0;
    let y = b;
    let p = b * b - a * a * b + (a * a) / 4;
    let dx = 2 * b * b * x;
    let dy = 2 * a * a * y;
  
    while (dx < dy) {
      vertexData.push(normalise(xc + x, canvasWidth));
      vertexData.push(normalise(yc + y, canvasHeight));
      vertexData.push(0);
      vertexData.push(normalise(xc - x, canvasWidth));
      vertexData.push(normalise(yc + y, canvasHeight));
      vertexData.push(0);
      vertexData.push(normalise(xc + x, canvasWidth));
      vertexData.push(normalise(yc - y, canvasHeight));
      vertexData.push(0);
      vertexData.push(normalise(xc - x, canvasWidth));
      vertexData.push(normalise(yc - y, canvasHeight));
      vertexData.push(0);
  
      if (p < 0) {
        x++;
        dx += 2 * b * b;
        p += dx + b * b;
      } else {
        x++;
        y--;
        dx += 2 * b * b;
        dy -= 2 * a * a;
        p += dx - dy + b * b;
      }
    }
  
    p = b * b * (x + 0.5) * (x + 0.5) + a * a * (y - 1) * (y - 1) - a * a * b * b;
  
    while (y >= 0) {
      vertexData.push(normalise(xc + x, canvasWidth));
      vertexData.push(normalise(yc + y, canvasHeight));
      vertexData.push(0);
      vertexData.push(normalise(xc - x, canvasWidth));
      vertexData.push(normalise(yc + y, canvasHeight));
      vertexData.push(0);
      vertexData.push(normalise(xc + x, canvasWidth));
      vertexData.push(normalise(yc - y, canvasHeight));
      vertexData.push(0);
      vertexData.push(normalise(xc - x, canvasWidth));
      vertexData.push(normalise(yc - y, canvasHeight));
      vertexData.push(0);
  
      if (p > 0) {
        y--;
        dy -= 2 * a * a;
        p += a * a - dy;
      } else {
        x++;
        y--;
        dx += 2 * b * b;
        dy -= 2 * a * a;
        p += dx - dy + a * a;
      }
    }
  
    DrawObject(gl,gl.POINTS, 1,vertexData, 0, vertexData.length);
  }