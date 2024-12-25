

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

   // Get all anchor elements with class 'link'
  //  var links = document.querySelectorAll('.link');

  //  // Loop through each link and attach event listener
  //  links.forEach(function(link) {
  //    link.addEventListener('click', function(event) {
  //      // Prevent the default action (routing to the href)
  //      event.preventDefault();

  //      // Your custom logic here
  //      console.log('Anchor link clicked, but default routing prevented.');
  //    });
  //  });


  function activeSection(value) {
      if (isMobile() || window.innerWidth < 768) {
        var sidebar = document.getElementById('sidebar');
        sidebar.style.left = '-500px';
      } 
  }

  function sipCalculator() {
      var investment = parseInt(document.getElementById("investment").value); 
      var rateOfInterest = parseInt(document.getElementById("rateOfInterest").value);
      var years = parseInt(document.getElementById("years").value);
      var rateIncrease = parseInt(document.getElementById("rateIncrease").value);

      var monthlyRate = rateOfInterest/12/100;	
      var totalMonths= years*12;
      var futureValue = 0;
      var totalInvestment = 0;
      var currentAmount = investment;
      rateIncrease = rateIncrease ? rateIncrease : 0;

      for (var i = 0; i < totalMonths; i++) {
          futureValue += currentAmount;
          totalInvestment += currentAmount;
          futureValue *= (1 + monthlyRate);
          if ((i + 1) % 12 == 0) {
              currentAmount *= (1 + (rateIncrease / 100));
          }
      }
      var totalProfit = futureValue - totalInvestment;
      if(investment && rateOfInterest && years) {
          document.getElementById("im").innerHTML = Number((totalInvestment).toFixed(2)).toLocaleString(intlLanguage);	
          document.getElementById("tm").innerHTML = Number(futureValue.toFixed(2)).toLocaleString(intlLanguage);
          document.getElementById("gm").innerHTML = Number(totalProfit.toFixed(2)).toLocaleString(intlLanguage) ;
          if(sipChart) {
            sipChart.destroy();
          }
          getSipChart(futureValue.toFixed(2), totalInvestment.toFixed(2), totalProfit.toFixed(2));
      }
      }

      function getSipChart(t, i, g) {
        var ctx = document.getElementById('sipChart');
        sipChart = new Chart(ctx, {
          type: 'pie',
          responsive: true,
          data: {
            labels: ['Expected Amount', 'Amount Invested', 'Total Gain'],
            datasets: [{
              label: 'SIP',
              data: [t, i, g],
              borderWidth: 1
            }]
          }
        });
      }

function clearFields1() {
    document.getElementById("investment").value = '';
    document.getElementById("rateOfInterest").value = '';
    document.getElementById("rateIncrease").value = '';
    document.getElementById("years").value = '';
    document.getElementById("tm").innerHTML = '0';
    document.getElementById("im").innerHTML = '0';
    document.getElementById("gm").innerHTML = '0';
    if(sipChart) {
      sipChart.destroy();
    }
  }

  function clearFields2() {
    document.getElementById("loanAmount").value = '';
    document.getElementById("interestRate").value = '';
    document.getElementById("loanTerm").value = '';
    document.getElementById("total-emi").innerHTML = '0';
    document.getElementById("total-principal").innerHTML = 0;
    document.getElementById("total-interest").innerHTML = 0;
    document.getElementById("total-amount").innerHTML = 0;
    if(emiChart) {
      emiChart.destroy();
    }

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



var emiChart,sipChart;
function calculateEMI() {
  let loanAmount = Number(document.getElementById('loanAmount').value);
  let interestRate = Number(document.getElementById('interestRate').value / 100 / 12); // Monthly interest rate
  let loanTerm = Number(document.getElementById('loanTerm').value);

  // EMI calculation formulacagr-calcultorclearFields3
  let emi = loanAmount * interestRate * Math.pow((1 + interestRate), loanTerm) / (Math.pow((1 + interestRate), loanTerm) - 1);
  let totalInterest = (emi*loanTerm) - loanAmount;
  let totalPayment = totalInterest + loanAmount;

  if(loanAmount && interestRate && loanTerm) {
    document.getElementById('total-principal').textContent = '' + Number(loanAmount.toFixed(0)).toLocaleString(intlLanguage);
    document.getElementById('total-emi').textContent = '' + Number(emi.toFixed(0)).toLocaleString(intlLanguage);
    document.getElementById('total-amount').textContent = '' + Number(totalPayment.toFixed(0)).toLocaleString(intlLanguage);
    document.getElementById('total-interest').textContent = '' + Number(totalInterest.toFixed(0)).toLocaleString(intlLanguage);
    if(emiChart) {
      emiChart.destroy();
    }
    getChart(loanAmount, totalInterest, totalPayment);
  }

}

function getChart(p, i, t) {
  var ctx = document.getElementById('myChart');
  emiChart = new Chart(ctx, {
    type: 'pie',
    responsive: true,
    data: {
      labels: ['Principal', 'Total Interest', 'Total Amount'],
      datasets: [{
        label: 'Loan breakup',
        data: [p, i, t],
        borderWidth: 1
      }]
    }
  });
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

  // Function to toggle dark mode
  function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');

    // Save mode preference to local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check if dark mode preference is saved in local storage
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    document.querySelector('body').classList.add('dark-mode');
    document.getElementById('darkModeSwitch').checked = true;
}

if(document.getElementById('darkModeSwitch')) {
document.getElementById('darkModeSwitch').addEventListener('change', toggleDarkMode);
}

function openPhonePe() {
  // Deep link to open PhonePe app
  window.location.href = 'phonepe://pay?pa=9008182348@ybl';
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard: ' + text);
      // You can also show a success message here if needed
    })
    .catch(err => {
      console.error('Unable to copy text to clipboard: ', err);
      // Handle errors, such as browser not supporting clipboard API
    });
}

// function openGooglePay() {
//   // Deep link to open Google Pay (Tez) app
//   window.location.href = 'upi://pay?pa=1rn10mca31@okhdfcbank&cu=INR';
// }

async function loadContentBasedOnCountry() {
  try {

      const userCountry = Intl.DateTimeFormat().resolvedOptions().timeZone; // e.g., "India", "Australia"


      // Dynamically add a class based on the country
      if (userCountry === 'Asia/Calcutta') {
          const elms = document.querySelectorAll("[id='show-ads-world-content']");
          for(var i = 0; i < elms.length; i++) {
            elms[i].classList.add('hide-world-content');
          }
      } else if (userCountry != 'Asia/Calcutta') {
        const elms = document.querySelectorAll("[id='show-ads-india-content']");
        for(var i = 0; i < elms.length; i++) {
          elms[i].classList.add('hide-india-content');
        }
      }
  } catch (error) {
      console.error('Error fetching location:', error);
  }
}

// Call the function
loadContentBasedOnCountry();

    // Load the snippet dynamically
    const loadSnippet = async (url, targetElementId) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch snippet: ${response.statusText}`);
        }
        const html = await response.text();
        document.getElementById(targetElementId).innerHTML = html;
      } catch (error) {
        console.error(error);
        document.getElementById(targetElementId).innerText = "Error loading content.";
      }
    };

    // Load the snippet into the specified container
    loadSnippet('menu.html', 'load-menu-dynamically');