const cityCodes = {
  A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, G: 16, H: 17,
  I: 34, J: 18, K: 19, L: 20, M: 21, N: 22, O: 35, P: 23,
  Q: 24, R: 25, S: 26, T: 27, U: 28, V: 29, W: 32, X: 30,
  Y: 31, Z: 33
};

function calculateTWChecksum(letter, digits) {
  const city = cityCodes[letter.toUpperCase()];
  const d1 = Math.floor(city / 10);
  const d2 = city % 10;

  const weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const allDigits = [d1, d2, ...digits.slice(0, 8)];

  const sum = allDigits.reduce((acc, digit, idx) => acc + digit * weights[idx], 0);
  return (10 - (sum % 10)) % 10;
}

export function generateNID({ city, gender }) {
  // Validate inputs
  if (!city || !cityCodes[city]) {
    throw new Error('Invalid city code');
  }
  if (gender !== 1 && gender !== 2) {
    throw new Error('Invalid gender');
  }

  // Generate 7 random digits after gender
  const serial = Array.from({ length: 7 }, () => Math.floor(Math.random() * 10));

  // Calculate the check digit
  const checksum = calculateTWChecksum(city, [gender, ...serial]);

  return `${city}${gender}${serial.join('')}${checksum}`;
}
