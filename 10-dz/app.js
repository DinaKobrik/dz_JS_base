const arr = [5, -19, 0, 30, 14, 18];

function check(num) {
  return num >= 18;
}

function check2(num) {
    return num < 4;
}

function filter(array, fn) {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    if (!fn(array[i])) {
      res.push(array[i]);
    }
  }
  return res;
}

console.log(filter(arr, check));
console.log(filter(arr, check2));
