define(['jquery'],function(){
    return{
        login:function(){
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
              
                //php请求
                $('.header-left').find('li').eq(1).html()
                $('#submit').click(function() {
                    _username = $('[name=username]');
                    _password = $('[name=password]');
                    pass = _password.val();
                    username = _username.val();

                    $.post("php/login.php", {
                        phone: username,
                        password: pass
                    }, function(res) {
                       console.log(typeof res)
                       // data=JSON.parse(res)
                       // split(res)
                       console.log(res)
                         console.log(res.substring(11,21))
                          var data= res.substring(11,21)
                        if (res.length>39) {
                            // window.location.href ='index.html';
                            alert('登录成功');
                            // setCookie
                          var data= res.substring(11,21)
                          
                           console.log(data)
                           $hello=$('.header-left').find('li').eq(1).html('<span>'+"你好!欢迎"+'</span>');
                           $ph=$('.header-left').find('li').eq(2).html('<span>'+data+"登录"+'</span>');

                            
                           setCookie();
                           getCookie();
                        } else {
                            alert('密码或用户名错误');
                            
                        }
                       
                    })
                })
                setCookie=function(phone, password) {
                                var days = 10;
                                var ex = new Date();
                                ex.setTime(ex.getTime() + days * 24 * 60 * 60 * 1000);
                                document.cookie = phone + "=" + password + ";expires=" + ex;
                             },
                            getCookie=function(phone) {
                                var a;
                                var reg = new RegExp("(^|)" + phone + "=([^;]*)(;|$)");
                                if(a = document.cookie.match(reg)) {
                                    return a[2];
                                }
                            }
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



        }
    }
})