export function generateNZLIRD() {
  const length = Math.random() < 0.5 ? 8 : 9; // Randomly choose 8 or 9 digits
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
}
