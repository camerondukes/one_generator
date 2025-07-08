function getRandomDigits(count) {
  return Array.from({ length: count }, () => Math.floor(Math.random() * 10)).join('');
}

// TIN: 4 digits + space + 6 digits
export function generateRUSTIN() {
  const region = getRandomDigits(4);
  const regNum = getRandomDigits(6);
  return `${region} ${regNum}`;
}

// INN: 12-digit number
export function generateRUSINN() {
  return getRandomDigits(12);
}
