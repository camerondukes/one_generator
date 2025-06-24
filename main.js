const idGenerators = {
  CPF: (stateDigit) => import('./scripts/cpf.js').then(m => m.generateCPF(stateDigit)),
  CNPJ: () => import('./scripts/cnpj.js').then(m => m.generateCNPJ()),
  CEP: (uf) => import('./scripts/cep.js').then(m => m.generateCEP(uf)),
  Cedula: () => import('./scripts/cedula.js').then(m => m.generateCedula()),
  RUC: () => import('./scripts/ruc.js').then(m => m.generateRUC()),
  FiscalCode: () => import('./scripts/fiscal_code.js').then(m => m.generateFiscalCode())
};

export function handleGenerate(type) {
  const generator = idGenerators[type];
  if (!generator) {
    document.getElementById('output').innerText = `No generator found for ${type}`;
    return;
  }

  if (type === 'CPF') {
    let regionDigit = document.getElementById('cpf-state').value;

    // If "random" is selected, pick a digit 0–9
    if (regionDigit === 'random') {
      regionDigit = Math.floor(Math.random() * 10).toString();
    }

    generator(regionDigit).then(id => {
      document.getElementById('output').innerText = `Generated CPF: ${id}`;
    });
  } else {
    generator().then(id => {
      document.getElementById('output').innerText = `Generated ${type}: ${id}`;
    });
  }

  if (type === 'CEP') {
  let uf = document.getElementById('cep-state').value;
  if (uf === 'random') {
    uf = 'random';
  }
  generator(uf).then(code => {
    document.getElementById('output').innerText = `Generated CEP: ${code}`;
  });
}

}

window.handleGenerate = handleGenerate;
