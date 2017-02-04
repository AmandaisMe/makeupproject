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
	});
		
	
	$(':button').click(function(){
		console.log(1);

				$.post('php/freelogin.php',{
					phone:$('[name=phone]').val(),
					password: $('[name=password]').val(),
					confirm: $('[name=confirmpassword]').val(),

				}, function(response){
					
					var $obj = eval('(' + response + ')');
					console.log($obj);

					if($obj.state){
						window.location.href='index.html';
					} else {

						alert($obj.message);
						// location.reload();
					}
				})				
	})

	function random(){
		var randomnub=document.getElementsByClassName('random')[0];
		var arr='abcdefghijklmnopqrst123456';
		var str=arr.length;
		var res='';
		for(i=0;i<4;i++){
			randomnum=parseInt(Math.random()*str);
			res+=arr[randomnum];
			randomnub.innerHTML=res;
		}
		 

		}
	random();
	$('.change').click(function(){
		random();
	})
})