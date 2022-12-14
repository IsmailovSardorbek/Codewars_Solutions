function snail(matrix) {
  // a place to store the array
  const array = [];
  // base case
  if (matrix[0].length === 0) return array;
  // keep track of current row and column
  // initialized to 0, 0
  let row = 0;
  let col = 0;
  const numCols = matrix.length;
  const numRows = matrix.length;
  let colIncreasing = true;
  let colDecreasing = false;
  let rowIncreasing = false;
  let rowDecreasing = false;
  let minRow = 1;
  let maxRow = numRows - 1;
  let minCol = 0;
  let maxCol = numCols - 1;
  // while the array length is less than the desired length n x n
  while (array.length < numRows * numCols) {
    array.push(matrix[row][col]);
    // if current col is less than number of columns
    if (col < maxCol && colIncreasing) {
      // increment the column
      col++;
      if (col === maxCol) {
        rowIncreasing = true;
        colIncreasing = false;
        colDecreasing = false;
        rowDecreasing = false;
      }
    } else if (row < maxRow && rowIncreasing) {
      // else if row is less than number of rows
      // increment row
      row++;
      if (row === maxRow) {
        rowIncreasing = false;
        colIncreasing = false;
        colDecreasing = true;
        rowDecreasing = false;
      }
    } else if (col > minCol && colDecreasing) {
      // else if current col is greater than 0
      // decrement the column
      col--;
      if (col === minCol) {
        rowIncreasing = false;
        colIncreasing = false;
        colDecreasing = false;
        rowDecreasing = true;
      }
    } else if (row > minRow && rowDecreasing) {
      // else if the current row is greater than 0
      // decrement the row
      row--;
      if (row === minRow) {
        minRow++;
        maxRow--;
        minCol++;
        maxCol--;
        rowIncreasing = false;
        colIncreasing = true;
        colDecreasing = false;
        rowDecreasing = false;
      }
    }
  }
  return array;
}

function snail(matrix) {
  const array = [];
  if (matrix[0].length === 0) return array;

  const matrixLength = matrix.length;

  const dir = {
    right: true,
    down: false,
    left: false,
    up: false,
  };

  const resetDir = () => Object.keys(dir).forEach((key) => (dir[key] = false));

  let row = 0;
  let col = 0;

  let min = 0;
  let max = matrixLength - 1;

  while (array.length < matrixLength * matrixLength) {
    array.push(matrix[row][col]);
    if (col < max && dir.right) {
      col++;
      if (col === max) {
        resetDir();
        dir.down = true;
      }
    } else if (row < max && dir.down) {
      row++;
      if (row === max) {
        resetDir();
        dir.left = true;
      }
    } else if (col > min && dir.left) {
      col--;
      if (col === min) {
        resetDir();
        dir.up = true;
      }
    } else if (row > min + 1 && dir.up) {
      row--;
      if (row === min + 1) {
        min++;
        max--;
        resetDir();
        dir.right = true;
      }
    }
  }
  return array;
}
