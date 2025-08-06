const idGenerators = {
  CPF: (stateDigit) => import('./scripts/cpf.js').then(m => m.generateCPF(stateDigit)),
  CNPJ: () => import('./scripts/cnpj.js').then(m => m.generateCNPJ()),
  CEP: (uf) => import('./scripts/cep.js').then(m => m.generateCEP(uf)),
  Cedula: () => import('./scripts/cedula.js').then(m => m.generateCedula()),
  RUC: () => import('./scripts/ruc.js').then(m => m.generateRUC()),
  FiscalCode: () => import('./scripts/fiscal_code.js').then(m => m.generateFiscalCode()),
  NID: (options) => import('./scripts/nid.js').then(m => m.generateNID(options)),
  RFC: (dob) => import('./scripts/rfc.js').then(m => m.generateRFC(dob)),
  CURP: (dob) => import('./scripts/curp.js').then(m => m.generateCURP(dob)),
  RUT: () => import('./scripts/rut.js').then(m => m.generateRUT()),
  ColombiaCedula: () => import('./scripts/colombia_cedula.js').then(m => m.generateColombiaCedula()),
  CostaRicaCedula: () => import('./scripts/costa_rica_cedula.js').then(m => m.generateCostaRicaCedula()),
  DIMEX: () => import('./scripts/dimex.js').then(m => m.generateDIMEX()),
  SVPersonalID: () => import('./scripts/el_salvador.js').then(m => m.generatePersonalID()),
  SVBusinessID: () => import('./scripts/el_salvador.js').then(m => m.generateBusinessID()),
  SVTaxID: () => import('./scripts/el_salvador.js').then(m => m.generateTaxID()),
  Aadhaar: () => import('./scripts/india.js').then(m => m.generateAadhaar()),
  PAN: () => import('./scripts/india.js').then(m => m.generatePAN()),
  FHID: () => import('./scripts/india.js').then(m => m.generateFHID()),
  GST: () => import('./scripts/india.js').then(m => m.generateGST()),
  IsraelTaxID: () => import('./scripts/israel_tax_id.js').then(m => m.generateIsraelTaxID()),
  IsraelPostalCode: () => import('./scripts/israel_postal_code.js').then(m => m.generateIsraelPostalCode()),
  JapanPostalCode: () => import('./scripts/japan_postal_code.js').then(m => m.generateJapanPostalCode()),
  MYSGovID: () => import('./scripts/mys_govid.js').then(m => m.generateMYSGovID()),
  AUSABN: () => import('./scripts/aus_abn.js').then(m => m.generateAUSABN()),
  NZLIRD: () => import('./scripts/nzl_ird.js').then(m => m.generateNZLIRD()),
  RUSTIN: () => import('./scripts/rus_ids.js').then(m => m.generateRUSTIN()),
  RUSINN: () => import('./scripts/rus_ids.js').then(m => m.generateRUSINN()),
  SGPNRIC: () => import('./scripts/sgp_ids.js').then(m => m.generateSGPNRIC()),
  SGPUENNine: () => import('./scripts/sgp_ids.js').then(m => m.generateSGPUENNine()),
  SGPUENTen: () => import('./scripts/sgp_ids.js').then(m => m.generateSGPUENTen()),
  SGPUENTenOther: () => import('./scripts/sgp_ids.js').then(m => m.generateSGPUENTenOther()),
  THACitizenID: () => import('./scripts/tha_ids.js').then(m => m.generateTHACitizenID()),
  THATaxID: () => import('./scripts/tha_ids.js').then(m => m.generateTHATaxID()),
  UAEEmiratesID: () => import('./scripts/uae_id.js').then(m => m.generateUAEEmiratesID()),



};

export function handleGenerate(type) {
  // Instantly scroll to the top on-click
  window.scrollTo(0, 0);
  const generatorFn = idGenerators[type];
  const output = document.getElementById('output');

  if (!generatorFn) {
    output.style.color = 'red';
    output.innerText = `No generator found for ${type}`;
    return;
  }

  // Helper to handle promise rejections
  function runGenerator(promise) {
    promise
      .then(id => {
        output.style.color = 'black';
        output.innerText = `Generated ${type}: ${id}`;
      })
      .catch(err => {
        console.error(err);
        output.style.color = 'red';
        output.innerText = 'Whoops, there was an error with that generator! Please try again later';
      });
  }

  try {
    // CPF
    if (type === 'CPF') {
      let regionDigit = document.getElementById('cpf-state').value;
      if (regionDigit === 'random') regionDigit = Math.floor(Math.random() * 10).toString();
      runGenerator(generatorFn(regionDigit));
      return;
    }

    // CEP
    if (type === 'CEP') {
      let uf = document.getElementById('cep-state').value;
      if (uf === 'random') uf = 'random';
      runGenerator(generatorFn(uf));
      return;
    }

    // RFC / CURP
    if (type === 'RFC' || type === 'CURP') {
      const year  = document.getElementById('rfc-year').value;
      const month = document.getElementById('rfc-month').value;
      const day   = document.getElementById('rfc-day').value;
      if (!year || !month || !day) {
        output.style.color = 'red';
        output.innerText = `Need to enter Birthdate to generate ${type}`;
        return;
      }
      runGenerator(generatorFn({ year, month, day }));
      return;
    }

    // Taiwan NID
    if (type === 'NID') {
      const city   = document.getElementById('twn-city')?.value;
      const gender = document.querySelector('input[name="twn-gender"]:checked')?.value;
      if (!city || !gender) {
        output.style.color = 'red';
        output.innerText = 'Please select both city and gender.';
        return;
      }
      runGenerator(generatorFn({ city, gender: parseInt(gender) }));
      return;
    }

    // Fallback for simple generators
    runGenerator(generatorFn());
  } catch (err) {
    // catch any sync errors
    console.error(err);
    output.style.color = 'red';
    output.innerText = 'Whoops, there was an error with that generator! Please try again later';
  }
}

window.handleGenerate = handleGenerate;

