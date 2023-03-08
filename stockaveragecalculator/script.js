

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
    document.getElementById("investedamount1").innerHTML ="<span>Amount invested on 1st buy: </span>  <span class='unit-amount'>" + (unit1 * price1).toLocaleString(intlLanguage) + "</span>";
    document.getElementById("investedamount2").innerHTML ="<span>Amount invested on 2nd buy: </span> <span class='unit-amount'>" + (unit2 * price2).toLocaleString(intlLanguage) + "</span>";
    document.getElementById("result").innerHTML = "<span>Total units </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<bold>"
      + totalUnits + "</bold><br/><br/><span>Average Price</span> &nbsp;&nbsp;&nbsp;<bold>" + averagePrice.toLocaleString(intlLanguage) + "</bold>" 
      + "<br/><br/><span>Total Amount</span> &nbsp;&nbsp;&nbsp;<bold>"
      + totalAmount.toLocaleString(intlLanguage) + "</bold>";
  }
  function clearFields() {
    document.getElementById("units1").value = '';
    document.getElementById("Price1").value = '';
    document.getElementById("units2").value = '';
    document.getElementById("Price2").value = '';
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


              document.getElementById("ac").classList.add("active");
              document.getElementById("sc").classList.remove("active");
              document.getElementById("pc").classList.remove("active");
          break;
          case 'sc': 
              document.getElementById("sip-calculator").classList.remove("hide");
              document.getElementById("sip-calculator").classList.add("active");

              document.getElementById("average-calculator").classList.remove("active");
              document.getElementById("average-calculator").classList.add("hide");

              document.getElementById("percentage-calculator").classList.remove("active");
              document.getElementById("percentage-calculator").classList.add("hide");

              document.getElementById("sc").classList.add("active");
              document.getElementById("ac").classList.remove("active");
              document.getElementById("pc").classList.remove("active");
          break;
          case 'pc': 
          document.getElementById("percentage-calculator").classList.add("active");
          document.getElementById("percentage-calculator").classList.remove("hide");

          document.getElementById("sip-calculator").classList.remove("active");
          document.getElementById("sip-calculator").classList.add("hide");

          document.getElementById("average-calculator").classList.remove("active");
          document.getElementById("average-calculator").classList.add("hide");

          document.getElementById("pc").classList.add("active");
          document.getElementById("ac").classList.remove("active");
          document.getElementById("sc").classList.remove("active");
      break;
          default: break;
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