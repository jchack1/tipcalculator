let billInput, tipInput, otherTip;

function getTipInputValue(){
	if(document.querySelector('input[name="percentage"]:checked').value == "other"){
		tipInput = document.querySelector("#other-percentage").value;
		return tipInput;
	}
	else{
		tipInput = document.querySelector('input[name="percentage"]:checked').value;
		return tipInput;	
	}	
}



function getBillInputValue(){
	billInput = document.querySelector("#bill").value;
	return billInput;
}

function calculateTip(tip, bill){
	return tip * 0.01 * bill;
}


document.querySelector("#calculate-button").addEventListener("click", function(){
	if(document.querySelector("#bill").value == ""){
		document.querySelector(".bill-input-required").textContent = "Please fill in bill amount";
		return;
	}
	else if (document.querySelector("#bill").value <= 0){
		document.querySelector(".bill-input-required").textContent = "Must be positive number greater than 0";
		return;
	}
	else if(document.querySelector('input[type="radio"]:checked') === null){
		document.querySelector(".bill-input-required").textContent = "";
		document.querySelector(".tip-input-required").textContent = "Please select tip amount";
		return;
	}
	else if((document.querySelector('input[name="percentage"]:checked').value == "other") && (document.querySelector("#other-percentage").value == "")){
		document.querySelector(".bill-input-required").textContent = "";
		document.querySelector(".tip-input-required").textContent = "Please enter tip amount";
		return;
	}
	else if(document.querySelector("#other-percentage").value < 0 ){
		document.querySelector(".bill-input-required").textContent = "";
		document.querySelector(".tip-input-required").textContent = "Must be positive number";
		return;
	}
	else{
	
	const billValue = parseFloat(getBillInputValue());
	const tipValue = parseFloat(getTipInputValue());

	console.log(typeof billValue);
	console.log(billValue)
	console.log(typeof tipValue);
	console.log(tipValue);

	const tipInit = calculateTip(tipValue, billValue);
	const tip = tipInit.toFixed(2);
	
	const totalInit = tipInit + billValue;
	const total = totalInit.toFixed(2);

	document.querySelector(".tip-display").className = "tip-display tip-display-on";
	document.querySelector(".bill-input-required").textContent = "";
	document.querySelector(".tip-input-required").textContent = "";

	document.querySelector(".calculated-tip").textContent = "$" + tip;
	document.querySelector(".calculated-total").textContent = "$" + total;
	}
})

