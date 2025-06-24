function calculateChecksum(firstNine) {
  const weights = [2, 1, 2, 1, 2, 1, 2, 1, 2];
  let total = 0;

  for (let i = 0; i < 9; i++) {
    let product = firstNine[i] * weights[i];
    if (product >= 10) {
      product -= 9;
    }
    total += product;
  }

  const nextTen = Math.ceil(total / 10) * 10;
  return nextTen - total;
}

function generateValidCedula() {
  const firstNine = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
  const checksum = calculateChecksum(firstNine);
  return [...firstNine, checksum].join('');
}

export function generateRUC() {
  const cedula = generateValidCedula();
  return cedula + '001'; // branch code for natural persons
}
