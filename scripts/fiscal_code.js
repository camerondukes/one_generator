function getRandomAlpha() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomNumeric() {
  return Math.floor(Math.random() * 10).toString();
}

function getRandomAlphaNumeric() {
  const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return pool[Math.floor(Math.random() * pool.length)];
}

export function generateFiscalCode() {
  let code = '';

  // AAAAAA
  for (let i = 0; i < 6; i++) code += getRandomAlpha();

  // NN
  for (let i = 0; i < 2; i++) code += getRandomNumeric();

  // A
  code += getRandomAlpha();

  // NN
  for (let i = 0; i < 2; i++) code += getRandomNumeric();

  // A
  code += getRandomAlpha();

  // XXX
  for (let i = 0; i < 3; i++) code += getRandomAlphaNumeric();

  // A
  code += getRandomAlpha();

  return code;
}
