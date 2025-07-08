function getRandomAlpha(count) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from({ length: count }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join('');
}

function getRandomAlphaNumeric(count) {
  const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length: count }, () =>
    pool[Math.floor(Math.random() * pool.length)]
  ).join('');
}

function getRandomDigits(count) {
  return Array.from({ length: count }, () =>
    Math.floor(Math.random() * 10)
  ).join('');
}

// NRIC or PRID
export function generateSGPNRIC() {
  const prefix = ['S', 'T', 'F', 'G'][Math.floor(Math.random() * 4)];
  const digits = getRandomDigits(7);
  const suffix = getRandomAlpha(1);
  return `${prefix}${digits}${suffix}`;
}

export function generateSGPUENNine() {
  return getRandomDigits(8) + getRandomAlphaNumeric(1);
}

export function generateSGPUENTen() {
  return getRandomDigits(10) + getRandomAlphaNumeric(1);
}

export function generateSGPUENTenOther() {
  return getRandomAlphaNumeric(10);
}
