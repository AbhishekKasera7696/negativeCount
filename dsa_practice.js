function countNegatives(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
    
    // Start from the bottom-left corner
    let row = rows - 1;
    let col = 0;
    
    while (row >= 0 && col < cols) {
        if (grid[row][col] < 0) {
            count += cols - col;
            // Move to the next row
            row--;
        } else {
            // If the current element is non-negative, move to the next column
            col++;
        }
    }
    
    return count;
}

// Test cases
const grid1 = [
    [4,3,2,-1],
    [3,2,1,-1],
    [1,1,-1,-2],
    [-1,-1,-2,-3]
];
console.log(countNegatives(grid1)); // Output: 8

const grid2 = [
    [3,2],
    [1,0]
];
console.log(countNegatives(grid2)); // Output: 0
