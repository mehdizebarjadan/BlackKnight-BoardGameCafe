
window.onload = init;
function init(){



var formHandle = document.forms[0];
formHandle.onsubmit = processForm;

var formPayHandle = document.forms[1];
formPayHandle.onsubmit = processPayForm;

var formEndHandle = document.forms[2];
formEndHandle.onsubmit = processEndForm;

formPayHandle.style.display = "none";
formEndHandle.style.display = "none";



//This function process all first form's inputs in case of validation
function processForm (){

    //Validate voucher value both dropdown list and textbox together .user can choose one value from dropdown list or enter a value
    var SelectedValue = document.forms[0].SelectVoucherValue.selectedIndex;
    var valueTextBox = document.getElementById("VoucherValue");
    if(SelectedValue===0 && (valueTextBox.value === "" || valueTextBox.value === null))
    {
        document.getElementById("volbl").style.color = "rgb(191,37,47)";
        document.getElementById("vovalbl").style.color = "rgb(191,37,47)";
        valueTextBox.focus();
        return false;        
    }

    //validate first name
    var fnameTextBox = document.getElementById("formFirstName");
    if(fnameTextBox.value === "" || fnameTextBox.value === null) {
        document.getElementById("name").style.color = "rgb(191,37,47)";
        fnameTextBox.focus();
        return false;       
    }

    //validate last name
    var snameTextBox = document.getElementById("formSurName");
    if(snameTextBox.value === "" || snameTextBox.value === null) {
        document.getElementById("lname").style.color = "rgb(191,37,47)";
        snameTextBox.focus();
        return false;
    }

    //validate email address
    var email = document.forms[0].Email.value;
    var emailTextBox = document.getElementById("Email");
    var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailTextBox.value === "" || emailTextBox.value === null || emailTextBox.value.search(emailPattern)) {
		
        document.getElementById("emailadd").style.color = "rgb(191,37,47)";
        emailTextBox.focus();
        return false;
    }
    formHandle.style.display = "none"; //if all input textboxes were valid then first form would be hide 
    formPayHandle.style.display = "block"; //and second form would be shown
    return false;
}



//This function process all second form's inputs in case of validation
function processPayForm() {

    //validate card number
    var CardNumber = document.forms[1].formCardNumber.value;
    var CardNumberTextBox = document.getElementById("formCardNumber");
    var cardPattern = /\d{16}/;
    if (CardNumberTextBox.value === "" || CardNumberTextBox.value === null || CardNumberTextBox.value.search(cardPattern)) {

        document.getElementById("card").style.color = "rgb(191,37,47)";
        CardNumberTextBox.focus();
        return false;
    }

    //validate cvv number
    var CvvNumber = document.forms[1].formCvvNumber.value;
    var CvvNumberTextBox = document.getElementById("formCvvNumber");
    var cvvPattern = /[1-9]\d{2}/;
    if (CvvNumberTextBox.value === "" || CvvNumberTextBox.value === null || CvvNumberTextBox.value.search(cvvPattern)) {

        
        document.getElementById("cvv").style.color = "rgb(191,37,47)";
        CvvNumberTextBox.focus();
        return false;
    }

    //validate exp date month
    var SelectedMonthValue = document.forms[1].month.selectedIndex;
    var SelectedMonth = document.forms[1].month;
    if (SelectedMonthValue === 0) {
        document.getElementById("expdate").style.color = "rgb(191,37,47)";
        document.getElementById("month").style.color = "rgb(191,37,47)";
        SelectedMonth.focus();
        return false;
    }

    //validate exp date year
    var SelectedYearValue = document.forms[1].year.selectedIndex;
    var SelectedYear = document.forms[1].year;
    if (SelectedYearValue === 0) {
        document.getElementById("expdate").style.color = "rgb(191,37,47)";
        document.getElementById("year").style.color = "rgb(191,37,47)";
        SelectedYear.focus();
        return false;
    }
    
    formPayHandle.style.display = "none";//if all input textboxes were valid then second form would be hide 
    formEndHandle.style.display = "block"; // success message would be shown
    return false;

}

function processEndForm() {
    
}

}
