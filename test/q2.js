let nums = [10, 3, 7, 20, 13, 21];

// 1. Using map → squares
let squares = nums.map((n) => n * n);
console.log("Squares:", squares);

// 2. Using filter → prime numbers
let isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

let primes = nums.filter(isPrime);
console.log("Primes:", primes);

// 3. Using reduce → sum of elements
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// 4. Using sort → descending order
let descending = nums.slice().sort((a, b) => b - a);
console.log("Descending:", descending);
function displayCar() {
  console.log("Vehicle Category: Car");
}

function displayTruck() {
  console.log("Vehicle Category: Truck");
}

function displayBike() {
  console.log("Vehicle Category: Bike");
}
function vehicleInfo(vehicleCategory, callbackFn) {
  console.log("Selected:", vehicleCategory);
  callbackFn(); // execute the callback
}
vehicleInfo("Car", displayCar);
vehicleInfo("Truck", displayTruck);
vehicleInfo("Bike", displayBike);
