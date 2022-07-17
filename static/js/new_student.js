
//Call to All Field Validation methods
function validateForm() {
    var isValidRegdNoVar = isValidRegdNo();
    var isValidNameVar = isValidName();
    var isValidRollNoVar = isValidRollNo();
    var isValidDobVar = isValidDob();
    var isValidEmailVar = isValidEmail();
    var isValidPhoneVar = isValidPhone();
    var isValidStateVar = isValidState();
    var isValidDistVar = isValidDist();
    var isValidPinVar = isValidPin();


    if (isValidRegdNoVar && isValidNameVar && isValidRollNoVar && isValidDobVar && isValidEmailVar && isValidPhoneVar && isValidStateVar && isValidDistVar && isValidPinVar) {
      
    }
    else {
        alert("Failed To login");
    }
    return false;
}

// Name Validation
function isValidName() {
    var name = document.getElementById("name").value;
    // alert(name);
    var nameRegex = /[a-zA-Z ]{1,}$/

    if (name == "") {
        alert("Name Can't be empty");
    }
    else if (name.length < 3) {
        alert("Name must be more than 3 characters");
        return false;
    }
    else if (name.length > 30) {
        alert("Name size not Exceed 30 Characters");
        return false;
    }
    else {
        if (nameRegex.test(name)) {
            // alert("Valid Name");
            return true;
        }
        else {
            alert("InValid Name");
            return false;
        }
    }
}

//Registration Number Validation
function isValidRegdNo() {
    var regdNo = document.getElementById("regdNo").value;
    var minLimit = 2005105001;
    var maxLimit = 2005105060;
    if (regdNo.length == 0) {
        alert("Regstration Number can't be empty");
        return false;
    }
    if (regdNo.length == 10) {
        if (regdNo <= maxLimit && regdNo >= minLimit) {
            return true;
        } else {
            alert("Wrong Registration Number.");
            return false;
        }
    }
    else {
        alert("Invalid Registration Number");
        return false;
    }
}

//Roll Number Validation
function isValidRollNo() {
    var rollNo = document.getElementById("rollNo").value;
    var minLimit = 394001;
    var maxLimit = 394060;
    if (rollNo.length == 0) {
        alert("roll number can't be empty");
        return false;
    }
    if (rollNo.length == 6) {
        if (rollNo <= maxLimit && rollNo >= minLimit) {
            return true;
        } else {
            alert("Wrong roll Number.");
            return false;
        }
    }
    else {
        alert("Invalid roll Number");
        return false;
    }
}

//phone Number Validation
function isValidPhone() {
    var phoneNo = document.getElementById("phone").value;

    if (!phoneNo.length) {
        alert("Phone Number can't be empty");
    }
    else if (phoneNo.length == 10) {
        return true;
    }
    else {
        alert("Invalid phone Number");
        return false;
    }
}

//DOB validation
function isValidDob() {
    var dob = document.getElementById("dob").value;

    if (!dob.length) {
        alert("dob can't be empty");
        return false;
    }
    else {
        return true;
    }
}

//Email Validation
function isValidEmail() {
    var email = document.getElementById("eMail").value;
    var eMailRegex = /^[^._][a-zA-Z0-9.]{2,}@[a-zA-Z0-9.]{2,}[.]{1,}[a-zA-Z0-9]{1,}[^.]$/;

    if (!email.length) {
        alert("Email can't be Empty");
    }
    else if (eMailRegex.test(email)) {
        return true;
    }
    else {
        alert("Invalid Email");
        return false;
    }
}

//pin validation
function isValidPin() {
    var pin = document.getElementById("pin").value;

    if (!pin.length) {
        alert("pin Number can't be empty");
    }
    else if (pin.length == 6) {
        return true;
    }
    else {
        alert("Invalid pin Number");
        return false;
    }
}

//dist validation
function isValidDist() {
    var dist = document.getElementById("district").value;

    if (dist.length==0) {
        alert("dist can't be empty");
        return false;
    }
    else {
        return true;
    }
}

//state validation
function isValidState() {
    var state = document.getElementById("state").value;

    if (state.length==0) {
        alert("state can't be empty");
        return false;
    }
    else {
        return true;
    }
}
