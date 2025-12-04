let grid = (await Bun.file("./input.txt").text()).split("\n").map((line) => line.split(""));

let rows = grid.length;
let cols = grid[0]!.length;

let removals = 0;


function calculateCount(prune = false): number {
  let count = 0;
  let removalCount = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i]![j]! === "@") {
        let surrounding_rolls = countAdjacentRolls(i, j);
        if (surrounding_rolls < 4) {
          if (prune) {
            grid[i]![j] = ".";
            removalCount++;
          }
          count++;
        }
      }
    }
  }
  removals += removalCount
  return count;
}

// initial count
let count = calculateCount();
while (count !== 0) {
  calculateCount(true)
  count = calculateCount();
}

console.log(removals);

function countAdjacentRolls(i: number, j: number): number {

  // 8 dirs including diagonal
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];
  let neighbourCountPerCell = 0;

  for (const [di, dj] of dirs) {
    let ni = i + di!;
    let nj = j + dj!;
    if (isValidPaperRollNeighbour(ni, nj)) {
      neighbourCountPerCell += 1;
    }
  }

  return neighbourCountPerCell;

}

function isValidPaperRollNeighbour(i: number, j: number) {
  return i >= 0 && i < rows && j >= 0 && j < cols && grid[i]![j] === "@";
}
