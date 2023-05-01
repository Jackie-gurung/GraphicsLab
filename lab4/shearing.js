import DrawObject from './draw.js'

export default function ShearTriangle(gl){
    // create vertex data with shearing
    console.log("Shear triangle called");
    gl.clearColor(0, 0, 0, 1);
    const vertexData = [
        0, 0.2, 0,
        0.2, -0.2, 0,
        -0.2, -0.2, 0,
    ];
    const shearFactor = 0.5;
    for(let i = 0; i < vertexData.length; i += 3){
        vertexData[i] += shearFactor * vertexData[i+1]; // apply x-shear
    }
    DrawObject(gl, gl.TRIANGLES, 3, vertexData, 0, vertexData.length);
}

