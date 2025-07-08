export function generateMYSGovID() {
  return Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join('');
}