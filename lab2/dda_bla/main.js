import DrawTriangle from "./triangle.js"
import DrawDDALine from "./dda.js";

const canvas =  document.querySelector('canvas');
const gl = canvas.getContext("webgl")
// console.log(gl);
if(gl == null){
  throw new Error("webgl is not suported ");
}
// alert('everything is allright')

// DrawTriangle(gl);
DrawDDALine(gl,canvas);






