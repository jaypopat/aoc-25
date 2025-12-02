let ranges = (await Bun.file("./input.txt").text()).split(",")

// console.log(ranges);

let invalidIdSum = 0;
for (const range of ranges) {
  let [start, end] = range.split("-");
  if (!start || !end) throw new Error("Invalid range");

  for (let i = Number(start); i <= Number(end); i++) {
    if (repeatedTwice(i)) {
      invalidIdSum += i;
    }

  }

}
console.log(invalidIdSum);

function repeatedTwice(n: number): boolean {

  // 123123,6464,55,1188511885,38593859
  // hence we split at half and if both halves are equal this is Invalid

  let str_n = String(n);
  let mid = Math.floor(str_n.length / 2);
  let [l, r] = [str_n.slice(0, mid), str_n.slice(mid)];

  return l === r;
}
