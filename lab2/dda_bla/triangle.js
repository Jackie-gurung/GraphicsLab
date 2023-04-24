import DrawObject from './draw.js'

export default function DrawTriangle(gl){
    // create vertex data
    console.log("draw triangle called");
    const vertexData = [
        0, 1, 0,
        1, -1, 0,
        -1, -1, 0,
    ];
    DrawObject(gl,gl.TRIANGLES, 3, vertexData,0,vertexData.length);
}

// export default function DrawTriangle();