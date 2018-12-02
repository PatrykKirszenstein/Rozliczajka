
invalid_fields_on_page=  0;

$(document).on('blur','.login-validation',function(){
	var content = $(this).val();
	var message = '';
	/*Check for punctuation. See if there is a better way*/
	validArray = content.match(/^[0-9A-Za-z]{6,255}$/);
	var valid = true;

	if(content.length == 0){
		valid = false;
		invalid_fields_on_page++;
		console.log("Enter field ");
		message = "Enter Your login"; //made change
	}else if(validArray == null){
		valid = false;
		invalid_fields_on_page++;
		console.log("inalid text input");
		message = "Invalid login";//made change
		//console.log(invalidArray);
	}else{
		// No errors!
	}

	$(this).closest('.form-body').siblings('.modal-footer').find('.message').html(message);
	if(valid){
	    $(this).css('border','');
	    $(this).attr('data-validation',true);
	    $(this).closest('.form-body').siblings('.modal-footer').find('.message').css('color','green');

  }else{
	    $(this).css('border','1px solid red');
	    $(this).attr('data-validation',false);
	    $(this).closest('.form-body').siblings('.modal-footer').find('.message').css('color','red');
  }
});
$(document).on('blur','.alphanum-validation',function(){
	//".form-group input[type='textbox']"
	var content = $(this).val();
	var message = '';
	/*Check for punctuation. See if there is a better way*/
	invalidArray = content.match(/[^0-9A-Za-z_ ]/g);
	var valid = true;

	if(content.length == 0){
		valid = false;
		invalid_fields_on_page++;
		console.log("Enter field ");
		message = "Enter Field";
        document.getElementById("submit").disabled = true;
	}else if(invalidArray != null){
		valid = false;
		invalid_fields_on_page++;
		console.log("inalid text input");
		console.log(invalidArray);
		message = "Inalid text input";
        document.getElementById("submit").disabled = true;

	}else{
		// No errors!
	}

	if (invalid_fields_on_page>0) {
        document.getElementById("submit").disabled = true;
	}

	$(this).closest('.form-body').siblings('.modal-footer').find('.message').html(message);
	 if(valid){
    	 $(this).css('border','');
   		 $(this).attr('data-validation',true);
    	 $(this).closest('.form-body').siblings('.modal-footer').find('.message').css('color','green');
 	 }else{
	    $(this).css('border','1px solid red');
	    $(this).attr('data-validation',false);
        $(this).closest('.form-body').siblings('.modal-footer').find('.message').css('color','red');
  }
});

$(document).on('blur','.password-validation',function(){
	var content = $(this).val();
	var message = '';
	/*Check for punctuation. See if there is a better way*/
	invalidArray = content.match(/[^0-9A-Za-z_ ]/g);
	var valid = true;

	if(content.length == 0){
		valid = false;
		invalid_fields_on_page++;
		console.log("Enter field ");
		message = "Enter Field";
        document.getElementById("submit").disabled = true;
	}else if(invalidArray != null){
		valid = false;
		invalid_fields_on_page++;
		console.log("Enter only Alpgabets, digits and underscore");
		console.log(invalidArray);
		message = "Enter only Alpgabets, digits and underscore";

        document.getElementById("submit").disabled = true;
	}else if(content.length < 8){
		valid = false;
		invalid_fields_on_page++;
		console.log("Password should have atleast 8 characters");
		message = "Password should have atleast 8 characters";
        document.getElementById("submit").disabled = true;
	}else{
		// No errors!
	}

	$(this).closest('.form-body').siblings('.modal-footer').find('.message').html(message);

if(valid){
    $(this).css('border','');
    $(this).attr('data-validation',true);
    $(this).closest('.form-body').siblings('.modal-footer').find('.message').css('color','green');
  }else{
    	$(this).css('border','1px solid red');
    	$(this).attr('data-validation',false);
        $(this).closest('.form-body').siblings('.modal-footer').find('.message').css('color','red');
  }

});

$(document).on('blur','.password-confirmation',function(){
	var content = $(this).val();
	var password = $(this).parent().siblings().find('.password-validation').val();
	var message = '';
	/*Check for punctuation. See if there is a better way*/
	invalidArray = content.match(/[^0-9A-Za-z_ ]/g);
	var valid = true;

	/* First, chech if the password entered in the password field is correct*/
	if(($(this).parent().siblings().find('.password-validation').attr('data-validation') != 'true')){
		valid = false;
		invalid_fields_on_page++;
		console.log("First enter a Correct Password");
		message = "First enter a Correct Password";
	}else if(content.length == 0){
		valid = false;
		invalid_fields_on_page++;
		console.log("Enter field ");
		message = "Enter field ";
	}else if(password.length == 0){
		/*If nothing is entered in the password field (redundant)*/
		valid = false;
		invalid_fields_on_page++;
		console.log("Enter Password First ");
		message = "Enter Password First ";
	}else if(password != content){
		valid = false;
		invalid_fields_on_page++;
		console.log("Passwords Dont match");
		message = "Passwords Dont match";
	}else{
		// No errors!
	}

		$(this).closest('.form-body').siblings('.modal-footer').find('.message').html(message);

	if(valid){
    $(this).css('border','');
    $(this).attr('data-validation',true);
        $(this).closest('.form-body').siblings('.modal-footer').find('.message').css('color','green');
  }else{
    $(this).css('border','1px solid red');
    $(this).attr('data-validation',false);
        $(this).closest('.form-body').siblings('.modal-footer').find('.message').css('color','red');
  }
});

$(document).on('blur','.email-validation',function(){
	var content = $(this).val();

	/*Check for punctuation. See if there is a better way*/
	invalidArray = content.match(/[^0-9A-Za-z_@\. ]/g);
	var valid = true;

	if(content.length == 0){
		valid = false;
		invalid_fields_on_page++;
		console.log("Enter field ")
	}else if(invalidArray != null){
		valid = false;
		invalid_fields_on_page++;
		console.log("Enter only Alpgabets, digits, @ and underscore");
		console.log(invalidArray);
	}else if(content.count("@") != 1){
		valid = false;
		invalid_fields_on_page++;
		console.log("Enter valid email");
		console.log(invalidArray);
	}else{
		// No errors!
	}

	if(valid){
    $(this).css('border','');
    $(this).attr('data-validation',true);
  }else{
    $(this).css('border','1px solid red');
    $(this).attr('data-validation',false);
  }
});


$(document).on('click','.email-validation',function(){
		invalid_fields_on_page=0;
	if($(this).siblings().find('.login-validation').is(':hidden')){
		//$(this).siblings().find('.email-validation').trigger('blur');
		$(this).siblings().find('.alphanum-validation').trigger('blur');
	}else{
		$(this).siblings().find('.login-validation').trigger('blur');
	}

	//$(this).siblings().find('.alphanum-validation').trigger('blur');
	$(this).siblings().find('.password-validation').trigger('blur');
	$(this).siblings().find('.password-confirmation').trigger('blur');
	if(invalid_fields_on_page>0)
			return false;
	else
		return true;

});

/* If student, ask for the login, otherwise ask for email*/
$(document).on('change','.category select',function(){
	var category = $(this).val();
	if(category == 'student'){
		$(this).parent().siblings('.login').removeClass('is-hidden');
		$(this).parent().siblings('.email').addClass('is-hidden');
	}else{
		$(this).parent().siblings('.login').addClass('is-hidden');
		$(this).parent().siblings('.email').removeClass('is-hidden');
	}
});


/* Show image on complete load
* Also, give it that cool fade in effect.
* The function :
	- Shows the image Normally, fullscren.
	- Its then blurs the image
	- Loads the login form
	- loads the signup form after a small delay
*/


var img = new Image();
var image_path = 'image/college_1.jpg';

img.onload = function(){
      // image  has been loaded
      $("#background").hide();
      $("#background").css("background-image","url('"+image_path+"')");
      $('#background').fadeIn(1000,"swing");
      setTimeout(function(){
      		$('#background').addClass('background-image-blur');
      		setTimeout(function(){
      		$('#main-login').fadeTo(400,1);
      		$('#main-signup').fadeTo(400,1);

      		},1000);

      },3000);
};
img.src = image_path;

