

const intlLanguage = Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Calcutta' ? 'en-IN' : 'en-US';

function unitChanged(id, error) {
    const unit1 = document.getElementById("units1").value;
    const price1 = document.getElementById("Price1").value;
    const unit2 = document.getElementById("units2").value;
    const price2 = document.getElementById("Price2").value;

    if(unit1 !='' && price1 !='' && unit2 !='' && price2 != '') {
        getAverage();
    }


    if (document.getElementById(id).value != '') {
      document.getElementById(error).innerHTML = '';
      return;
    } else {
      document.getElementById(error).innerHTML = 'Field is Required';
    }
   
  }


  function getAverage() {

    if (document.getElementById("units1").value == '') {
      document.getElementById("error1").innerHTML = "Units required";
      return;
    } else if (document.getElementById("Price1").value == '') {
      document.getElementById("error2").innerHTML = "Price required";
      return;
    } else if (document.getElementById("units2").value == '') {
      document.getElementById("error3").innerHTML = "Units required";
      return;
    } else if (document.getElementById("Price2").value == '') {
      document.getElementById("error4").innerHTML = "Price required";
      return;
    }

    var unit1 = document.getElementById("units1").value;
    var price1 = document.getElementById("Price1").value;
    var unit2 = document.getElementById("units2").value;
    var price2 = document.getElementById("Price2").value;

    var totalAmount = Number(((unit1 * price1) + (unit2 * price2)).toFixed(2));
    var totalUnits = +unit1 + +unit2;
    var averagePrice = Number((((unit1 * price1) + (unit2 * price2)) / totalUnits).toFixed(2));
    document.getElementById("investedamount1").innerHTML ="<span>The amount invested in the 1st purchase: </span>  <span class='unit-amount'>" + (unit1 * price1).toLocaleString(intlLanguage) + "</span>";
    document.getElementById("investedamount2").innerHTML ="<span>The amount invested in the 2nd purchase: </span> <span class='unit-amount'>" + (unit2 * price2).toLocaleString(intlLanguage) + "</span>";
    document.getElementById("result").innerHTML = "<span>Total units </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<bold>"
      + totalUnits + "</bold><br/><br/><span>Average Price</span> &nbsp;&nbsp;&nbsp;<bold>" + averagePrice.toLocaleString(intlLanguage) + "</bold>" 
      + "<br/><br/><span>Total Amount</span> &nbsp;&nbsp;&nbsp;<bold>"
      + totalAmount.toLocaleString(intlLanguage) + "</bold>";
  }

  function updateInput(inputId, sliderId) {
    // Update input value when slider is moved
    var sliderValue = document.getElementById(sliderId).value;
    document.getElementById(inputId).value = sliderValue;
}

  function clearFields() {
    document.getElementById("units1").value = '';
    document.getElementById("Price1").value = '';
    document.getElementById("units2").value = '';
    document.getElementById("Price2").value = '';
    // document.getElementById("slider1").value = 0;
    // document.getElementById("slider2").value = 0;
    document.getElementById("result").innerHTML = '';
    document.getElementById("investedamount1").innerHTML = '';
    document.getElementById("investedamount2").innerHTML = '';
  }


  function activeSection(value) {
      switch(value) {
          case 'ac':
              document.getElementById("average-calculator").classList.remove("hide"); 
              document.getElementById("average-calculator").classList.add("active");

              document.getElementById("sip-calculator").classList.remove("active");
              document.getElementById("sip-calculator").classList.add("hide");

              document.getElementById("percentage-calculator").classList.remove("active");
              document.getElementById("percentage-calculator").classList.add("hide");

              document.getElementById("emi-calculator").classList.remove("active");
              document.getElementById("emi-calculator").classList.add("hide");

              document.getElementById("cagr-calculator").classList.remove("active");
              document.getElementById("cagr-calculator").classList.add("hide");

              document.getElementById("swp-calculator").classList.remove("active");
              document.getElementById("swp-calculator").classList.add("hide");

              document.getElementById("buy-me-a-coffee").classList.remove("active");
              document.getElementById("buy-me-a-coffee").classList.add("hide");

              document.getElementById("ac").classList.add("active");
              document.getElementById("sc").classList.remove("active");
              document.getElementById("pc").classList.remove("active");
              document.getElementById("em").classList.remove("active");
              document.getElementById("cagr").classList.remove("active");
              document.getElementById("swp").classList.remove("active");
              document.getElementById("buymeacoffee").classList.remove("active");
          break;
          case 'sc': 
              document.getElementById("sip-calculator").classList.remove("hide");
              document.getElementById("sip-calculator").classList.add("active");

              document.getElementById("average-calculator").classList.remove("active");
              document.getElementById("average-calculator").classList.add("hide");

              document.getElementById("percentage-calculator").classList.remove("active");
              document.getElementById("percentage-calculator").classList.add("hide");

              document.getElementById("emi-calculator").classList.remove("active");
              document.getElementById("emi-calculator").classList.add("hide");

              document.getElementById("cagr-calculator").classList.remove("active");
              document.getElementById("cagr-calculator").classList.add("hide");

              document.getElementById("swp-calculator").classList.remove("active");
              document.getElementById("swp-calculator").classList.add("hide");

              document.getElementById("buy-me-a-coffee").classList.remove("active");
              document.getElementById("buy-me-a-coffee").classList.add("hide");

              document.getElementById("sc").classList.add("active");
              document.getElementById("ac").classList.remove("active");
              document.getElementById("pc").classList.remove("active");
              document.getElementById("em").classList.remove("active");
              document.getElementById("cagr").classList.remove("active");
              document.getElementById("swp").classList.remove("active");
              document.getElementById("buymeacoffee").classList.remove("active");
          break;
          case 'pc': 
          document.getElementById("percentage-calculator").classList.add("active");
          document.getElementById("percentage-calculator").classList.remove("hide");

          document.getElementById("sip-calculator").classList.remove("active");
          document.getElementById("sip-calculator").classList.add("hide");

          document.getElementById("average-calculator").classList.remove("active");
          document.getElementById("average-calculator").classList.add("hide");

          document.getElementById("emi-calculator").classList.remove("active");
          document.getElementById("emi-calculator").classList.add("hide");

          document.getElementById("cagr-calculator").classList.remove("active");
          document.getElementById("cagr-calculator").classList.add("hide");

          document.getElementById("swp-calculator").classList.remove("active");
          document.getElementById("swp-calculator").classList.add("hide");

          document.getElementById("buy-me-a-coffee").classList.remove("active");
          document.getElementById("buy-me-a-coffee").classList.add("hide");

          document.getElementById("pc").classList.add("active");
          document.getElementById("ac").classList.remove("active");
          document.getElementById("sc").classList.remove("active");
          document.getElementById("em").classList.remove("active");
          document.getElementById("cagr").classList.remove("active");
          document.getElementById("swp").classList.remove("active");
          document.getElementById("buymeacoffee").classList.remove("active");
          break;
          case 'em': 
          document.getElementById("emi-calculator").classList.add("active");
          document.getElementById("emi-calculator").classList.remove("hide");

          document.getElementById("sip-calculator").classList.remove("active");
          document.getElementById("sip-calculator").classList.add("hide");

          document.getElementById("average-calculator").classList.remove("active");
          document.getElementById("average-calculator").classList.add("hide");

          document.getElementById("percentage-calculator").classList.remove("active");
          document.getElementById("percentage-calculator").classList.add("hide");

          document.getElementById("cagr-calculator").classList.remove("active");
          document.getElementById("cagr-calculator").classList.add("hide");

          document.getElementById("swp-calculator").classList.remove("active");
          document.getElementById("swp-calculator").classList.add("hide");

          document.getElementById("buy-me-a-coffee").classList.remove("active");
          document.getElementById("buy-me-a-coffee").classList.add("hide");

          document.getElementById("em").classList.add("active");
          document.getElementById("ac").classList.remove("active");
          document.getElementById("sc").classList.remove("active");
          document.getElementById("pc").classList.remove("active");
          document.getElementById("cagr").classList.remove("active");
          document.getElementById("swp").classList.remove("active");
          document.getElementById("buymeacoffee").classList.remove("active");
          break;
          case 'cagr': 
          document.getElementById("cagr-calculator").classList.add("active");
          document.getElementById("cagr-calculator").classList.remove("hide");

          document.getElementById("sip-calculator").classList.remove("active");
          document.getElementById("sip-calculator").classList.add("hide");

          document.getElementById("average-calculator").classList.remove("active");
          document.getElementById("average-calculator").classList.add("hide");

          document.getElementById("percentage-calculator").classList.remove("active");
          document.getElementById("percentage-calculator").classList.add("hide");

          document.getElementById("emi-calculator").classList.remove("active");
          document.getElementById("emi-calculator").classList.add("hide");

          document.getElementById("swp-calculator").classList.remove("active");
          document.getElementById("swp-calculator").classList.add("hide");

          document.getElementById("buy-me-a-coffee").classList.remove("active");
          document.getElementById("buy-me-a-coffee").classList.add("hide");

          document.getElementById("cagr").classList.add("active");
          document.getElementById("em").classList.remove("active");
          document.getElementById("ac").classList.remove("active");
          document.getElementById("sc").classList.remove("active");
          document.getElementById("pc").classList.remove("active");
          document.getElementById("swp").classList.remove("active");
          document.getElementById("buymeacoffee").classList.remove("active");
          break;
          case 'swp': 
          document.getElementById("swp-calculator").classList.add("active");
          document.getElementById("swp-calculator").classList.remove("hide");

          document.getElementById("sip-calculator").classList.remove("active");
          document.getElementById("sip-calculator").classList.add("hide");

          document.getElementById("average-calculator").classList.remove("active");
          document.getElementById("average-calculator").classList.add("hide");

          document.getElementById("percentage-calculator").classList.remove("active");
          document.getElementById("percentage-calculator").classList.add("hide");

          document.getElementById("emi-calculator").classList.remove("active");
          document.getElementById("emi-calculator").classList.add("hide");

          document.getElementById("cagr-calculator").classList.remove("active");
          document.getElementById("cagr-calculator").classList.add("hide");

          document.getElementById("buy-me-a-coffee").classList.remove("active");
          document.getElementById("buy-me-a-coffee").classList.add("hide");

          document.getElementById("swp").classList.add("active");
          document.getElementById("em").classList.remove("active");
          document.getElementById("ac").classList.remove("active");
          document.getElementById("sc").classList.remove("active");
          document.getElementById("pc").classList.remove("active");
          document.getElementById("cagr").classList.remove("active");
          document.getElementById("buymeacoffee").classList.remove("active");
          break;
          case 'buymeacoffee': 
          document.getElementById("buy-me-a-coffee").classList.add("active");
          document.getElementById("buy-me-a-coffee").classList.remove("hide");

          document.getElementById("sip-calculator").classList.remove("active");
          document.getElementById("sip-calculator").classList.add("hide");

          document.getElementById("average-calculator").classList.remove("active");
          document.getElementById("average-calculator").classList.add("hide");

          document.getElementById("percentage-calculator").classList.remove("active");
          document.getElementById("percentage-calculator").classList.add("hide");

          document.getElementById("emi-calculator").classList.remove("active");
          document.getElementById("emi-calculator").classList.add("hide");

          document.getElementById("cagr-calculator").classList.remove("active");
          document.getElementById("cagr-calculator").classList.add("hide");

          document.getElementById("swp-calculator").classList.remove("active");
          document.getElementById("swp-calculator").classList.add("hide");

          document.getElementById("buymeacoffee").classList.add("active");
          document.getElementById("em").classList.remove("active");
          document.getElementById("ac").classList.remove("active");
          document.getElementById("sc").classList.remove("active");
          document.getElementById("pc").classList.remove("active");
          document.getElementById("cagr").classList.remove("active");
          document.getElementById("swp").classList.remove("active");
      break;
          default: break;
      }

      if (isMobile() || window.innerWidth < 768) {
        var sidebar = document.getElementById('sidebar');
        sidebar.style.left = '-500px';
      } 
  }

  function sipCalculator() {
      var investment = parseInt(document.getElementById("investment").value); 
      var rateOfInterest = parseInt(document.getElementById("rateOfInterest").value);
      var years = parseInt(document.getElementById("years").value);
      var monthlyRate = rateOfInterest/12/100;	
      var months= years*12;
      var totalGain = (investment *(Math.pow((1 + monthlyRate), months) - 1)/monthlyRate *(1+monthlyRate));	
      if(investment && rateOfInterest && years) {
          document.getElementById("im").innerHTML = Number((investment * months).toFixed(2)).toLocaleString(intlLanguage);	
          document.getElementById("tm").innerHTML = Number(totalGain.toFixed(2)).toLocaleString(intlLanguage);
          document.getElementById("gm").innerHTML = Number((totalGain - (investment * months)).toFixed(2)).toLocaleString(intlLanguage) ;
      }
      }

function clearFields1() {
    document.getElementById("investment").value = '';
    document.getElementById("rateOfInterest").value = '';
    document.getElementById("years").value = '';
    document.getElementById("tm").innerHTML = '0';
    document.getElementById("im").innerHTML = '0';
    document.getElementById("gm").innerHTML = '0';
  }

  function clearFields2() {
    document.getElementById("loanAmount").value = '';
    document.getElementById("interestRate").value = '';
    document.getElementById("loanTerm").value = '';
    document.getElementById("total-emi").innerHTML = '0';
  }

  function clearFields3() {
    document.getElementById("initialValue").value = '';
    document.getElementById("finalValue").value = '';
    document.getElementById("cagryears").value = '';
    document.getElementById("cagr-result").innerHTML = '0';
  } 

  function clearFields4() {
    document.getElementById("swpInvestment").value = '';
    document.getElementById("monthlyWithdrawal").value = '';
    document.getElementById("annualInterestRate").value = '';
    document.getElementById("swpMonths").value = '';
    document.getElementById("swp-result").innerHTML = '0';
  } 

  function checkPercentage() {
	let num = Number(document.getElementById("percentageNumber").value);
	let percent = Number(document.getElementById("percentage").value);
	let result = document.getElementById("percentageResult");

	if (num == '' || percent == '' || num == 0 || percent == 0) {
		return;
	}

	let finalNum = (num/100) * percent;

	result.innerHTML = percent + " Percentage(%) of " + num + " is = " + finalNum.toFixed(2);
}



function calculateEMI() {
  var loanAmount = document.getElementById('loanAmount').value;
  var interestRate = document.getElementById('interestRate').value / 100 / 12; // Monthly interest rate
  var loanTerm = document.getElementById('loanTerm').value;

  // EMI calculation formulacagr-calcultorclearFields3
  var emi = loanAmount * interestRate * Math.pow((1 + interestRate), loanTerm) / (Math.pow((1 + interestRate), loanTerm) - 1);

  var resultElement = document.getElementById('total-emi');
  if(loanAmount && interestRate && loanTerm) {
    resultElement.textContent = '' + Number(emi.toFixed(2)).toLocaleString(intlLanguage) + ' per month';
  }

}

function calculateCAGR() {
  var initialValue = parseFloat(document.getElementById('initialValue').value);
  var finalValue = parseFloat(document.getElementById('finalValue').value);
  var years = parseFloat(document.getElementById('cagryears').value);

  if (isNaN(initialValue) || isNaN(finalValue) || isNaN(years)) {
    // alert('Please enter valid values for all fields.');
    return;
  }

  var cagr = ((finalValue / initialValue) ** (1 / years)) - 1;
  var cagrPercentage = cagr * 100;

  document.getElementById('cagr-result').innerHTML = cagrPercentage.toFixed(2) + '%';
}

function calculateSWP() {
  var initialValue = parseFloat(document.getElementById('swpInvestment').value);
  var monthlyWithdrawal = parseFloat(document.getElementById('monthlyWithdrawal').value);
  var annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
  var months = parseFloat(document.getElementById('swpMonths').value);

  if (isNaN(initialValue) || isNaN(monthlyWithdrawal) || isNaN(annualInterestRate) || isNaN(months)) {
    // alert('Please enter valid values for all fields.');
    return;
  }

  var monthlyInterestRate = annualInterestRate / (12 * 100);
  var finalValue = initialValue;
  var totalWithdrawn = 0;

  for (var i = 0; i < months; i++) {
    finalValue = finalValue * (1 + monthlyInterestRate) - monthlyWithdrawal;
    totalWithdrawn += monthlyWithdrawal;
  }

  document.getElementById('swp-result').innerHTML = 'Final value after ' + months + ' Months: ' + finalValue.toFixed(2) + '<br/>' +
                                                 '<p>Total amount withdrawn: ' + totalWithdrawn.toFixed(2) + '</p>';
}

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var meridiem = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zero if needed
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  var timeString = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;

  if(document.getElementById('clock')) {
    document.getElementById('clock').innerText = timeString;
  }
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
// updateClock();

document.getElementById('toggle-btn').addEventListener('click', function () { 
  var sidebar = document.getElementById('sidebar');
  if(sidebar.style.left != '0px') {
      sidebar.style.left = '0px';
  } else {
    sidebar.style.left = '-500px';
  }
    

});

function isMobile() {
  return /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Example usage:
