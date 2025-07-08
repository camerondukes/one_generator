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

export function generateCURP({ year, month, day }) {
  // Format date to YYMMDD
  const yy = year.toString().slice(-2).padStart(2, '0');
  const mm = month.toString().padStart(2, '0');
  const dd = day.toString().padStart(2, '0');
  const datePart = `${yy}${mm}${dd}`; // e.g., 900623

  const namePart = getRandomAlpha(4);        // AAAA
  const regionPart = getRandomAlpha(3);      // AAA
  const suffix = getRandomAlphaNumeric(5);   // XXXXX

  return `${namePart}${datePart}${regionPart}${suffix}`;
}
