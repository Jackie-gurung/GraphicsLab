export default function initBuffers(gl) {
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