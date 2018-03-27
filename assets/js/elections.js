// Use of this Script Requires the Tabletop.js Library. The Calling HTML File must include tabletop.js

// Address of the Google Sheets Database
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1hFKtkMFVtVstEp6-yJWl0GNE9Xn8uErMGQ4XmRznbzs/edit?usp=sharing';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: showInfo,
                 simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

// Method that gets called when data has been pulled from Google Sheets
function showInfo(data) {
	//Note: If the column name is multiword, that is fine, since
	//data[0].Name === data[0]["Name"]. So, you can write: data[0]["First Name"]
	var presidential_table = "a<br/>b";
	var hr_table = "b";
	var corporate_table = "c";
	var internal_table = "d";
	var academics_table = "e";
	var finance_table = "f";
	var social_table = "g";
	var web_table = "h";
	var cp_table = "i";
	document.getElementById("pres_candidates").innerHTML = presidential_table;
	document.getElementById("hr_candidates").innerHTML = hr_table;
	document.getElementById("corporate_candidates").innerHTML = corporate_table;
	document.getElementById("internal_candidates").innerHTML = internal_table;
	document.getElementById("academics_candidates").innerHTML = academics_table;
	document.getElementById("finance_candidates").innerHTML = finance_table;
	document.getElementById("social_candidates").innerHTML = social_table;
	document.getElementById("web_candidates").innerHTML = web_table;
	document.getElementById("cp_candidates").innerHTML = cp_table;
}
