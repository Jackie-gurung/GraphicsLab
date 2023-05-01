import DrawObject from './draw.js'

export default function ReflectTriangle(gl){
    console.log("reflect triangle called");
    gl.clearColor(0, 0, 0, 1);
    const vertexData = [
        0, 0.2, 0,
        0.2, -0.2, 0,
        -0.2, -0.2, 0,
    ];
    for(let i = 0; i < vertexData.length; i += 3){
        vertexData[i+1] = -vertexData[i+1]; // reflect y-coordinate
    }
    DrawObject(gl, gl.TRIANGLES, 3, vertexData, 0, vertexData.length);
}
