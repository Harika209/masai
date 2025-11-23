function sumAll(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log("Q3:", sumAll(1, 2, 3, 4));
