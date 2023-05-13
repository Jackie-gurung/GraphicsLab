import DrawTriangle from "./triangle.js";
import DrawViewPort from './viewPort.js';
import CohenSutherland from "./cohenSutherland.js";
import sutherLandHodgemann from "./sutherlandHod.js";


const canvas =  document.querySelector('canvas');
const gl = canvas.getContext("webgl")
console.log(gl);
if(gl == null){
  throw new Error("webgl is not suported ");
}

// alert('everything is allright')

// for line 
let P1 = [-0.6, -0.7, 0];
let P2 = [0.5, 0.6, 1];

// for settting the clipping window size 
let Xw_min = -0.8;
let Yw_min = -0.5;
let Xw_max = 0.8;
let Yw_max = 0.5;

DrawViewPort(gl,Xw_min, Yw_min, Xw_max, Yw_max);
// CohenSutherland(gl,P1, P2, Xw_min, Yw_min, Xw_max, Yw_max);
sutherLandHodgemann(gl,Xw_min, Yw_min, Xw_max, Yw_max);
// DrawTriangle(gl);
