export function generateIsraelPostalCode() {
  const code = Math.floor(Math.random() * 10000000); // 0 to 9999999
  return code.toString().padStart(7, '0');
}
