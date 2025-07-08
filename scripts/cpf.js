export function generateCPF(stateDigit = '0') {
  const getCheckDigit = (digits) => {
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += digits[i] * ((digits.length + 1) - i);
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  // Create first 8 digits randomly
  const base = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10));

  // 9th digit = state digit
  base.push(Number(stateDigit));

  // Calculate check digits
  const firstCheck = getCheckDigit(base);
  base.push(firstCheck);
  const secondCheck = getCheckDigit(base);
  base.push(secondCheck);

  // Return plain numeric CPF as string
  return base.join('');
}

