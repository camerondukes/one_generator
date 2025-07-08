function getRandomLetter() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomDigits(count) {
  let digits = '';
  for (let i = 0; i < count; i++) {
    digits += Math.floor(Math.random() * 10);
  }
  return digits;
}

export function generateNID() {
  const letter = getRandomLetter();        // Region code (A)
  const numbers = getRandomDigits(9);      // 9-digit personal code
  return letter + numbers;
}