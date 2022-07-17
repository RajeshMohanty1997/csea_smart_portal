
//Call to All Field Validation methods
function validateForm() {
    var isValidNameVar = isValidName();
    var isValidRegdNoVar = isValidRegdNo();
    var isValidPhoneVar = isValidPhone();
    var isValidEmailVar = isValidEmail();
    var isValidPwdVar = isValidPwd();
    var isValidConfirmPwdVar = isValidConfirmPwd();

    if (isValidNameVar && isValidRegdNoVar && isValidPhoneVar && isValidEmailVar && isValidPwdVar && isValidConfirmPwdVar) {
        // console.log("true returned");
        location.replace('http://localhost:8000/smartapp/login/');
        // console.log('Redirected')
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

//phone Number Validation
function isValidPhone() {
    var phoneNo = document.getElementById("phoneNo").value;

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

//password Validation
function isValidPwd() {
    var password = document.getElementById("password").value;
    var passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;

    if (password.length == 0) {
        alert("password can't be empty");
        return false;
    }
    else if (!passwordRegEx.test(password)) {
        alert("Password must  contain uppercase,lowercase,digit,special character");
        if (psEx.length < 7) {
            alert("Password must be greater than 7");
            return false;
        }
    }

    else {
        return true;
    }
}

//Confirm-Pasword Validation
function isValidConfirmPwd() {
    var password = document.getElementById("password").value;
    var cPassword = document.getElementById("cPassword").value;

    if (password == cPassword) {
        return true;
    }
    else {
        alert("Both Password doesn't match");
    }

}