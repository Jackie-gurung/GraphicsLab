import DrawObject from './draw.js'

export default function DrawViewPort(gl,Xw_min, Yw_min, Xw_max, Yw_max) {
    console.log("draw view port called");
    const vertexData = [];
    let bottomLeft = [Xw_min, Yw_min, 0];
    let topLeft = [Xw_min, Yw_max, 0];
    let topRight = [Xw_max, Yw_max, 0];
    let bottomRight = [Xw_max, Yw_min, 0];
    vertexData.push(
      ...bottomLeft,
      ...topLeft,
      ...topLeft,
      ...topRight,
      ...topRight,
      ...bottomRight,
      ...bottomRight,
      ...bottomLeft
    );
    DrawObject(gl,gl.LINES, 2, vertexData, 0, vertexData.length);
  }