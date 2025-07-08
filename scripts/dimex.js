export function generateDIMEX() {
  let dimex = '';
  for (let i = 0; i < 12; i++) {
    dimex += Math.floor(Math.random() * 10);
  }
  return dimex;
}
