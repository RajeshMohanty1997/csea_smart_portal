//OTP  Validation
function isValidOtp() {
    var otp = document.getElementById("OTP").value;
 
    if (otp.length == 0) {
        alert("OTP  can't be empty");
        return false;
    }
    if (otp.length == 4) {
            return true;
    }
    else {
        alert("Invalid OTP ");
        return false;
    }
}


//Call to All Field Validation methods
function validateForm() {
    var isValidOtpVar = isValidOtp();

    if (isValidOtpVar) {
        // console.log("true returned");
        location.replace('Resetpassword.html');
        // console.log('Redirected')
    }
    else {
        alert("Failed To Verify");
    }
    return false;
}