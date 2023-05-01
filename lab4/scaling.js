import DrawObject from './draw.js'

export default function ScaleTriangle(gl){
    // create vertex data with translation
    console.log("scaling triangle called");
    gl.clearColor(0, 0, 0, 1);
    const scaling = 0.5;
    const vertexData = [
        0 * scaling, 0.2 * scaling, 0 ,
        0.2 * scaling, -0.2 * scaling, 0 ,
        -0.2 * scaling, -0.2 * scaling, 0 ,
    ];
    DrawObject(gl, gl.TRIANGLES, 3, vertexData, 0, vertexData.length);
}

