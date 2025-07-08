// scripts/cep.js

import cepList from './cep_data.js'; // We'll define this next

export function generateCEP(uf = 'random') {
  const states = Object.keys(cepList);

  if (uf === 'random') {
    uf = states[Math.floor(Math.random() * states.length)];
  }

  const ceps = cepList[uf];
  if (!ceps || ceps.length === 0) return '00000000';

  const randomCep = ceps[Math.floor(Math.random() * ceps.length)];
  return randomCep;
}
