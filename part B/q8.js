let nums = [10, 3, 7, 20, 13, 2];

// 1. Using map method
let squares = nums.map((n) => n * n);
console.log("Squares:", squares);

// 2. Using filter method
let isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

let primes = nums.filter(isPrime);
console.log("Primes:", primes);

// 3. Using reduce method
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// 4. Using sort method
let descending = nums.slice().sort((a, b) => b - a);
console.log("Descending:", descending);