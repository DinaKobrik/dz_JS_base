const hasLicence = false;
const age = 23;
const isDrunk = false;

const canDrive = (age >= 18) && hasLicence && !isDrunk;

console.log(`Может водить автомобиль: ${canDrive ? 'может' : 'не может'} `)