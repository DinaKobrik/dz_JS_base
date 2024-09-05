// d = √((х2 — х1)² + (y2 — y1)²);

const positionLatitude = 10; // Текущая широта
const positionLongitude = 5; // Текущая долгота
const destinationLatitude = 20; // Конечная широта
const destinationLongitude = 15; // Конечная долгота

const canculateDistanse = Math.sqrt((destinationLongitude - positionLongitude) ** 2 + (destinationLatitude - positionLatitude) ** 2);

console.log(`Длина пути составит ${canculateDistanse.toFixed(2)} метров`);