function getRandomDigits(count) {
  return Array.from({ length: count }, () =>
    Math.floor(Math.random() * 10)
  ).join('');
}

// Thai Citizen ID – 13 digits
export function generateTHACitizenID() {
  return getRandomDigits(13);
}

// Thai Tax ID – 10 digits
export function generateTHATaxID() {
  return getRandomDigits(10);
}
