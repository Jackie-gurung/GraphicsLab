// import initBuffers from "./3dmodel";

main();

function main() {
    const canvas =  document.querySelector('canvas');
    const gl = canvas.getContext("webgl")
    console.log(gl);
    if(gl == null){
        throw new Error("webgl is not suported ");
    }
    // alert('everything is allright')

    // for vertex shader  
    const vsSource = `
        attribute vec4 aVertexPosition;
        attribute vec4 aVertexColor;

        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        varying lowp vec4 vColor;

        void main(void) {
            gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
            vColor = aVertexColor;
        }
    `;

    // for fragment shader 
    const fsSource = `
    varying lowp vec4 vColor;

    void main(void){
        gl_FragColor = vcolor;
    }
    `;

    const shaderProgram = initShaderProgram(gl,vsSource,fsSource);

    const programInfo = {
        program : shaderProgram,
        attribLocations : {
            vertexPosition : gl.getAttribLocation(shaderProgram,"aVertexPosition" ),
            vertexColor: gl.getAttribLocation(shaderProgram,"aVertexColor"),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram,"uProjectionMatrix"),
            modelViewMatrix: gl.getUniformLocation(shaderProgram,"uModelViewMatrix"),
        },
    };

    const buffers = initBuffers(wgl);

let then = 0;

function render(now) {
  now *= 0.001; // convert to seconds
  const deltaTime = now - then;
  then = now;

  drawScene(wgl, programInfo, buffers, deltaTime);

  requestAnimationFrame(render);
}

requestAnimationFrame(render);
    
}

// converts into shder program 
function initShaderProgram(gl,vsSource,fsSource){
    const vertexShader = loadShader(gl,gl.VERTEX_SHADER,vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER,fsSource);

    const shaderProgram = gl.createProgram();

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert(
        "Unable to initialize the shader program: " +
            gl.getProgramInfoLog(shaderProgram)
        );
        return null;
    }

    return shaderProgram;
}

function loadShader(gl, type, source) {
    const shader = gl.createShader(type);
  
    gl.shaderSource(shader, source);
  
    gl.compileShader(shader);
  
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert(
        "An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader)
      );
  
      gl.deleteShader(shader);
  
      return null;
    }
  
    return shader;
  }

  function initBuffers(gl) {
    const positionBuffer = gl.createBuffer();
  
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  
    const positions = [
      // Front face
      -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
  
      // Back face
      -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,
  
      // Top face
      -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,
  
      // Bottom face
      -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,
  
      // Right face
      1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,
  
      // Left face
      -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
    ];
  
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(positions),
      gl.STATIC_DRAW
    );
  
    const faceColors = [
      [0.0, 0.6, 0.78, 1.0],
      [0.25, 0.0, 0.0, 0.5],
      [0.0, 1.0, 0.33, 1.0],
      [0.0, 0.42, 0.74, 0.8],
      [1.0, 1.0, 0.0, 0.62],
      [0.32, 0.0, 0.55, 0.39],
    ];
  
    let colors = [];
  
    faceColors.map((faceColor) => {
      colors = colors.concat(faceColor, faceColor, faceColor, faceColor);
    });
  
    const colorBuffer = gl.createBuffer();
  
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    const indexBuffer = gl.createBuffer();
  
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  
    const indices = [
      0, 1, 2,
      0, 2, 3, // front
      4, 5, 6,
      4, 6, 7, // back
      8, 9, 10,
      8, 10, 11, // top
      12, 13, 14,
      12, 14, 15, // bottom
      16, 17, 18,
      16, 18, 19, // right
      20, 21, 22,
      20, 22, 23, // left
    ];
  
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices),
      gl.STATIC_DRAW
    );
  
    return {
      position: positionBuffer,
      color: colorBuffer,
      indices: indexBuffer,
    };
  }

  function drawScene(wgl, programInfo, buffers, deltaTime) {
    wgl.clearColor(0.2, 0.35, 0.15, 1.0);
    wgl.clearDepth(1.0);
    wgl.enable(wgl.DEPTH_TEST);
    wgl.depthFunc(wgl.LEQUAL);
  
    wgl.clear(wgl.COLOR_BUFFER_BIT | wgl.DEPTH_BUFFER_BIT);
  
    const fieldOfView = (45 * Math.PI) / 180; // in radians
    const aspect = wgl.canvas.clientWidth / wgl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();
  
    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);
  
    const modelViewMatrix = mat4.create();
  
    mat4.translate(modelViewMatrix, modelViewMatrix, [-3.7, -1.0, -16.0]);
    mat4.rotate(modelViewMatrix, modelViewMatrix, cubeRotation, [0, 1, 0]);
    mat4.rotate(modelViewMatrix, modelViewMatrix, cubeRotation * 0.7, [1, 1, 1]);
  
    {
      const numComponents = 3;
      const type = wgl.FLOAT;
      const normalize = false;
      const stride = 0;
      const offset = 0;
      wgl.bindBuffer(wgl.ARRAY_BUFFER, buffers.position);
      wgl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset
      );
      wgl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
    }
  
    {
      const numComponents = 4;
      const type = wgl.FLOAT;
      const normalize = false;
      const stride = 0;
      const offset = 0;
      wgl.bindBuffer(wgl.ARRAY_BUFFER, buffers.color);
      wgl.vertexAttribPointer(
        programInfo.attribLocations.vertexColor,
        numComponents,
        type,
        normalize,
        stride,
        offset
      );
      wgl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
    }
  
    wgl.bindBuffer(wgl.ELEMENT_ARRAY_BUFFER, buffers.indices);
  
    wgl.useProgram(programInfo.program);
  
    wgl.uniformMatrix4fv(
      programInfo.uniformLocations.projectionMatrix,
      false,
      projectionMatrix
    );
  
    wgl.uniformMatrix4fv(
      programInfo.uniformLocations.modelViewMatrix,
      false,
      modelViewMatrix
    );
  
    {
      const vertexCount = 36;
      const type = wgl.UNSIGNED_SHORT;
      const offset = 0;
      wgl.drawElements(wgl.TRIANGLES, vertexCount, type, offset);
    }
  
    cubeRotation += deltaTime;
  }


