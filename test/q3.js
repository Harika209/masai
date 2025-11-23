// Q10. Simple Closure
function counter() {
  let count = 0;  // private variable

  return function () {
    count++;
    console.log(count);
    return count;
  };
}

// Sample Output
const c = counter();
c(); // 1
c(); // 2
c(); // 3
// Q11. Medium Closure
function createWallet() {
  let balance = 0;  // private variable

  function addMoney(amount) {
    balance += amount;
  }

  function checkBalance() {
    console.log(balance);
    return balance;
  }

  return { addMoney, checkBalance };
}

// Example:
let myWallet = createWallet();

myWallet.addMoney(500);
myWallet.addMoney(200);

myWallet.checkBalance(); // should show 700
