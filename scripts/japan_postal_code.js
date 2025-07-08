import jpnList from './japan_postal_code_data.js';

export function generateJapanPostalCode(uf = 'random') {
  const states = Object.keys(jpnList);

  if (uf === 'random') {
    uf = states[Math.floor(Math.random() * states.length)];
  }

  const jpn = jpnList[uf];
  if (!jpn || jpn.length === 0) return '00000000';

  const randomJPN = jpn[Math.floor(Math.random() * jpn.length)];
  return randomJPN;
}