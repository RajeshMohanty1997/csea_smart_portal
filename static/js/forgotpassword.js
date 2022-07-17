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


//Call to All Field Validation methods
function validateForm() {
    var isValidEmailVar = isValidEmail();
    if (isValidEmailVar) {
        // console.log("true returned");
        location.replace('verifycode.html');
        // console.log('Redirected')
    }
    else {
        alert("Failed To login");
    }
    return false;
}