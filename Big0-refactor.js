'use strict';

/* function stepsToSolveHanoiT(discs, srcP, desP, bufferP) {
  if (discs >= 1) {

    stepsToSolveHanoiT(discs - 1, srcP, bufferP, desP);

    console.log('Moving disk from Tower ', srcP, ' to Tower ', desP);

    stepsToSolveHanoiT(discs - 1, bufferP, desP, srcP);
  }
  
  return;
}

stepsToSolveHanoiT(3, "A", "C", "B");


 */

function TOH(num, source, dest, temp) {
  if (num > 0) {
  
    TOH(num - 1, source, temp, dest);
    console.log(`moving from ${source} to  ${dest}`);

    TOH(num-1, temp, dest, source);
  }
}


TOH(3,'A','C','B');

