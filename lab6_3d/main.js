import draw3DObject from './3Ddraw.js'

const canvas =  document.querySelector('canvas');
const gl = canvas.getContext("webgl")
console.log(gl);
if(gl == null){
  throw new Error("webgl is not suported ");
}

// alert('everything is allright')

let O = [-0.5, -0.5, 0];
let [H, W, L] = [0.3, 0.3, 0.3];

let FrontFace,
  BackFace,
  LeftFace,
  RightFace,
  TopFace,
  BottomFace = [0,0,0,0,0,0];

draw3DObject(gl,O, H, W, L,FrontFace,BackFace,LeftFace,RightFace,TopFace,BottomFace);

