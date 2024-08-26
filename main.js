function minesweeper(board) {
  const rows = board.length;
  const cols = board[0].length;

  // Helper function to check if a cell is within the board boundaries
  function isValidCell(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols;
  }

  // Directions for adjacent cells (8 directions: top, top-right, right, bottom-right, bottom, bottom-left, left, top-left)
  const directions = [
    [-1, 0], [-1, 1], [0, 1], [1, 1],
    [1, 0], [1, -1], [0, -1], [-1, -1]
  ];

  // Create a new board for the result
  let resultBoard = board.map(row => row.slice());

  // Iterate over each cell in the board
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === 1) {
        resultBoard[row][col] = 9; // Replace mine with 9
      } else {
        // Count adjacent mines
        let mineCount = 0;
        for (let [dRow, dCol] of directions) {
          let newRow = row + dRow;
          let newCol = col + dCol;
          if (isValidCell(newRow, newCol) && board[newRow][newCol] === 1) {
            mineCount++;
          }
        }
        resultBoard[row][col] = mineCount;
      }
    }
  }

  return resultBoard;
}

// Example usage:
let inputBoard = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];

let outputBoard = minesweeper(inputBoard);
console.log(outputBoard);
// Output should be:
// [
//   [1, 9, 2, 1],
//   [2, 3, 9, 2],
//   [3, 9, 4, 9],
//   [9, 9, 3, 1],
// ]
