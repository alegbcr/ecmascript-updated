// flat
const arrayMatrix = [
  1,
  1,
  2,
  3,
  4,
  5,
  [7, 6, 4, 3, 2, 2, [2, 3, 4, 5, 6, 6, 7]],
];

console.log(arrayMatrix.flat(3));

// flatMap
const arrayMatrix2 = [1, 1, 2, 3, 4, 5];

console.log(arrayMatrix2.flatMap((v) => [v, v * 2]));
