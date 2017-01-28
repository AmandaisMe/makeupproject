$(function(){

	$(':input').blur(function(){
		_phone=$('[name=phone]');
		_password=$('[name=password]');
		_confirmpassword=$('[name=confirmpassword]');
		_identifyingcode=$('[name=identifyingcode]');
		phone=_phone.val();
		password=_password.val();
		confirm=_confirmpassword.val();
		identifying=_identifyingcode.val();
		
		if(!/^1[34578]\d{9}$/.test(phone)){

			_phone.siblings('span').show();
			_phone.focus();
			phone=''
		}else{
			_phone.siblings('span').hide();
		}

		if(!/^[a-zA-Z\w]{6,16}$/.test(password)){
			_password.siblings('span').show();
			password='';
		}else{
			_password.siblings('span').hide();
		}
		if(confirm!=password){
			_confirmpassword.siblings('span').show()
		}else{
			_confirmpassword.siblings('span').hide()

		}
	})
			// var phone=$("[name=phone]").val();

			// if(!/^1[34578]\d{9}$/.test(phone)){

					

			// 		$("[name=phone]").focus();
					
			// 		return false;
			// }
	
	
})