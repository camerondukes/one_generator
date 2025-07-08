export function generateCedula() {
  // Step 1: Generate the first 9 digits
  const firstNine = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));

  // Step 2: Apply the weights and calculate total
  const weights = [2, 1, 2, 1, 2, 1, 2, 1, 2];
  let total = 0;

  for (let i = 0; i < 9; i++) {
    let product = firstNine[i] * weights[i];
    if (product >= 10) {
      product -= 9;
    }
    total += product;
  }

  // Step 3: Calculate the checksum (10th digit)
  const nextTen = Math.ceil(total / 10) * 10;
  const checksum = nextTen - total;

  // Step 4: Join and return as a string
  return [...firstNine, checksum].join('');
}
