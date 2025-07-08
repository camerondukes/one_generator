export function generateColombiaCedula() {
  const length = Math.floor(Math.random() * 5) + 6; // 6 to 10 digits
  let cedula = '';

  for (let i = 0; i < length; i++) {
    cedula += Math.floor(Math.random() * 10);
  }

  return cedula;
}