window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").placeholder = 'Amount for loan: 200000'
  document.getElementById("loan-years").placeholder = 'Years of loan: 12'
  document.getElementById("loan-rate").placeholder = 'Yearly loan rate: 6'
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let v = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(v));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let amo = values['amount'];
  let n = 12 * values['years'];

  try{
    errAttempt(values['rate'])
  } catch(e){
    console.error(e)
  }

  let r = (values['rate']/100) / 12;

  const beforeInt = amo * r;
  const monthInt = 1 - ((1+r)**-n);

  const finMonPay = beforeInt / monthInt;

  let expandPau = finMonPay.toFixed(2);

  return expandPau;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerHTML = `$${monthly}`
  return monthly
}


function errAttempt(rate){
  if(rate === NaN) throw 'Remove percent sign please'
  if(rate <= 0.5) throw 'Number as a percentage without percent sign please'
}