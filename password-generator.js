const genPassword = require('generate-password');

function genRandomPassword() {
  const password = genPassword.generate({
    length: 8,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true
  });

  console.log(password);
}

genRandomPassword();
