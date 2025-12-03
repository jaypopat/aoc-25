// i want only 12 digits in a bank -> eliminate rest which are lowest and bring the val down
// ie eliminate arr.len - 12 digits
// i cant just pick a num with not enough nums after (cuz i need to make up 12)
// hence for the first digit our looking space is 0..arr.len-12
// the next digit's looking space will build upon the previous one etc
// we make sure to pick nums in the a range so we dont look too far and can make 12 at the end

//987654321111111- 987654321111
//811111111111119 -811111111119
//818181911112111 -888911112111

// max start is arr.len-12

const banks = (await Bun.file("./input.txt").text()).trim().split("\n");


let total_voltage = 0;

for (const bank of banks) {
  let arr = bank.split("").map(Number);
  let highest_volts: number[] = [];
  let need = 12;
  let range_start = 0;


  while (need > 0) {
    // now we search for nums in range and keep the ones which are highest
    let range_end = arr.length - need;

    // now for each range, we find the highest number and index (needed for next iteration start)
    let [highest, highestIdx] = findHighestNumInRange(arr, range_start, range_end);

    need--;
    range_start = highestIdx + 1;
    highest_volts.push(highest);

  }
  console.log(highest_volts);
  let str_voltage = highest_volts.join("");
  total_voltage += Number(str_voltage);

}

function findHighestNumInRange(arr: number[], start: number, end: number): [number, number] {
  let highest = 0
  let highestIdx = -1;

  for (let i = start; i <= end; i++) {
    if (arr[i]! > highest) {
      highest = arr[i]!;
      highestIdx = i;
    }
  }
  return [highest, highestIdx];

}

console.log(total_voltage)
