import DrawTriangle from "./triangle.js";
import DrawDDALine from "./dda.js";
import DrawBLALine from "./bla.js";
import DrawCircleMidPoint from "./circle.js";
import DrawEllipseMidPoint from "./ellipse.js";

const canvas =  document.querySelector('canvas');
const gl = canvas.getContext("webgl")
console.log(gl);
if(gl == null){
  throw new Error("webgl is not suported ");
}
// alert('everything is allright')

// DrawTriangle(gl);
DrawDDALine(gl,canvas);
DrawBLALine(gl,canvas);
// DrawCircleMidPoint(gl,canvas)
// DrawEllipseMidPoint(gl,canvas)