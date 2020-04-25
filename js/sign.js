// Login Validation code
function signInValidationCheck(){
    let clientSignInPassword = document.getElementById("userPassword").value;
    let pattern = /[^A-Za-z0-9]/;
    let clientSignInMatric = document.getElementById('userMatric').value;
    if((pattern.test(clientSignInPassword) === true) && (clientSignInMatric.length == '9')){
        alert('Login Approved');
        return true;
    }else{
        alert('Invalid Login');
        return false;
    }
};

// Sign Up validation code
function signUpValidationCheck(){
    let clientSignUpPassword = document.getElementById("password-signup").value;
    let clientSignUpConfirmatoryPassword = document.getElementById("password-signup_confirm").value;
    let pattern = /[^A-Za-z0-9]/;
    let clientSignUpMatric = document.getElementById('usersignnup-matric').value;
    if((pattern.test(clientSignUpPassword) === true) && (clientSignUpMatric.length == '9') && (clientSignUpPassword === clientSignUpConfirmatoryPassword)){
       /*  let confirmation = confirm('Proceed To Sign Up'); */
        alert('Sign Up Successful');
        return true;
    }else{
        alert('Sign Up Failed');
        return false;
    }
};

          