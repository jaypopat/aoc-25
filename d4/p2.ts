console.time("total");

let grid = (await Bun.file("./input.txt").text())
	.split("\n")
	.map((line) => line.split(""));

let rows = grid.length;
let cols = grid[0]!.length;

let total_removal_ctr = 0;
let removed_ctr;

do {
	removed_ctr = 0;
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (grid[i]![j] === "@" && countAdjacentRolls(i, j) < 4) {
				grid[i]![j] = ".";
				removed_ctr++;
			}
		}
	}
	total_removal_ctr += removed_ctr;
} while (removed_ctr > 0);

console.timeEnd("loop");
console.log(total_removal_ctr);
console.timeEnd("total");

function countAdjacentRolls(i: number, j: number): number {
	const dirs = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
	];
	let neighbourCountPerCell = 0;

	for (const [di, dj] of dirs) {
		const ni = i + di!;
		const nj = j + dj!;
		if (isValidPaperRollNeighbour(ni, nj)) {
			neighbourCountPerCell++;
		}
	}
	return neighbourCountPerCell;
}

function isValidPaperRollNeighbour(i: number, j: number) {
	return i >= 0 && i < rows && j >= 0 && j < cols && grid[i]![j] === "@";
}
