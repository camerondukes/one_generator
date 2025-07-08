export function generateUAEEmiratesID() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length: 15 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join('');
}
