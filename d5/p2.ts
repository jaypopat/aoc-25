console.time("time");

const [fresh_range, _] = (await Bun.file("./input.txt").text())
	.trim()
	.split("\n\n");

console.log(fresh_range);

// made me remember of https://leetcode.com/problems/merge-intervals/

const intervals = fresh_range
	?.split("\n")
	.map((el) => el.split("-").map(Number))
	.sort((a, b) => a[0] - b[0]);

const merged: number[][] = [];

merged.push(intervals[0]);

for (let i = 1; i < intervals.length; i++) {
	const curr = intervals[i];

	// 2 scenarios - completely independent ie does not overlap // overlaps

	const last_el = merged[merged.length - 1];

	if (last_el[1] >= curr[0]) {
		last_el[1] = Math.max(last_el[1], curr[1]);
	} else {
		// no overlap
		merged.push(curr);
	}
}

let ctr = 0;
for (const range of merged) {
	const diff = range[1] - range[0] + 1;
	ctr += diff;
}
console.timeEnd("time");

console.log(merged);
console.log(ctr);
