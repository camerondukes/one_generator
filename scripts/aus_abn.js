export function generateAUSABN() {
  return Array.from({ length: 11 }, () => Math.floor(Math.random() * 10)).join('');
}
