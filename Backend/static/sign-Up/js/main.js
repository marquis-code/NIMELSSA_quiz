/* Sign up validation */
function signUpValidationCheck(){
    let clientSignUpPassword = document.getElementById("password-signup").value;
    /* let clientSignUpConfirmatoryPassword = document.getElementById("password-signup_confirm").value; */
   let pattern = /^((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{8,12})$/;
  /* let clientSignUpMatric = document.getElementById('usersignnup-matric').value; */
    if((pattern.test(clientSignUpPassword) === true)){
        return true;
    }else{
        alert('Password Criteria not met!!!');
        return false;
    }
};
        
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showPass = 0;
        }
        
    });
  })(jQuery);