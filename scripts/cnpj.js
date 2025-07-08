export function generateCNPJ() {
  // Generate the first 12 digits (base CNPJ)
  const base = [];

  // First 8 digits: root company number (random)
  for (let i = 0; i < 8; i++) {
    base.push(Math.floor(Math.random() * 10));
  }

  // Next 4 digits: branch number, usually '0001' for HQ
  base.push(0, 0, 0, 1);

  // Function to calculate a check digit using weight pattern
  const getCheckDigit = (digits, weights) => {
    const sum = digits.reduce((acc, digit, idx) => acc + digit * weights[idx], 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  // Weights for first check digit (positions 1–12)
  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const firstCheckDigit = getCheckDigit(base, weights1);
  base.push(firstCheckDigit);

  // Weights for second check digit (positions 1–13)
  const weights2 = [6].concat(weights1); // prepend 6
  const secondCheckDigit = getCheckDigit(base, weights2);
  base.push(secondCheckDigit);

  return base.join('');
}
