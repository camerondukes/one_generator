export function generateIsraelTaxID() {
  return Array.from({ length: 9 }, () =>
    Math.floor(Math.random() * 10)
  ).join('');
}
