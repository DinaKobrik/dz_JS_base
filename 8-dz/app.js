

function crypto(password) {
const passwordMass = password.split('');
const passwordMassRe = passwordMass.reverse();
const [one, two, ...others] = passwordMassRe;
const cryptoMass = [others, one, two];
const cryptoStrong = cryptoMass.join('');
const cryptoPasswordMass = cryptoStrong.split(',');
const cryptoPassword = cryptoPasswordMass.join('');
return cryptoPassword;
}

console.log(crypto('password'));

function check(cipher, password) {
const cipherMass = cipher.split('');
const cipherMassRe = cipherMass.reverse();
const [one, two, ...others] = cipherMassRe;
const passwordMass = [others, one, two];
const passwordNew = passwordMass.join('');
const passwordNewMass = passwordNew.split(',');
const passwordStrong = passwordNewMass.join('');
return (passwordStrong === password);
}

console.log(check('owssapdr', 'password'));