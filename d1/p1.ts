const input = await Bun.file("./input.txt").text();

const cmds = input.split("\n");

let dial = 50;
let zeroCount = 0;

for (const cmd of cmds) {
	let [dir, magnitude] = [cmd[0], Number(cmd.substring(1))];

	if (dir === "R") {
		dial = (dial + magnitude) % 100;
	} else {
		dial = (dial - magnitude + 100) % 100;
	}
	if (dial === 0) {
		zeroCount++;
	}
}
console.log(dial, zeroCount);
