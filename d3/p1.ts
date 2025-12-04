const banks = (await Bun.file("./input.txt").text()).trim().split("\n");

let total_voltage = 0;

for (const bank of banks) {
	let best_pair = 0;
	let arr = bank.split("").map(Number);

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			let pair = Number(`${arr[i]}${arr[j]}`);
			if (pair > best_pair) best_pair = pair;
		}
	}
	total_voltage += best_pair;
}

console.log(total_voltage);
