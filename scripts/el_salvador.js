export function generatePersonalID() {
  return Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join('');
}

export function generateBusinessID() {
  return Array.from({ length: 13 }, () => Math.floor(Math.random() * 10)).join('');
}

export function generateTaxID() {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 10)).join('');
}
