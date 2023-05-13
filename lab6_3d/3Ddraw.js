import DrawCube from "./drawCube.js";
import translateObject from "./translateObject.js";
import rotateObject from "./rotateObject.js";
import translate3DObject from "./3Dtranslate.js";
import rotate3DObject from "./3Drotate.js";
import scale3DObject from "./3Dscale.js";

export default function draw3DObject(gl,O, H, W, L,FrontFace,
    BackFace,
    LeftFace,
    RightFace,
    TopFace,
    BottomFace) {
    // P2 P4
    // P1 P3
    let [x, y] = [O[0], O[1]];
    let P1 = [x, y, 1];
    let P2 = [x, y + H, 1];
    let P3 = [x + L, y, 1];
    let P4 = [x + L, y + H, 1];
    let P5 = createVertex(P3, W / 2, W / 2);
    let P6 = createVertex(P4, W / 2, W / 2);
    let P7 = createVertex(P2, W / 2, W / 2);
    FrontFace = [...P1, ...P2, ...P3, ...P2, ...P3, ...P4];
    BackFace = translateObject(FrontFace, W / 1.75, W / 2.4);
    RightFace = [...P3, ...P4, ...P5, ...P4, ...P5, ...P6];
    LeftFace = translateObject(RightFace, -L, 0);
    TopFace = [...P2, ...P4, ...P7, ...P4, ...P6, ...P7];
    BottomFace = translateObject(TopFace, 0, -H);
    DrawCube(gl,FrontFace, BackFace,LeftFace,RightFace,TopFace,BottomFace);
    // translate3DObject(gl,0.5, 0.5,FrontFace,BackFace,LeftFace,RightFace,TopFace,BottomFace);
    // rotate3DObject(gl,(4 * Math.PI) / 5,FrontFace,BackFace,LeftFace,RightFace,TopFace,BottomFace);
    scale3DObject(gl,1.5,1.5,FrontFace,BackFace,LeftFace,RightFace,TopFace,BottomFace)
  }
  
  function createVertex(A, Tx, Ty) {
    let vertexData = [
      ...translateObject(
        rotateObject(
          -Math.PI / 20,
          translateObject(translateObject(A, Tx, Ty), -A[0], -A[1])
        ),
        A[0],
        A[1]
      ),
    ];
    return vertexData;
  }