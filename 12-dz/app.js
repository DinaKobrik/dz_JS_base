function luna(cardNum) {
  const cardMass = cardNum.split("-").join("").split("").map(Number);
  if (cardNum.includes(NaN)) {
    return NaN;
  }
  for (let i = 0; i < cardMass.length; i += 2) {
    cardMass[i] = cardMass[i] > 9 ? (cardMass[i] -= 9) : cardMass[i] * 2;
  }
  const sum = cardMass.reduce((acc, num) => acc + num, 0);
  return sum % 10 === 0;
}

const card = "234s834503458353";
const card1 = "2342834503458353";
const card2 = "4561-2612-1234-5464";
const card3 = "4561-2612-1534-5464";
const card4 = "4567-2378-4309-8740";

function resultTemplate(cardNum) {
  return `Карта с номером: ${cardNum} получила результат: ${luna(cardNum)}`;
}
console.log(resultTemplate(card));
console.log(resultTemplate(card1));
console.log(resultTemplate(card2));
console.log(resultTemplate(card3));
