function validateForm() {

    // Variables which contain the Validations results
    var isValidPwdVar = isValidPwd();
    var isValidRegdNoVar = isValidRegdNo();

    // if all are Valid then only redirct to Destination Page
    if (isValidRegdNoVar && isValidPwdVar) {
       // alert("Valid Data");
        location.replace('project.html');
    }
    else {
        alert("Failed to LogIn");
    }
    return false;
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