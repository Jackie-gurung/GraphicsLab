import DrawObject from './draw.js'

export default function DrawTriangle(gl){
    // create vertex data
    console.log("draw triangle called");
    const vertexData = [
        0, 0.2, 0,
        0.2, -0.2, 0,
        -0.2, -0.2, 0,
    ];
    DrawObject(gl,gl.TRIANGLES, 3, vertexData,0,vertexData.length);

}

// export default function DrawTriangle();