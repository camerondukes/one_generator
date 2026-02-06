function calculateChileRUTCheckDigit(rutBody) {
  const reversed = rutBody.split('').reverse().map(Number);
  const weights = [2, 3, 4, 5, 6, 7];

  const sum = reversed.reduce(
    (acc, digit, i) => acc + digit * weights[i % weights.length],
    0
  );

  const check = 11 - (sum % 11);
  if (check === 11) return '0';
  if (check === 10) return 'K';
  return String(check);
}

export function generateRUT() {
  while (true) {
    // Body length: 7 or 8 → total length 8 or 9
    const bodyLength = Math.random() < 0.5 ? 7 : 8;

    // Force valid leading digit (1 or 2 only)
    const firstDigit = Math.random() < 0.5 ? '1' : '2';
    const rest = Array.from({ length: bodyLength - 1 }, () =>
      Math.floor(Math.random() * 10)
    ).join('');

    const body = firstDigit + rest;

    const dv = calculateChileRUTCheckDigit(body);
    return `${body}${dv}`; // no dash
  }
}
