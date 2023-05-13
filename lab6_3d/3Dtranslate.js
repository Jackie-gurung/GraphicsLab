import translateObject from "./translateObject.js";
import DrawCube from "./drawCube.js";

export default function translate3DObject(gl,Tx, Ty,FrontFace,
    BackFace,
    LeftFace,
    RightFace,
    TopFace,
    BottomFace) {
    FrontFace = translateObject(FrontFace, Tx, Ty);
    BackFace = translateObject(BackFace, Tx, Ty);
    TopFace = translateObject(TopFace, Tx, Ty);
    BottomFace = translateObject(BottomFace, Tx, Ty);
    RightFace = translateObject(RightFace, Tx, Ty);
    LeftFace = translateObject(LeftFace, Tx, Ty);
    DrawCube(gl,FrontFace, BackFace,LeftFace,RightFace,TopFace,BottomFace);
  }