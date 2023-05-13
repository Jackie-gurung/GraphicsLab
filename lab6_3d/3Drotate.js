import rotateObject from "./rotateObject.js";
import DrawCube from "./drawCube.js";


export default function rotate3DObject(gl,angle,FrontFace,
    BackFace,
    LeftFace,
    RightFace,
    TopFace,
    BottomFace) {
    FrontFace = rotateObject(angle, FrontFace);
    BackFace = rotateObject(angle, BackFace);
    TopFace = rotateObject(angle, TopFace);
    BottomFace = rotateObject(angle, BottomFace);
    RightFace = rotateObject(angle, RightFace);
    LeftFace = rotateObject(angle, LeftFace);
    DrawCube(gl,FrontFace, BackFace,LeftFace,RightFace,TopFace,BottomFace);

  }