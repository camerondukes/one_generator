export function generateCostaRicaCedula() {
  let cedula = '';
  for (let i = 0; i < 9; i++) {
    cedula += Math.floor(Math.random() * 10);
  }
  return cedula;
}
