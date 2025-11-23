function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
    return count;
  };
}
const c = counter();
c(); // 1
c(); // 2
c(); // 3
