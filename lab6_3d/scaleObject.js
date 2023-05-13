export default function scaleObject(objectData, Sx, Sy) {
    let vertexData = [];
    let scalingMatrix = [...[Sx, 0, 0], ...[0, Sy, 0], ...[0, 0, 1]];
    vertexData.push(...matrixMultiplication(scalingMatrix, objectData, 3));
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