const arr = [1, 40, -5, 10, 0];

function sortArray(arrayOfOperations) {
  for (let i = 0; i < arrayOfOperations.length; i++) {
    for (let j = 0; j < arrayOfOperations.length - 1 - i; j++) {
      if (arrayOfOperations[j] > arrayOfOperations[j + 1]) {
       [arrayOfOperations[j], arrayOfOperations[j+1]] = [arrayOfOperations[j+1], arrayOfOperations[j]];
      }
    }
  }
  return arrayOfOperations;
}

console.log(sortArray(arr));

// Второе решение
const numbers = Array.from({ length: 10 }, () => {
  const max = 100;
  const min = -100;
  const randomNumber = Math.ceil(Math.random() * (max - min)) + min;
  return randomNumber
});

function sortArray(incomingArray, desc = false) {
  const array = [...incomingArray];
  for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
          const isExchange = desc ? array[i] < array[j] : array[i] > array[j]
          if (isExchange) {
              [array[i], array[j]] = [array[j], array[i]];
          }
      }
  }
  return array;
}

console.log(numbers);
console.log('Отсортированный по возрастанию массив:', sortArray(numbers));
console.log('Отсортированный по убыванию массив:', sortArray(numbers, true));
