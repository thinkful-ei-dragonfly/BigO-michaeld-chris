/* eslint-disable no-console */
/* eslint-disable no-undef */


// Tower of Hanoi
function TOH(num, source, dest, temp) {
  if (num > 0) {
    TOH(num - 1, source, temp, dest);
    console.log(`moving from ${source} to  ${dest}`);

    TOH(num - 1, temp, dest, source);
  }
}
// TOH(3,'A','C','B');

// refactor recursion
// 1. Sheep
function countSheep(sheep) {
  if (sheep >= 0) {
    for (let i = 0; i < sheep; ) {
      console.log(`${sheep} sheep jumped over the fence`);
      sheep = sheep - 1;
      if (sheep == 0) {
        console.log('All sheep jumped over the fence');
      }
    }
  }
}
// countSheep(10);

function powerCalculator(base, exp) {
  let result = base;
  if (exp === 0) {
    console.log(1);
  }
  if (exp < 0) {
    console.log('exponent should be >= 0');
  }
  if (exp > 0) {
    for (let i = exp; i > 1; i--) {
      result = result * base;
    }
    console.log(result);
  }
}

powerCalculator(2, 10);
