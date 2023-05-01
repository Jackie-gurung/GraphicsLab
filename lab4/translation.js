import DrawObject from './draw.js'

export default function TranslateTriangle(gl){
    // create vertex data with translation
    console.log("translate triangle called");
    gl.clearColor(0, 0, 0, 1);
    const translation = [0.5, 0.5, 0];
    const vertexData = [
        0 + translation[0], 0.2 + translation[1], 0 + translation[2],
        0.2 + translation[0], -0.2 + translation[1], 0 + translation[2],
        -0.2 + translation[0], -0.2 + translation[1], 0 + translation[2],
    ];
    DrawObject(gl, gl.TRIANGLES, 3, vertexData, 0, vertexData.length);
}

