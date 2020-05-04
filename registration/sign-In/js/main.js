 /*==================================================================*/
// Login Validation code
function signInValidationCheck(){
    let clientSignInPassword = document.getElementById("userPassword").value;
    let pattern = /[^A-Za-z0-9]/;
    let clientSignInMatric = document.getElementById('userMatric').value;
    if((pattern.test(clientSignInPassword) === true) && (clientSignInMatric.length == '9')){
        return true;
    }else{
        alert('Invalid Login');
       return false;
        };
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
