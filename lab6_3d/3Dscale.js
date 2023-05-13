import DrawCube from "./drawCube.js";
import scaleObject from "./scaleObject.js"; 

export default function scale3DObject(gl,Sx, Sy,FrontFace,
  BackFace,
  LeftFace,
  RightFace,
  TopFace,
  BottomFace) {
    FrontFace = scaleObject(FrontFace, Sx, Sy);
    BackFace = scaleObject(BackFace, Sx, Sy);
    TopFace = scaleObject(TopFace, Sx, Sy);
    BottomFace = scaleObject(BottomFace, Sx, Sy);
    RightFace = scaleObject(RightFace, Sx, Sy);
    LeftFace = scaleObject(LeftFace, Sx, Sy);
    DrawCube(gl,FrontFace, BackFace,LeftFace,RightFace,TopFace,BottomFace);

  }