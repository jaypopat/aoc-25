let [fresh_range, available] = (await Bun.file("./input.txt").text())
	.trim()
	.split("\n\n");

let fresh_ctr = 0;
for (const el of available!.split("\n")) {
	const ingredient = Number(el);

	// check if this is in any of the ranges

	for (const range of fresh_range!.split("\n")) {
		const [start, end] = range.split("-").map(Number);
		if (ingredient >= start! && ingredient <= end!) {
			fresh_ctr++;
			break;
		}
	}
}
console.log(fresh_ctr);
