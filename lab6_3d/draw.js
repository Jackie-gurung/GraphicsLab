export default function DrawObject(gl,object,objectSize,fragcode,vertexData,start,end){
    console.log("drawobject called");
    // console.log(gl);

    // create buffer 
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
    // load vertex into buffer 
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertexData),gl.STATIC_DRAW);

    // create vertex shader 
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader,`
    attribute vec3 position;
    void main(){
        gl_Position = vec4(position,1);
        gl_PointSize = 10.0;
    }
    `);
    gl.compileShader(vertexShader);

    // create fragment shader 
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader,fragcode);
    gl.compileShader(fragmentShader);

    // create program 
    const program = gl.createProgram();
    gl.attachShader(program,vertexShader);
    gl.attachShader(program,fragmentShader);
    gl.linkProgram(program);

    const positionLocation = gl.getAttribLocation(program,`position`);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0,0);

    gl.useProgram(program);
    for(let i=start;i<=end;i+=objectSize){
        gl.drawArrays(object,i,objectSize)
    }
    // gl.drawArrays(object,0,objectSize)
}

  