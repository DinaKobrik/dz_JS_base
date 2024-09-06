function convector(sum, sourceCurrency, targetCurrency) {
  if (sourceCurrency === "rub" && targetCurrency === "eur") {
    return `${sum / 97} евро`;
  } else if (sourceCurrency === "rub" && targetCurrency === "usd") {
    return `${sum / 88} долларов`;
  } else if (sourceCurrency === "eur" && targetCurrency === "usd") {
    return `${sum * 1.1} долларов`;
  } else if (sourceCurrency === "eur" && targetCurrency === "rub") {
    return `${sum * 97} рублей`;
  } else if (sourceCurrency === "usd" && targetCurrency === "eur") {
    return `${sum / 1.1} евро`;
  } else if (sourceCurrency === "usd" && targetCurrency === "rub") {
    return `${sum * 88} рублей`;
  } else {
    return null;
  }
}

console.log(convector(8, "eur", "rub"));
