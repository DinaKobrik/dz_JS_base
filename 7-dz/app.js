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


// Второе решение

function converter(sum, currency, targetCurrency) {
  const USD = 90;
  const EUR = 100;

  currency = currency.toUpperCase();
  targetCurrency = targetCurrency.toUpperCase();

  switch (currency) {
      case 'USD':
          switch (targetCurrency) {
              case 'RUB':
                  return sum * USD;
              case 'EUR':
                  return (sum * USD) / EUR;
              default:
                  return null;
          }
      case 'EUR':
          switch (targetCurrency) {
              case 'RUB':
                  return sum * EUR;
              case 'USD':
                  return (sum * EUR) / USD;
              default:
                  return null;
          }
      case 'RUB':
          switch (targetCurrency) {
              case 'USD':
                  return sum / USD;
              case 'EUR':
                  return sum / EUR;
              default:
                  return null;
          }
      default:
          return null;
  }
}


// Третье решение

function convertSum(sum, from, to) {
  return ((sum * from) / to).toFixed(2);
}

function getTargetCurrencyIcon(targetCurrency) {
      switch (targetCurrency) {
          case 'RUB':
              return 'руб';
          case 'EUR':
              return '€';
          case 'USD':
              return '$';
          default: return '';
      }
}

function messageTemplate(value, icon){
  return `${value} ${icon}`;
}

function converter(sum, currency, targetCurrency) {
  const ALLOW_CURRENCY_LIST = ['RUB', 'EUR', 'USD'];
  const USD = 91.33;
  const RUB = 1;
  const EUR = 112.33;

  currency = currency.toUpperCase();
  targetCurrency = targetCurrency.toUpperCase();
  const icon = getTargetCurrencyIcon(targetCurrency);

  if (currency === targetCurrency) {
      return messageTemplate(sum, icon);
  }
  if (!ALLOW_CURRENCY_LIST.includes(currency)) {
      console.log('Входящая валюта мне неизвестна');
      return null;
  }
  if (!ALLOW_CURRENCY_LIST.includes(targetCurrency)) {
      console.log('Исходящая валюта мне неизвестна');
      return null;
  }
  
  let value = null;

  switch (currency) {
      case 'USD':
          switch (targetCurrency) {
              case 'RUB': value = convertSum(sum, USD, RUB); break;
              case 'EUR': value = convertSum(sum, USD, EUR); break;
          }; break;
      case 'RUB':
          switch (targetCurrency) {
              case 'USD': value = convertSum(sum, RUB, USD); break;
              case 'EUR': value = convertSum(sum, RUB, EUR); break;
          }; break;
      case 'EUR':
          switch (targetCurrency) {
              case 'RUB': value = convertSum(sum, EUR, RUB); break;
              case 'USD': value = convertSum(sum, EUR, USD); break;
          }; break;
  }

  return messageTemplate(value, icon)
}

// Четвертое решение

function convertSum(sum, from, to) {
  return ((sum * from) / to).toFixed(2);
}

function getTargetCurrencyIcon(targetCurrency) {
      switch (targetCurrency) {
          case 'RUB':
              return 'руб';
          case 'EUR':
              return '€';
          case 'USD':
              return '$';
          default: return '';
      }
}

function messageTemplate(value, icon){
  return `${value} ${icon}`;
}

function converter(sum, currency, targetCurrency) {
  const ALLOW_CURRENCY_LIST = [['RUB', 1], ['EUR', 112.33], ['USD', 91.33]];
  const flatList = ALLOW_CURRENCY_LIST.flat();
  currency = currency.toUpperCase();
  targetCurrency = targetCurrency.toUpperCase();

  if (!flatList.includes(currency)) {
      console.log('Входящая валюта мне неизвестна');
      return null;
  }
  if (!flatList.includes(targetCurrency)) {
      console.log('Исходящая валюта мне неизвестна');
      return null;
  }
  const icon = getTargetCurrencyIcon(targetCurrency);
  if (currency === targetCurrency) {
      return messageTemplate(sum, icon);
  }

  const currentIndex = flatList.indexOf(currency) / 2;
  const targetIndex = flatList.indexOf(targetCurrency) / 2;
  const [, currentValue] = ALLOW_CURRENCY_LIST[currentIndex];
  const [, targetValue] = ALLOW_CURRENCY_LIST[targetIndex];
  const result = convertSum(sum, currentValue, targetValue)
  return messageTemplate(result, icon);
}
