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

/* function check(array) {
    const arrNew = [];

    let month, day, year;
    for (let i = 0; i < array.length; i++) {
            if (array[i].includes("-") || array[i].includes(".")) {
                [day, month, year] = array[i].includes("-")
                    ? array[i].split("-")
                    : array[i].split(".");
            } else if (array[i].includes("/")) {
                [month, day, year] = array[i].split("/")
            }
            [month, day, year] = [month, day, year].map(Number);
        if (year > 0 && month > 0 && month <= 12 && day > 0) {
            const shortMonths = [4, 6, 9, 11];
            const isLeapYear = year % 4 === 0;
            if (
                (month === 2 && (isLeapYear ? day <= 29 : day <= 28)) ||
                (shortMonths.includes(month) && day <= 30) ||
                (!shortMonths.includes(month) && month !== 2 && day <= 31)
            ) {
                arrNew.push(`${day}-${month}-${year}`);
            }
        }
    }

    return arrNew;
} 

Другой вариант

const length = 30;

function randomNumber(min = 1, max = 35) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const inputDates = Array.from({ length }, () => {
    const factor = Math.random() > 0.5 ? '/' : '-';

    const dateArray = [
        factor === '-' ? randomNumber() : randomNumber(0, 15),
        factor === '-' ? randomNumber(0, 15) : randomNumber(),
        randomNumber(1900, 2050),
    ].map((x) => x.toString().padStart(2, '0'));
    return dateArray.join(factor);
}).concat(Array.from({ length: 10 }, () => [randomNumber(28, 32), '02', randomNumber(1900, 2050)].join('-')));

function getDates(array, fn) {
    return array.map(stringToArray).filter(fn).sort(sortDatePattern).map(formatDate);
}

function formatDate(array) {
    return array.map(String).map((x, i) => (i === 2 ? x.padStart(4, '0') : x.padStart(2, '0'))).join('-');
}

function sortDatePattern(a, b) {
    let day, month, year;

    [day, month, year] = a;
    const dt1 = new Date(year, month - 1, day).getTime();

    [day, month, year] = b;
    const dt2 = new Date(year, month - 1, day).getTime();

    return dt1 - dt2;
}

function stringToArray(str) {
    let day, month, year;
    if (str.includes('/')) {
        [month, day, year] = str.split('/').map(x => parseInt(x));
    } else if (str.includes('-')) {
        [day, month, year] = str.split('-').map(x => parseInt(x));
    }

    if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
        return null;
    }
    return [day, month, year];
}

function checkCorrectDate(array) {
    if (array === null) {
        return false;
    }

    const [day, month, year] = array

    const LONG_MONTH_ARRAY = [1, 3, 5, 7, 8, 10, 12];

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    // check month
    if (month < 1 || month > 12 || year <= 0) {
        return false;
    }

    // check day
    if (day < 1 || day > 31) {
        return false;
    }

    if (day === 31 && !LONG_MONTH_ARRAY.includes(month)) {
        return false;
    }

    // check February for correct day and leap year
    if (month === 2 && ((day === 29 && !isLeapYear) || day > 29)) {
        return false;
    }
    return true;
}

const res = getDates(inputDates, checkCorrectDate);
console.log(inputDates);
console.log(res); */