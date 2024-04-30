const matrix = [
  [3, 6, 9],
  [10, 11, 12],
  [15, 17, 18],
];

function calculateDiagonalSum(matrix) {
  const totalRows = matrix.length;
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;

  for (let i = 0; i < totalRows; i++) {
    leftDiagonalSum = leftDiagonalSum + matrix[i][i];
    rightDiagonalSum = rightDiagonalSum + matrix[i][totalRows - i - 1];
  }

  const result = Math.abs(leftDiagonalSum - rightDiagonalSum);

  return result;
}

const sum = calculateDiagonalSum(matrix);

console.log(sum);
