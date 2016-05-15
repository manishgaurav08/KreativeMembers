
var xmlhttp = new XMLHttpRequest();
var url = "data.json";
var data = undefined;
var updatedDiscountId = 0;

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    	console.log(xmlhttp.responseText);
        var responseData = JSON.parse(xmlhttp.responseText);
        data = responseData;
        updateUI(responseData)
        updateUIData(responseData);
    }
};


function updateUI(responseData) {
	document.getElementById("go_button").style.display= "none";
	document.getElementById("card_details").style.display= "block";;
	document.getElementById("benefits_container").style.display= "block";;
	document.getElementById("submit_button").style.display= "block";
	document.getElementById("benefits_container").innerHTML= createTableContent(responseData);
}

function createTableContent(responseData) {
	var tableContent = "<tr><th>Benefits</th><th>Discount Option</th><th>Discount Info</th><th>Net Amount (INR)</th><th>Discount (INR)</th><th>Gross Amount (INR)</th></tr>"
	    for(var i=0, len=responseData.benefits.length; i < len; i++){
	    	var discount_id = responseData.benefits[i].id;
	    	if (i%2 === 0) {
	    		tableContent += "<tr id='discount_" + discount_id +"'>";
	    	}else {
	    		tableContent += "<tr class='even' id='discount_" + discount_id +"'>";
	    	}
	    	tableContent += "<td><label  id='discount_title_" + discount_id +"'/>" + "</td>";
	    	tableContent += "<td><select id='discount_options_" + discount_id +"' onchange='discountOptionChanged(this)'>" + "</select></td>";
	    	tableContent += "<td><label  id='discount_applied_" + discount_id +"'></label></td>";
	    	tableContent += "<td><input type='text' value='0' id='netamt_" + discount_id +"' onkeypress='validate(event)' onchange='calculate(this)';/></td>";
	    	tableContent += "<td><label id='option_discount_" + discount_id +"'></label></td>";
	    	tableContent += "<td><label id='grossamt_" + discount_id +"'></label></td>";
	    	tableContent += "</tr>";
	    }
	tableContent += "<tr class='even'><td></td><td></td><td>Total</td><td></td><td></td><td></td></tr>";
	return tableContent;
}

function updateUIData(responseData) {
	console.log(responseData);
	document.getElementById("hotel_name").innerHTML = responseData.hotelName;
	document.getElementById("card_no").innerHTML = responseData.cardNo; 
	document.getElementById("member_name").innerHTML = responseData.memberName;    
	document.getElementById("member_address").innerHTML = responseData.memberAddress; 
	
	for(var i=0, len=responseData.benefits.length; i < len; i++){
		var benefit = responseData.benefits[i];
    	var discount_id = benefit.id;
    	document.getElementById("discount_title_"+ discount_id).innerHTML = benefit.title;
    	document.getElementById("discount_options_"+ discount_id).innerHTML = getDiscountOptionsInnerHTML(benefit.options, discount_id, i);
    	
    	//document.getElementById("discount_applied_"+ discount_id).innerHTML = benefit.title;
    }
}

function discountOptionChanged(option) {
	var displayText = "None";
	var discount = 0.0;
	if(option) {
		var selectedIndex = option.selectedIndex;
		var selectedOption = option[selectedIndex];
		var idComponents = selectedOption.id.split("_", 2);
		var benefit = data.benefits[idComponents[1]];
		if(selectedIndex > 0) {
			displayText = benefit.options[selectedIndex-1].description;
			discount = benefit.options[selectedIndex-1].discount;
		} 	
		document.getElementById("discount_applied_"+ idComponents[0]).innerHTML = displayText;
		document.getElementById("discount_applied_"+ idComponents[0]).value = discount;
		refreshAmounts(idComponents[0]);
	}
}

function calculate(inputField) {
	var idComponents = inputField.id.split("_", 2);
	var discount_id = parseInt(idComponents[1]);
	refreshAmounts(idComponents[1]);
}

function refreshAmounts(discount_id) {
	var selectedOption = document.getElementById("discount_options_"+ discount_id) ;
	var discountPercentage = selectedOption.value;
	var inputFieldValue = document.getElementById("netamt_" + discount_id).value;
	var inputAmount =parseFloat(inputFieldValue);
	var discount = (inputAmount * discountPercentage) / 100.0 ;
	var grossAmt = inputAmount - discount;
	
	document.getElementById("option_discount_"+ discount_id).innerText = "" + (discount).toFixed(2);
	document.getElementById("grossamt_"+ discount_id).innerText = "" + (grossAmt).toFixed(2);
}

function validate(evt) {
	  var theEvent = evt || window.event;
	  var key = theEvent.keyCode || theEvent.which;
	  key = String.fromCharCode( key );
	  var regex = /[0-9]|\./;
	  if( !regexAmt.test(key) ) {
	    theEvent.returnValue = false;
	    if(theEvent.preventDefault) theEvent.preventDefault();
	  }
	}

function getDiscountOptionsInnerHTML(options, discount_id, index) {
	var optionsHtml = "<option value=0 id='" + discount_id + "_" + index +"_0'>(Select discount option)</option>";
	for (var i = 0; i < options.length; i++) {
		var option = options[i];
		optionsHtml += "<option value=" + option.discount + " id='"+ discount_id + "_" + index + "_" + option.id + "'>" + option.title + "</option>";
	}
	return optionsHtml;
}


function refresh() {
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}
