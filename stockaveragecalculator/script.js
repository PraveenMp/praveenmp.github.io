

const intlLanguage = Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Calcutta' ? 'en-IN' : 'en-US';

// Add hide class for error-msg element

function calculateProfit() {
  let quantity = parseFloat(document.getElementById('quantity').value);
  let buyPrice = parseFloat(document.getElementById('buyPrice').value);
  let sellPrice = parseFloat(document.getElementById('sellPrice').value);
  let sellQuantity = parseFloat(document.getElementById('sellQuantity').value);

  if (isNaN(quantity) || isNaN(buyPrice) || isNaN(sellPrice) || isNaN(sellQuantity)) {
    document.getElementById('stock-profit').innerHTML = "";
    return;
  }

  if (quantity < sellQuantity) {
    document.getElementById('sell-quantity-error').classList.remove('hide');
    document.getElementById('sell-quantity-error').classList.add('show');
    return;
  } else {
    document.getElementById('sell-quantity-error').classList.add('hide');
    document.getElementById('sell-quantity-error').classList.remove('show');
  }

  let profitPerShare = sellPrice - buyPrice;
  let totalProfit = profitPerShare * sellQuantity;
  let remainingShares = quantity - sellQuantity;
  let remainingAmount = remainingShares * sellPrice;
  let totalOwnedValue = quantity * sellPrice;
  let totalSoldValue = sellQuantity * sellPrice;
  let initialPurchaseValue = quantity * buyPrice;

  let profitOrLossText = totalProfit >= 0
    ? `<span class="text-success">Total Profit: ${profitPerShare} * ${sellQuantity} = ${totalProfit}</span>`
    : `<span class="text-danger">Total Loss: ${profitPerShare} * ${sellQuantity} = ${Math.abs(totalProfit)}</span>`;

  let tableHTML = `
    <table class="stock-profit-table table table-bordered table-striped mt-3">
      <thead class="thead-light">
        <tr>
          <th>Description</th>
          <th>Calculation</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Initial Purchase Value</td>
          <td>${quantity} * ${buyPrice}</td>
          <td><b>${initialPurchaseValue.toLocaleString(intlLanguage)}</b></td>
        </tr>
        <tr>
          <td>Current Shares Value</td>
          <td>${quantity} * ${sellPrice}</td>
          <td><b>${totalOwnedValue.toLocaleString(intlLanguage)}</b></td>
        </tr>
        <tr>
          <td>Current Sale Value</td>
          <td>${sellQuantity} * ${sellPrice}</td>
          <td><b>${totalSoldValue.toLocaleString(intlLanguage)}</b></td>
        </tr>
        <tr>
          <td>Remaining Shares Value</td>
          <td>${remainingShares} * ${sellPrice}</td>
          <td><b>${remainingAmount.toLocaleString(intlLanguage)}</b></td>
        </tr>
        <tr>
          <td><b>Profit / Loss</b></td>
          <td colspan="2"><b>${profitOrLossText}</b></td>
        </tr>
      </tbody>
    </table>`;

  document.getElementById('stock-profit').innerHTML = tableHTML;
}


function clearStockProfitFields() {
  document.getElementById('quantity').value = '';
  document.getElementById('buyPrice').value = '';
  document.getElementById('sellPrice').value = '';
  document.getElementById('sellQuantity').value = '';
  document.getElementById('result').innerText = '';
}






function unitChanged(id, error) {
  const unit1 = document.getElementById("units1").value;
  const price1 = document.getElementById("Price1").value;
  const unit2 = document.getElementById("units2").value;
  const price2 = document.getElementById("Price2").value;

  if (unit1 != '' && price1 != '' && unit2 != '' && price2 != '') {
    getAverage();
  }

  // Clear error if value exists, but no need to show error if empty per user request
  document.getElementById(error).innerHTML = '';
}


function getAverage() {

  var unit1 = document.getElementById("units1").value;
  var price1 = document.getElementById("Price1").value;
  var unit2 = document.getElementById("units2").value;
  var price2 = document.getElementById("Price2").value;

  // Only calculate if all fields are entered
  if (unit1 === '' || price1 === '' || unit2 === '' || price2 === '') {
    document.getElementById("result").innerHTML = "";
    document.getElementById("investedamount1").innerHTML = "";
    document.getElementById("investedamount2").innerHTML = "";
    document.getElementById("graph-container").style.display = 'none';
    return;
  }

  var totalAmount = Number(((unit1 * price1) + (unit2 * price2)).toFixed(2));
  var totalUnits = +unit1 + +unit2;
  var averagePrice = Number((((unit1 * price1) + (unit2 * price2)) / totalUnits).toFixed(2));
  document.getElementById("investedamount1").innerHTML = "<span>The amount invested in the 1st purchase: </span>  <span class='unit-amount'>" + (unit1 * price1).toLocaleString(intlLanguage) + "</span>";
  document.getElementById("investedamount2").innerHTML = "<span>The amount invested in the 2nd purchase: </span> <span class='unit-amount'>" + (unit2 * price2).toLocaleString(intlLanguage) + "</span>";
  document.getElementById("result").innerHTML = "<span>Total units </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<bold>"
    + totalUnits + "</bold><br/><br/><span>Average Price</span> &nbsp;&nbsp;&nbsp;<bold>" + averagePrice.toLocaleString(intlLanguage) + "</bold>"
    + "<br/><br/><span>Total Amount</span> &nbsp;&nbsp;&nbsp;<bold>"
    + totalAmount.toLocaleString(intlLanguage) + "</bold>";

  drawGraph(unit1, price1, unit2, price2);
}

function drawGraph(unit1, price1, unit2, price2) {
  var val1 = unit1 * price1;
  var val2 = unit2 * price2;
  var totalVal = val1 + val2;

  if (totalVal === 0) {
    document.getElementById('graph-container').style.display = 'none';
    return;
  }

  var pct1 = (val1 / totalVal) * 100;
  var pct2 = (val2 / totalVal) * 100;

  var html = `
        <div class="graph-bar" style="width: ${pct1}%">
            <div class="graph-label-top">
                <div style="border-bottom: 2px solid black; margin: 0 5px 5px 5px;"></div>
                ${unit1} Units
            </div>
            ${val1.toLocaleString(intlLanguage)}
        </div>
        <div class="graph-bar" style="width: ${pct2}%">
            <div class="graph-label-top">
                <div style="border-bottom: 2px solid black; margin: 0 5px 5px 5px;"></div>
                ${unit2} Units
            </div>
            ${val2.toLocaleString(intlLanguage)}
        </div>
    `;

  // Adjusting label top structure to look more like the dimensions in the image
  // The image has a line across the width with the text in the middle (implied) or above/below.
  // Actually the image shows:
  //  |________ 150 Units ________|
  //
  // My Css .graph-label-top handles positioning.
  // The inner div with border-bottom is an attempt to draw the line.
  // Let's refine the HTML structure in a subsequent edit if needed, but this is a start.

  var averagePrice = (totalVal / (Number(unit1) + Number(unit2))).toFixed(2);

  // Better structure for dimensions:
  html = `
        <div class="graph-bar" style="width: ${pct1}%; background-color: #81c784;">
            <div class="graph-label-top">
               <div style="display: flex; align-items: center; width: 100%;">
                  <div style="flex: 1; height: 1px; background: black; margin-right: 5px;"></div>
                  <span style="white-space: nowrap;">${unit1} Units</span>
                  <div style="flex: 1; height: 1px; background: black; margin-left: 5px;"></div>
               </div>
               <div style="position: absolute; left: 0; bottom: 0; width: 2px; height: 10px; background: black;"></div>
               <div style="position: absolute; right: 0; bottom: 0; width: 2px; height: 10px; background: black;"></div>
            </div>
            ${val1.toLocaleString(intlLanguage)}
        </div>
        <div class="graph-bar" style="width: ${pct2}%; background-color: #64b5f6;">
            <div class="graph-label-top">
               <div style="display: flex; align-items: center; width: 100%;">
                  <div style="flex: 1; height: 1px; background: black; margin-right: 5px;"></div>
                  <span style="white-space: nowrap;">${unit2} Units</span>
                  <div style="flex: 1; height: 1px; background: black; margin-left: 5px;"></div>
               </div>
               <div style="position: absolute; left: 0; bottom: 0; width: 2px; height: 10px; background: black;"></div>
               <div style="position: absolute; right: 0; bottom: 0; width: 2px; height: 10px; background: black;"></div>
            </div>
            ${val2.toLocaleString(intlLanguage)}
        </div>
        <div class="graph-label-bottom">
            <div style="position: absolute; left: 0; top: 0; width: 2px; height: 10px; background: black;"></div>
            <div style="position: absolute; right: 0; top: 0; width: 2px; height: 10px; background: black;"></div>
            <div style="display: flex; align-items: center; width: 100%;">
               <div style="flex: 1; height: 1px; background: black; margin-right: 5px;"></div>
               <span style="white-space: nowrap;">Avg Price ${Number(averagePrice).toLocaleString(intlLanguage)}</span>
               <div style="flex: 1; height: 1px; background: black; margin-left: 5px;"></div>
            </div>
        </div>
    `;

  document.getElementById('graph-container').innerHTML = html;
  document.getElementById('graph-container').style.display = 'flex';
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
  document.getElementById("graph-container").innerHTML = '';
  document.getElementById("graph-container").style.display = 'none';
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

  var monthlyRate = rateOfInterest / 12 / 100;
  var totalMonths = years * 12;
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
  if (investment && rateOfInterest && years) {
    document.getElementById("im").innerHTML = Number((totalInvestment).toFixed(2)).toLocaleString(intlLanguage);
    document.getElementById("tm").innerHTML = Number(futureValue.toFixed(2)).toLocaleString(intlLanguage);
    document.getElementById("gm").innerHTML = Number(totalProfit.toFixed(2)).toLocaleString(intlLanguage);
    if (sipChart) {
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
  if (sipChart) {
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
  if (emiChart) {
    emiChart.destroy();
  }

}

function clearAllFields(fieldIds) {
  fieldIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      if (element.tagName === "INPUT") {
        element.value = ''; // Clear input fields
      } else {
        element.innerHTML = '0'; // Clear non-input elements like div or span
      }
    }
  });
}

function checkPercentage() {
  let num = Number(document.getElementById("percentageNumber").value);
  let percent = Number(document.getElementById("percentage").value);
  let result = document.getElementById("percentageResult");

  if (num == '' || percent == '' || num == 0 || percent == 0) {
    return;
  }

  let finalNum = (num / 100) * percent;

  result.innerHTML = percent + " Percentage(%) of " + num + " is = " + finalNum.toFixed(2);
}



var emiChart, sipChart;
function calculateEMI() {
  let loanAmount = Number(document.getElementById('loanAmount').value);
  let interestRate = Number(document.getElementById('interestRate').value / 100 / 12); // Monthly interest rate
  let loanTerm = Number(document.getElementById('loanTerm').value);

  // EMI calculation formulacagr-calcultorclearFields3
  let emi = loanAmount * interestRate * Math.pow((1 + interestRate), loanTerm) / (Math.pow((1 + interestRate), loanTerm) - 1);
  let totalInterest = (emi * loanTerm) - loanAmount;
  let totalPayment = totalInterest + loanAmount;

  if (loanAmount && interestRate && loanTerm) {
    document.getElementById('total-principal').textContent = '' + Number(loanAmount.toFixed(0)).toLocaleString(intlLanguage);
    document.getElementById('total-emi').textContent = '' + Number(emi.toFixed(0)).toLocaleString(intlLanguage);
    document.getElementById('total-amount').textContent = '' + Number(totalPayment.toFixed(0)).toLocaleString(intlLanguage);
    document.getElementById('total-interest').textContent = '' + Number(totalInterest.toFixed(0)).toLocaleString(intlLanguage);
    if (emiChart) {
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

  if (document.getElementById('clock')) {
    document.getElementById('clock').innerText = timeString;
  }
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
// updateClock();

document.getElementById('toggle-btn').addEventListener('click', function () {
  var sidebar = document.getElementById('sidebar');
  if (sidebar.style.left != '0px') {
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

if (document.getElementById('darkModeSwitch')) {
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
    if (userCountry != 'Asia/Calcutta') {
      const elms = document.querySelectorAll("[id='load-indian-ads']");
      for (var i = 0; i < elms.length; i++) {
        elms[i].classList.add('hide-world-content');
      }
    } else if (userCountry === 'Asia/Calcutta') {
      const elms = document.querySelectorAll("[id='load-global-ads']");
      for (var i = 0; i < elms.length; i++) {
        elms[i].classList.add('hide-india-content');
      }
    } else {
      console.error('Unknown country:', userCountry);
    }
  } catch (error) {
    console.error('Error fetching location:', error);
  }
}

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
    const navLinks = document.querySelectorAll('#nav li');
    const pageName = document.getElementById('page-name').innerText.toLowerCase();
    navLinks.forEach(function (link) {
      if (link.title.toLowerCase() == pageName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  } catch (error) {
    console.error(error);
    document.getElementById(targetElementId).innerText = "Error loading content.";
  }
};

const loadSnippets = async (url, targetElementId) => {
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
loadSnippets('latestnews.html', 'load-scroll-news-section');

const loadAds = async (url, targetElementId) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch snippet: ${response.statusText}`);
    }
    const html = await response.text();
    const targetClass = document.querySelectorAll('.' + targetElementId);
    targetClass.forEach(function (element) {
      element.innerHTML = html;
    });
  } catch (error) {
    console.error(error);
    // document.getElementsByClassName(targetElementId).innerText = "Error loading content.";
  }
};

loadAds('banner-ads-desktop-india-option-one.html', 'load-indian-ads-option-one');
loadAds('banner-ads-desktop-global-option-one.html', 'load-global-ads-option-one');

/* Stock Data Manager for Detail Pages */
class StockDataManager {
  constructor(config) {
    this.config = config;
    this.currentYear = new Date().getFullYear();
    this.selectedYear = this.currentYear;
    this.dataCache = {};

    this.gridEl = document.getElementById(config.gridId);
    this.navEl = document.getElementById(config.navId);
    this.titleEl = document.querySelector(config.titleSelector);
    this.filterInput = document.getElementById('companyFilter'); // Common ID
  }

  init() {
    this.renderYearNav();
    this.loadYear(this.selectedYear);
    if (this.filterInput) {
      this.filterInput.addEventListener('input', () => this.filterCards());
    }
  }

  dataFile(year) {
    return `d-${year}.json`;
  }

  updateHeader(year) {
    if (this.titleEl) {
      // Replace any 4-digit year in the text with the selected year
      this.titleEl.textContent = this.titleEl.textContent.replace(/\b\d{4}\b/g, year);
    }
  }

  renderYearNav() {
    if (!this.navEl) return;
    this.navEl.innerHTML = '';

    // Previous Button (Allow going back at least few years)
    const minYear = this.config.minYear || 2023;
    if (this.selectedYear > minYear) {
      const prevBtn = document.createElement('button');
      prevBtn.textContent = `Previous < ${this.selectedYear - 1}`;
      prevBtn.addEventListener('click', () => this.loadYear(this.selectedYear - 1));
      this.navEl.appendChild(prevBtn);
    }

    // Next Button (Allow going forward up to currentYear)
    if (this.selectedYear < this.currentYear) {
      const nextBtn = document.createElement('button');
      nextBtn.className = 'secondary';
      nextBtn.textContent = `Next > ${this.selectedYear + 1}`;
      nextBtn.addEventListener('click', () => this.loadYear(this.selectedYear + 1));
      // Add spacing if previous button exists
      if (this.navEl.children.length > 0) {
        nextBtn.style.marginLeft = '10px';
      }
      this.navEl.appendChild(nextBtn);
    }
  }

  loadYear(year) {
    this.selectedYear = year;
    this.updateHeader(year);
    this.renderYearNav();

    if (this.dataCache[year]) {
      this.renderCards(this.dataCache[year]);
      return;
    }

    fetch(this.dataFile(year))
      .then(r => r.json())
      .then(data => {
        this.dataCache[year] = data;
        this.renderCards(data);
      })
      .catch(err => {
        console.error('Data load failed', err);
        this.gridEl.innerHTML = `<div class='alert alert-danger'>Failed to load data for ${year}</div>`;
      });
  }

  renderCards(data) {
    this.gridEl.innerHTML = '';
    if (!data || !data.length) return;

    const filteredData = data.filter(item => this.config.filterPredicate(item));

    // Sort by date descending
    filteredData.sort((a, b) => new Date(b["EX-DATE"]) - new Date(a["EX-DATE"]));

    filteredData.forEach(item => {
      const card = document.createElement('div');
      card.className = 'stock-item-card';
      card.setAttribute('role', 'listitem');
      card.title = `${item.SYMBOL} | ${item.PURPOSE}`;

      const purposeFull = item.PURPOSE || '';
      const purpose = purposeFull.length > 70 ? purposeFull.substring(0, 67) + '…' : purposeFull;
      const companyFull = item["COMPANY NAME"] || '';
      const company = companyFull.length > 38 ? companyFull.substring(0, 35) + '…' : companyFull;

      // Custom fields based on page type
      let extraFields = '';
      if (this.config.type === 'dividend') {
        const amount = this.extractDividendAmount(purposeFull);
        extraFields = `<div class="stock-dividend"><strong>Amount:</strong> <b><i>${amount}</i></b></div>`;
      }

      card.innerHTML = `
                <div class="stock-card-header">
                    <span class="stock-symbol">${item.SYMBOL}</span>
                    <span class="stock-series">${item.SERIES}</span>
                </div>
                <div class="stock-company">${company}</div>
                <div class="stock-purpose">${purpose}</div>
                <div class="stock-dates">
                    <span><strong>Ex:</strong> ${item["EX-DATE"]}</span>
                    <span><strong>Rec:</strong> ${item["RECORD DATE"] || '-'}</span>
                </div>
                <div class="stock-face"><strong>FV:</strong> ${item["FACE VALUE"]}</div>
                ${extraFields}
            `;
      this.gridEl.appendChild(card);
    });

    this.filterCards(); // Re-apply search filter if any
  }

  filterCards() {
    if (!this.filterInput) return;
    const term = (this.filterInput.value || '').toLowerCase();
    const cards = this.gridEl.querySelectorAll('.stock-item-card');

    cards.forEach(card => {
      const companyEl = card.querySelector('.stock-company');
      const symbolEl = card.querySelector('.stock-symbol');
      const text = ((companyEl?.textContent) || '') + ' ' + ((symbolEl?.textContent) || '');
      card.style.display = (!term || text.toLowerCase().includes(term)) ? 'flex' : 'none';
    });
  }

  extractDividendAmount(purpose) {
    const match = purpose.match(/(\d+(\.\d+)?)/);
    return match ? match[0] : '-';
  }
}

