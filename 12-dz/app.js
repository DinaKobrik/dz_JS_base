const card = "4567-2378-4309-8740";

function luna(cardNum) {
  const cardMass = cardNum.split("-").join("").split("").map(Number);
  for (let i = 0; i < cardMass.length; i += 2) {
    cardMass[i] = cardMass[i] * 2;
    if (cardMass[i] > 9) {
      cardMass[i] -= 9;
    }
  }
  const sum = cardMass.reduce((acc, num) => acc + num, 0);
  return sum % 10 === 0;
}

console.log(luna(card));
