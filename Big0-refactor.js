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

// powerCalculator(2, 10);

// function reverseString(str) {
//   if (!str.length) {
//     return '';
//   }
//   return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
// }

function reverseString(str) {
  if (!str.length) {
    return '';
  } 
  let newArray = [];
  str.split('').map(letter => {
    newArray.unshift(letter)
  })
  return newArray.join('');
}

// console.log(reverseString('cat'))

function triangularNumberRec(n) {
  if (n === 1) {
    return 1;
  }
  return n + triangularNumberRec(n - 1);
}

// console.log(triangularNumberRec(5));

function triangularNumber(n) {
  if (n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = n; i > 1; i--) {
    result += i;
  }
  console.log(result)
}

// triangularNumber(5)

function stringSplitterRec(str, seperator = '') {
  if (!seperator) {
    return str;
  }
  if (!str.length) {
    return '';
  }
  if (str[0] === seperator) {
    return '' + stringSplitterRec(str.slice(1), seperator);
  }
  return str[0] + stringSplitterRec(str.slice(1), seperator);
}

// console.log(stringSplitterRec('02/20/2020', '/'));


function stringSplitter(str, seperator = '') {
  if (!seperator) {
    return str;
  }
  if (!str.length) {
    return '';
  }
  return str.split('').filter(char => char !== seperator).join('')
}

// console.log(stringSplitter('02/20/2020', '/'));

// console.time('fibonacci');
// function fibonacci(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// let num = 10;
// console.log(`fibonacci of ${num} is ${fibonacci(num)}`);
// console.timeEnd('fibonacci')

// console.time('fibonacciIterative');
// function fibbonaciIterative(num){
//   let arr = [0, 1];
//   for (let i = 2; i < num + 1; i++){
//     arr.push(arr[i - 2] + arr[i -1])
//   }
//  console.log(arr[num])
//  console.timeEnd('fibonacciIterative')
// }

// fibbonaciIterative(10)
console.time('factorialRec');
function factorialRec(n) {
  if (n === 0) return 1;
  return (factorialRec(n-1) * n );
}
console.log(factorialRec(15))
console.timeEnd('factorialRec')

console.time('factorial');
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  result = 1;
  for (let i = n; i > 1; i --) {
    result *= i 
  }
  console.log(result)
}
factorial(1000)
console.timeEnd('factorial')
