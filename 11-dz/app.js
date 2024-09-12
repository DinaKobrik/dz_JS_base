const arr = [
  "10-02-2022",
  "29-02-2022",
  "29-02-2024",
  "30-04-2022",
  "18.04.2022",
  "тест",
  "11/12/2023",
  "00/13/2022",
  "41/12/2023",
];

function check(array) {
  const arrNew = [];

  for (let i = 0; i < array.length; i++) {
    let dateParts = [];
    let format = "";
    if (array[i].includes("-") || array[i].includes(".")) {
      dateParts = array[i].includes("-")
        ? array[i].split("-")
        : array[i].split(".");
      format = "dd-mm-yyyy";
    } else if (array[i].includes("/")) {
      dateParts = array[i].split("/");
      format = "mm-dd-yyyy";
    }
    let [day, month, year] = dateParts.map(Number);
    if (year > 0 && month > 0 && month <= 12 && day > 0) {
      const shortMonths = [4, 6, 9, 11];
      const isLeapYear = year % 4 === 0;
      if (
        (month === 2 && (isLeapYear ? day <= 29 : day <= 28)) ||
        (shortMonths.includes(month) && day <= 30) ||
        (!shortMonths.includes(month) && month !== 2 && day <= 31)
      ) {
        if (format === "dd-mm-yyyy") {
          arrNew.push(`${day}-${month}-${year}`);
        } else if (format === "mm-dd-yyyy") {
          arrNew.push(`${month}-${day}-${year}`);
        }
      }
    }
  }

  return arrNew;
}

console.log(check(arr));

