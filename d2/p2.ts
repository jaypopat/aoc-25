let ranges = (await Bun.file("./input.txt").text()).split(",")

// console.log(ranges);

let invalidIdSum = 0;
for (const range of ranges) {
  let [start, end] = range.split("-");
  if (!start || !end) throw new Error("Invalid range");

  for (let i = Number(start); i <= Number(end); i++) {
    if (repeatedAtleastTwice(i)) {
      invalidIdSum += i;
    }
  }

}
console.log(invalidIdSum);

function repeatedAtleastTwice(n: number): boolean {

  let str_n = String(n);

  // if its even do the halving check
  if (str_n.length % 2 == 0) {
    let mid = Math.floor(str_n.length / 2);
    let [p1, p2] = [str_n.slice(0, mid), str_n.slice(mid)];

    if (p1 == p2) return true;
  }


  // eg - 2121212121,999,123123123,1212121212,

  // the min sequence count is 1 ie 999 (9, 3 times) and max is len/2 -1, hence we take batches of digits from len/2 -1 ie floor it - (since minimum 2)
  // sliding window approach
  for (let len = 1; len <= Math.floor(str_n.length / 2); len++) {
    let window_pattern = str_n.slice(0, len);
    // how many times we repeat our window_pattern
    let repeat_count = str_n.length / len;
    // if we can construct original back we have a repeat sequence
    if (window_pattern.repeat(repeat_count) == str_n) {
      return true;
    }
  }
  return false;

}
