$(function() {
    $(':input').blur(function() {
        _username = $('[name=username]');
        _password = $('[name=password]');
        _identifyingcode=$('[name=identifyingcode]');
        identify= _identifyingcode.val();
        password = _password.val();
        username = _username.val();
        random=$('.random').html();

        if(!/^1[34578]\d{9}$/.test(username)){

			_username.siblings('span').show();
			_username.focus();
			username=''
		}else{
			_username.siblings('span').hide();
		}

       if(!/^[a-zA-Z\w]{6,16}$/.test(password)){
			_password.siblings('span').show();
			password='';
		}else{
			_password.siblings('span').hide();
		}

        if(identify!=random){
        	_identifyingcode.siblings('span').show();
        }else{
        	_identifyingcode.siblings('span').hide();
        }



    })




    // if(!/^[\w\.\-]+@[a-zA-Z0-9\-]+(\.[a-zA-Z]+){1,2}$/.test($val)){
    // 	console.log(1)
    // 	// alert('请输入正确邮箱');
    // 	return false;

    // }
    $('#submit').click(function() {
        _username = $('[name=username]');
        _password = $('[name=password]');
        pass = _password.val();
        username = _username.val();

        $.post('php/login.php', {
            phone: username,
            password: pass
        }, function(res) {
           console.log(res)
            if (res.length>3) {
                window.location.href = 'index.html';
                console.log(1)
            } else {
                alert('密码或用户名错误');
                
            }
            //  var $obj = eval('('+res+')');

            // console.log($obj);

            // if($obj.state){
            //     console.log(1)
            //     window.location.href='index.html';
            // } else {

            //     alert($obj.message);
            //     location.reload();
            // }
 
        })
    })

    //随机数

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


