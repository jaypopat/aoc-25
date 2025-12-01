const input2 = await Bun.file("./input.txt").text();
const cmds = input2.split("\n");

let dial = 50;
let zeroCount = 0;

for (const cmd of cmds) {
  let [dir, magnitude] = [cmd[0], Number(cmd.substring(1))];
  let prevDial = dial;

  if (dir === "R") {
    for (let i = 1; i < magnitude; i++) {
      if ((prevDial + i) % 100 === 0) {
        zeroCount++;
      }
    }
    dial = (prevDial + magnitude) % 100;
  }
  else {
    for (let i = 1; i < magnitude; i++) {
      if ((prevDial - i + 100) % 100 === 0) {
        zeroCount++;
      }
    }
    dial = (prevDial - magnitude + 100) % 100;
  }

  if (dial === 0) {
    zeroCount++;
  }
}

console.log(dial, zeroCount);
