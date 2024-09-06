const arr = [1, 40, -5, 10, 0];

function sortArray(arrayOfOperations) {
  for (let i = 0; i < arrayOfOperations.length; i++) {
    for (let j = 0; j < arrayOfOperations.length - 1 - i; j++) {
      if (arrayOfOperations[j] > arrayOfOperations[j + 1]) {
        const temp = arrayOfOperations[j];
        arrayOfOperations[j] = arrayOfOperations[j + 1];
        arrayOfOperations[j + 1] = temp;
      }
    }
  }
  return arrayOfOperations;
}

console.log(sortArray(arr));

