function getRandomAlpha(count) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from({ length: count }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join('');
}

function getRandomDigits(count) {
  return Array.from({ length: count }, () =>
    Math.floor(Math.random() * 10)
  ).join('');
}

// Aadhaar: 12-digit numeric
export function generateAadhaar() {
  return getRandomDigits(12);
}

// PAN: AAAAANNNNA
export function generatePAN() {
  return getRandomAlpha(5) + getRandomDigits(4) + getRandomAlpha(1);
}

// FHID: 17-digit numeric
export function generateFHID() {
  return getRandomDigits(17);
}

// GST: 15-digit numeric
export function generateGST() {
  return getRandomDigits(15);
}
