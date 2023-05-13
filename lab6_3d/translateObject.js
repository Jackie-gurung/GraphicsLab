export default function translateObject(objectData, Tx, Ty) {
    let vertexData = [];
    let translationMatrix = [...[1, 0, Tx], ...[0, 1, Ty], ...[0, 0, 1]];
    vertexData.push(...matrixMultiplication(translationMatrix, objectData, 3));
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