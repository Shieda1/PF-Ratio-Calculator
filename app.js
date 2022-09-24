// https://www.omnicalculator.com/health/pao2-fio2-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const paO2FiO2ratioRadio = document.getElementById('paO2FiO2ratioRadio');
const paO2Radio = document.getElementById('paO2Radio');
const fiO2Radio = document.getElementById('fiO2Radio');

let paO2FiO2ratio;
let paO2 = v1;
let fiO2 = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

paO2FiO2ratioRadio.addEventListener('click', function() {
  variable1.textContent = 'PaO₂';
  variable2.textContent = 'FiO₂';
  paO2 = v1;
  fiO2 = v2;
  result.textContent = '';
});

paO2Radio.addEventListener('click', function() {
  variable1.textContent = 'PaO₂/FiO₂ ratio';
  variable2.textContent = 'FiO₂';
  paO2FiO2ratio = v1;
  fiO2 = v2;
  result.textContent = '';
});

fiO2Radio.addEventListener('click', function() {
  variable1.textContent = 'PaO₂/FiO₂ ratio';
  variable2.textContent = 'PaO₂';
  paO2FiO2ratio = v1;
  paO2 = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(paO2FiO2ratioRadio.checked)
    result.textContent = `PaO₂/FiO₂ ratio = ${computepaO2FiO2ratio().toFixed(2)}`;

  else if(paO2Radio.checked)
    result.textContent = `PaO₂ = ${computepaO2().toFixed(2)}`;

  else if(fiO2Radio.checked)
    result.textContent = `FiO₂ = ${computefiO2().toFixed(2)}`;
})

// calculation

function computepaO2FiO2ratio() {
  return (Number(paO2.value) / Number(fiO2.value)) * 100;
}

function computepaO2() {
  return (Number(paO2FiO2ratio.value) / 100) * Number(fiO2.value);
}

function computefiO2() {
  return Number(paO2.value) / (Number(paO2FiO2ratio.value) / 100);
}