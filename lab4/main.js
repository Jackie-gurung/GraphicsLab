import DrawTriangle from "./triangle.js";

const canvas =  document.querySelector('canvas');
const gl = canvas.getContext("webgl")
console.log(gl);
if(gl == null){
  throw new Error("webgl is not suported ");
}
// alert('everything is allright')

DrawTriangle(gl);
