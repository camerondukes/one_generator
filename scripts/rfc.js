function getRandomAlpha(count) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from({ length: count }, () =>
    letters[Math.floor(Math.random() * letters.length)]
  ).join('');
}

function getRandomAlphaNumeric(count) {
  const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length: count }, () =>
    pool[Math.floor(Math.random() * pool.length)]
  ).join('');
}

export function generateRFC({ year, month, day }) {
  // Ensure all values are strings with leading zeros
  const yy = year.toString().slice(-2).padStart(2, '0');
  const mm = month.toString().padStart(2, '0');
  const dd = day.toString().padStart(2, '0');
  const datePart = yy + mm + dd;

  const namePart = getRandomAlpha(4);
  const suffix = getRandomAlphaNumeric(3);

  return `${namePart}${datePart}${suffix}`;
}
