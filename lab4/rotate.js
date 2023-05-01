import DrawObject from './draw.js'

export default function RotateTriangle(gl){
    // create vertex data with translation
    console.log("rotate triangle called");
    gl.clearColor(0, 0, 0, 1);
    const angle = 45;
    const theta = angle * Math.PI/180;
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);

    const vertexData = [
        0, 0.2, 0,
        0.2, -0.2, 0,
        -0.2, -0.2, 0,
    ];
    for(let i = 0; i < vertexData.length; i += 3){
        const x = vertexData[i];
        const y = vertexData[i+1];
        vertexData[i] = x*cos - y*sin; // rotate x-coordinate
        vertexData[i+1] = x*sin + y*cos; // rotate y-coordinate
    }
    DrawObject(gl, gl.TRIANGLES, 3, vertexData, 0, vertexData.length);
}

