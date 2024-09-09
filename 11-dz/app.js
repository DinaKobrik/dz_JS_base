const arr = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];

function check(array) {
  const arrNew = [];
  for (let i = 0; i < array.length; i++) {
    let dateParts = array[i].includes("-")
      ? array[i].split("-")
      : array[i].split("/");
    const [day, month, year] = dateParts.map(Number);
    if (year > 0 && month > 0 && month <= 12 && day > 0 && day <= 31) {
      arrNew.push(`${day}-${month}-${year}`);
    }
  }
  return arrNew;
}

console.log(check(arr));
