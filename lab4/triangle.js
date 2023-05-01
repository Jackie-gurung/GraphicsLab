import DrawObject from './draw.js'
import TranslateTriangle from './translation.js';
import ScaleTriangle from './scaling.js';
import RotateTriangle from './rotate.js';
import ReflectTriangle from './reflection.js';
import ShearTriangle from './shearing.js';

export default function DrawTriangle(gl){
    // create vertex data
    console.log("draw triangle called");
    const vertexData = [
        0, 0.2, 0,
        0.2, -0.2, 0,
        -0.2, -0.2, 0,
    ];
    DrawObject(gl,gl.TRIANGLES, 3, vertexData,0,vertexData.length);
   setTimeout(function() {TranslateTriangle(gl)},3000);
   setTimeout(function() {ScaleTriangle(gl)},6000);
   setTimeout(function() {RotateTriangle(gl)},9000);
   setTimeout(function() {ReflectTriangle(gl)},12000);
   setTimeout(function() {ShearTriangle(gl)},15000);

}

// export default function DrawTriangle();