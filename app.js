'use strict';

const totalBill = document.querySelector('.total-bill');
//buttons
const fivePor = document.querySelector('.one');
const teenPor = document.querySelector('.two');
const fiveTeenPor = document.querySelector('.three');
const twentyFivePor = document.querySelector('.four');
const fiftyPor = document.querySelector('.five');
const customPor = document.querySelector('.six');
const btns = document.querySelectorAll('.tip-porcentache');
//num of people
const people = document.querySelector('.people');
//result
const tipAmount = document.querySelector('.amount');
const tPerson = document.querySelector('.total');
//reset
const reset = document.querySelector('.reset');

//buttons activation
const btnDeactivated = function () {
  btns.forEach(btn => {
    btn.classList.remove('activated');
  });
};

btns.forEach(btn => {
  btn.addEventListener('click', function () {
    btnDeactivated();
    btn.classList.add('activated');
    customPor.value = '';
    tipCalculator();
  });
});

//call app
customPor.addEventListener('keyup', function () {
  tipCalculator();
});
people.addEventListener('keyup', function () {
  tipCalculator();
});
totalBill.addEventListener('keyup', function () {
  tipCalculator();
});

//set empty values
customPor.addEventListener('click', function () {
  customPor.value = '';
});
people.addEventListener('click', function () {
  people.value = '';
});
totalBill.addEventListener('click', function () {
  totalBill.value = '';
});

// app
const tipCalculator = function () {
  const bill = Number(totalBill.value);
  let numPeople = Number(people.value);
  const tipPorcentache = Number(
    document.querySelector('.activated').value / 100
  );
  if (isNaN(tipPorcentache)) {
    return;
  }
  if (numPeople === 0) numPeople = 1;

  const tipAmountPerson = (bill * tipPorcentache) / numPeople;
  tipAmount.textContent = '$' + tipAmountPerson.toFixed(2);

  const totalPerson = (bill + tipAmountPerson * numPeople) / numPeople;
  tPerson.textContent = '$' + totalPerson.toFixed(2);
};

/// Reset Button
reset.addEventListener('click', function () {
  customPor.value = '';
  people.value = '';
  totalBill.value = '';
  tipAmount.textContent = '$0.00';
  tPerson.textContent = '$0.00';
});
