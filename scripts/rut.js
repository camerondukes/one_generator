function calculateChileRUTCheckDigit(rutBody) {
  const reversed = rutBody.split('').reverse().map(Number);
  const weights = [2, 3, 4, 5, 6, 7];
  const sum = reversed.reduce((acc, digit, i) => acc + digit * weights[i % weights.length], 0);
  const check = 11 - (sum % 11);
  if (check === 11) return '0';
  if (check === 10) return 'K';
  return String(check);
}

export function generateRUT() {
  let body = '';
  let length = Math.random() < 0.5 ? 7 : 8; // body = 7 or 8 digits → +1 check = 8 or 9 total

  do {
    body = Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
  } while (body[0] === '4'); // reject starting with 4

  const checkDigit = calculateChileRUTCheckDigit(body);
  return `${body}${checkDigit}`; // 8 or 9 total characters, no dash
}
