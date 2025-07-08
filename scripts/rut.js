function calculateCheckDigit(number) {
  const digits = number.toString().split('').reverse();
  const multipliers = [2, 3, 4, 5, 6, 7];

  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i], 10) * multipliers[i % multipliers.length];
  }

  const remainder = 11 - (sum % 11);
  if (remainder === 11) return '0';
  if (remainder === 10) return 'K';
  return remainder.toString();
}

export function generateRUT() {
  const base = Math.floor(1000000 + Math.random() * 90000000); // 7–8 digits
  const checkDigit = calculateCheckDigit(base);
  return `${base}-${checkDigit}`;
}
