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
    var cPassword = document.getElementById("cpassword").value;

    if(cPassword.length==0 ){
        alert("Confirm password can't be empty");
    }
    else if(password == cPassword) {
        return true;
    }
    else {
        alert("Both Password doesn't match");
    }

}


//Call to All Field Validation methods
function validateForm() {
    var isValidPwdVar = isValidPwd();
    var isValidConfirmPwdVar = isValidConfirmPwd();

    if (isValidPwdVar && isValidConfirmPwdVar) {
        // console.log("true returned");
        alert("Pasword Changed successfully , please login with your New password");
        location.replace('login.html');
        // console.log('Redirected')
    }
    else {
        alert("Failed To login");
    }
    return false;
}