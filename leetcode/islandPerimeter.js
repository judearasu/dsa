/**
 * 463. Island Perimeter
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let up = 0,
    down = 0,
    left = 0,
    right = 0;
  let result = 0;
  count = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Simple Counting
      //   if (grid[r][c] === 1) {
      //     if (r === 0) {
      //       up = 0;
      //     } else {
      //       up = grid[r - 1][c];
      //     }
      //     if (c === 0) {
      //       left = 0;
      //     } else {
      //       left = grid[r][c - 1];
      //     }
      //     if (r === rows - 1) {
      //       down = 0;
      //     } else {
      //       down = grid[r + 1][c];
      //     }
      //     if (c === cols - 1) {
      //       right = 0;
      //     } else {
      //       right = grid[r][c + 1];
      //     }
      //     result += 4 - (up + left + right + down);
      //     // if (x < 1 || grid[x - 1][y] !== 1) result++;
      //     // if (y < 1 || grid[x][y - 1] !== 1) result++;
      //     // if (y >= cols - 1 || grid[x][y + 1] !== 1) result++;
      //     // if (x >= rows - 1 || grid[x + 1][y] !== 1) result++;
      //   }
      if (grid[r][c] === 1) {
        result += 4;
        if (r > 0 && grid[r - 1][c] === 1) {
          result -= 2;
        }
        if (c > 0 && grid[r][c - 1] === 1) {
          result -= 2;
        }
      }
    }
  }
  return result;
};

grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
console.log(islandPerimeter(grid));
