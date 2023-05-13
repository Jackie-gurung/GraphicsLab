export default function rotateObject(angle, objectData) {
    let vertexData = [];
    let cos = Math.cos(angle);
    let sin = Math.sin(angle);
    let rotationMatrix = [...[cos, -sin, 0], ...[sin, cos, 0], ...[0, 0, 1]];
    vertexData.push(...matrixMultiplication(rotationMatrix, objectData, 3));
    return vertexData;
  }

  function matrixMultiplication(Transformer, coordinates, numElements) {
    let result = [];
    for (let i = 0; i < coordinates.length; i += 3) {
    for (let j = 0; j < 3; j++) {
        let sum = 0;
        for (let k = 0; k < numElements; k++) {
            sum += Transformer[j * 3 + k] * coordinates[i + k];
        }
        result.push(sum);
        }
    }
    return result;
}