
$(function(){
	$(':input').blur(function(){
		_username=$('[name=username]');
		_password=$('[name=password]');
		password=_password.val();
		username=_username.val();

		if(username==''){
			_username.siblings('span').show();
		}else{
			_username.siblings('span').hide();

		}
		if(password==''){
			_password.siblings('span').show();
		}else{
			_password.siblings('span').hide();

		}
	})
	

	

		// if(!/^[\w\.\-]+@[a-zA-Z0-9\-]+(\.[a-zA-Z]+){1,2}$/.test($val)){
		// 	console.log(1)
		// 	// alert('请输入正确邮箱');
		// 	return false;
			
		// }
	$('#submit').click(function(){

			$.post('php/login.php',{
				username:$('[name=username]').val(),
				password:$('[name=password]').val(),

			},function(response){
				
				var $obj = eval('(' + response + ')');

					if($obj.state){
						window.location.href='index.html';
					} else {
					_username.siblings('span').show();
					}
			
		})
	})
 	
})

	
// || !/^1[34578]\d{9}/.test($val)