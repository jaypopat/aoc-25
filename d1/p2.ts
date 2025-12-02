const input2 = await Bun.file("./input.txt").text();
const cmds = input2.split("\n");

let dial = 50;
let zeroCount = 0;

for (const cmd of cmds) {
  let [dir, magnitude] = [cmd[0], Number(cmd.substring(1))];

  if (dir === "R") {
    for (let mag = 1; mag <= magnitude; mag++) {
      if ((dial + mag) % 100 === 0) {
        zeroCount++;
      }
    }
    dial = (dial + magnitude) % 100;
  }
  else {
    for (let mag = 1; mag <= magnitude; mag++) {
      if ((dial - mag + 100) % 100 === 0) {
        zeroCount++;
      }
    }
    dial = (dial - magnitude + 100) % 100;
  }
  if (dial === 0) {
    zeroCount++;
  }
}

console.log(dial, zeroCount);
