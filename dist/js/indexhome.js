define(['jquery'], function() {
    return {
        page: function() {
            $(function() {
                //导航条
                $(window).on('scroll', function() {
                    $scroll = $(window).scrollTop();

                    if ($scroll > 400) {
                        $('.navlist').fadeIn();

                    } else {
                        $('.navlist').fadeOut();
                    }
                });
                //点击对应楼梯事件
                $('.navlist').on('click', 'li', function() {
                    // $index=$(this).index();
                    $index = $(this).index();
                    scrollTop = $('body>div').eq($index - 1).height() - 300;

                    $('body').animate({ scrollTop: scrollTop });
                })


                //栏目side
                $sidenavli = $('.sidenav').find('li');


                $sidenavli.on('mouseleave', function() {
                    $sidenavli.find('div').fadeOut();
                })
                $sidenavli.on('mouseenter', function() {
                    $this = $(this).index();
                    $sidenavli.eq($this).addClass('backcolor').siblings().removeClass('backcolor');
                    $sidenavli.eq($this).find('div').fadeIn();

                }).trigger('mouseleave');

                $sidenavli.on('click', function() {
                        $this = $(this).index();
                        $sidenavli.eq($this).find('section').show();

                    })
                    // $sidecarspan.on('click','span',function(){
                    //  $('.sidecarlist').hide();
                    // })

                $sidecarspan = $('.mycar').find('span');
                $sidecarspan.on('click', function() {
                    $('.sidecarlist').fadeOut();
                })

                $sidecarlist = $('.sidecarlist');
                $sidecount = $('.count').html();

                // if($sidecount>0){
                //  console.log(1)

                // }






                //submenu nav
                $headerrightli = $('.header-right').children('li');

                $headerrightli.on('mouseenter', function() {

                    $sunbindex = $(this).index();
                    // $headerrightli.eq($sunbindex).addClass('backgroundcolor').siblings('$headerrightli').hide();
                    $headerrightli.eq($sunbindex).find('.submenu').slideDown().siblings('.submenu').slideUp();
                    // $headerrightli.eq($sunbindex).find('span').rotate('45');

                }).on('mouseleave', function() {
                    $headerrightli.eq($sunbindex).find('.submenu').slideUp();

                })


                //header
                $img = $('.picitem').find("img");

                $img.on('click', function() {
                    $('#bigbanner').css({ opacity: 1, 'position': 'relative' }).show();
                    $("#minbanner").hide().css({ opacity: 0 });
                    $('.picitem').find("img").attr('src', 'img/imgindex/unfold.jpg').addClass('unfold').
                    on('click', function() {
                        $('#bigbanner').css({ opacity: 0 }).hide();
                        $("#minbanner").show().css({ opacity: 1 });
                        $('.picitem').find("img").attr('src', 'img/imgindex/fold.jpg');
                    })


                });






                // brandlist 
                $submenulist = $('.submenulist');
                $li = $submenulist.parent();
                $li.on('mouseenter', function() {
                    $submenulist.animate({ height: '280px' }, 1000);

                });


                //brandlist
                $span = $('.brand').find('span');
                $prolist = $('.prolist').children();
                // console.log($prolist)
                // console.log($span);\
                $span.on('mouseenter', function() {

                    $index = $(this).index();


                    $prolist.eq($index).show().siblings().hide();

                });


                //nav

                $sea = $('.seas');
                $sea.on('mouseenter', function() {
                    $sea.find('img').attr('src', 'img/imgindex/home_overseas_current.gif');
                }).on('mouseleave', function() {
                    $sea.find('img').attr('src', 'img/imgindex/home_overseas.gif');
                });

                $move = $('#mainright').children();
                $move.on('mouseenter', function() {
                    $index = $(this).index();
                    $move.eq($index).show(300, function() {

                        $move.eq($index).css('width', '100px').animate({ 'left': '-100px' });
                    })

                });


                //producelist


                $('.pro-contents').children().on('mouseenter', function() {
                    // $this=$(this).index();
                    $('.functionone', $(this)).css({ display: 'block' });
                    $('.functionone', $(this)).prev().children().css({ opacity: 0.5 })

                }).on('mouseleave', function() {
                    $('.functionone', $(this)).css({ display: 'none' });
                    $('.functionone', $(this)).prev().children().css({ opacity: 1 })
                })


                //introduce
                var $index=0;
                $('.next').on('click', function() {
                    $index++;
                    console.log(1)
                    $('.introduce').animate({'left':-1100*$index},1000);
                    console.log(-1100*$index)
                    
                    if($index>=3){
                        $index=0;
                    }

                })
                
                $('.prev').on('click', function() {
                    $index--;
                    $('.introduce').animate({ 'left':1100*$index }, 1000);
                    console.log(1100*$index)
                    console.log($index)
                    if($index<=-3){
                        $index=0;
                    }
                    // if($inde=0){
                    //     $('.introduce').animate({ 'left':'-1100px' }, 1000);

                    // }

                });
                $('.introduce li').on('mouseenter', function() {

                    $this = $(this).index();
                    $('.introduce li').eq($this).find("img").css({ opacity: 0.7 });

                }).on('mouseleave', function() {

                    $('.introduce li').eq($this).find("img").css({ opacity: 1 });

                })
                $('.maincontent').find('ul li').on('mouseenter', function() {
                    $this = $(this).index();
                    $('.maincontent').find('ul li').eq($this).css({ opacity: 0.7 });

                }).on('mouseleave', function() {
                    $('.maincontent').find('ul li').eq($this).css({ opacity: 1 });

                });
            });
        },
        cookie: function() {
            $(function() {
                //购物车
                $goodslist = $('.goodslist');
                var goods;
                // var sum;
                $cookies = document.cookie.split('; ');
                for (var i = 0; i < $cookies.length; i++) {
                    var arr = $cookies[i].split('=');
                    console.log(arr)
                    if (arr[0] === 'goods') {

                        goods = JSON.parse(arr[1]);
}

                    
                }


                if (goods) {
                    $ul = $('<ul/>').addClass('goodslists').appendTo($('.goodslist'));
                    var sum = 0;
                    var pricenum = 0;
                    var less;
                    // var add;

                    for (var i = 0; i < goods.length; i++) {


                        $('<li/>').addClass('goodsmessage').html('<div>' + '<a>' + '<img src=' + goods[i].imgurl + '>' + '</a>' + '<span class="title">' + goods[i].title + '</span>' + '</div>' + '<div>' + '<span class="price">' + goods[i].price + '</span>' + '<i class="less">' + "-" + '</i>' + '<strong class="num">' + goods[i].qty + '</strong>' + '<em class="add">' + "+" + '</em>' + '</span >' + '<span class="total">' + goods[i].price * goods[i].qty + '</span>' + '<span>' + '<strong>' + '删除' +
                            '</strong>' + '<big>' + '收藏' + '</big>' + '</div>').appendTo($('.goodslists'));


                        sum += goods[i].price * goods[i].qty;
                        pricenum += goods[i].qty;

                        $('.count').html(pricenum);
                        $('.cleardiv').find('strong').html(sum);
                        $('.cleardiv').find('big').html(pricenum);
                    }
                    //数量减少
                    $('.goodsmessage').on('click', 'i', function() {
                        $self = $(this);
                        $less = $(this).siblings('.num').html();


                        if ($less <= 0) {
                            $less == 0;
                        } else {
                            $less--;
                            $(this).siblings('.num').html($less);
                            pricenum--;
                            $(this).siblings('.totle').html($self.siblings('.price').html()*$less);

                            $.each(goods, function(index, el) {
                                $imgUrl = $self.closest('li').find('img').attr('src');
                                if (el.imgurl == $imgUrl) {
                                    el.qty -= 1;

                                }

                            });
                             var $sumprice=$('.cleardiv').find('strong').html();

                                var currentprice=$self.siblings('.price').html();
                                console.log(currentprice)
                                var sumnumber=$sumprice-currentprice
                                console.log(sumnumber)
                                $('.cleardiv').find('strong').html(sumnumber);
                          
                        }

                        document.cookie = 'goods=' + JSON.stringify(goods);
                        $('.cleardiv').find('big').html(pricenum);
                        
                    });

                    $('.goodsmessage').on('click', 'em', function() {
                        var $self = $(this);
                        $less = $(this).siblings('.num').html();
                        $less++;
                        pricenum++;
                        $(this).siblings('.num').html($less);
                        $(this).siblings('.totle').html($self.siblings('.price').html()*$less);
                        $('.cleardiv').find('big').html(pricenum);
                        $('.cleardiv').find('strong').html(sum);
                        $('.cleardiv').find('big').html(pricenum);
                        $.each(goods, function(index, el) {
                            $imgUrl = $self.closest('li').find('img').attr('src');
                            if (el.imgurl == $imgUrl) {
                                el.qty += 1;
                            }
                        });
                        
                        document.cookie = 'goods=' + JSON.stringify(goods);
                    });
                    
                    


                }


                $('.allclear').on('click', function() {
                    $('.goodslists').remove();
                    var now = new Date();
                    now.setDate(now.getDate() - 3);
                    document.cookie = 'goods=' + JSON.stringify(goods) + ';expires=' + now;


                });

                $strong = $('.goodsmessage').find('strong');
                $big = $('.goodsmessage').find('big');

                $strong.on('click', function() {
                    $this = $(this).closest('li').index();
                    console.log($this);
                    var $price = $('.cleardiv').find('strong').html() - 0 - $('.goodsmessage').eq($this).find('.total').html() - 0;

                    $('.cleardiv').find('strong').html($price);


                    $title = $('.goodsmessage').eq($this).find('.title').html();
                    console.log($title)

                    for (var i = 0; i < goods.length; i++) {
                        // 找出要删除的商品
                        if (goods[i].title === $title) {
                            goods.splice(i, 1);
                            break;
                        }
                    }

                    // 更新cookie
                    document.cookie = 'goods=' + JSON.stringify(goods);
                    // console.log($('.goodsmessage')[$this])

                    $('.goodsmessage').eq($this).remove();
                })

                // var now=new Date();
                // now.setDate(now.getDate()+3);
                // document.cookie='goods='+JSON.stringify()+';expries='+now;
            })
        },
        carousel: function() {
            var banner = document.getElementsByClassName('banner')[0];
            var ul = banner.getElementsByTagName('ul')[0];
            var speed;
            var children = ul.children;
            list = children.length;
            index = 0;

            //获取元素高度
            height = ul.offsetHeight;
            cloneli = ul.firstElementChild.cloneNode(true);
            ul.appendChild(cloneli);
            setInterval(function() {
                index++;

                if (index > list) {
                    ul.style.top = 0;
                    index = 1;

                }
                target = -height * index;
                clearInterval(ul.timer);

                ul.timer = setInterval(function() {

                    var currenttop = ul.offsetTop;
                    speed = (target - currenttop) / 10;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if (currenttop == target) {
                        clearInterval(ul.timer);
                        currenttop = target - speed;
                    }
                    ul.style.top = currenttop + speed + 'px';

                }, 30)

            }, 3000);


            //cookies

            var introduce = document.getElementsByClassName('introduce')[0];
            var count = document.getElementsByClassName('count')[0];

            var goods = [];
            var cookies = document.cookie.split('; ');


            for (var i = 0; i < cookies.length; i++) {

                var arr = cookies[i].split('=');
                if (arr[0] === 'goods') {

                    goods = JSON.parse(arr[1]);

                }
            }

            introduce.onclick = function(e) {

                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.className.toLowerCase() === 'carlist') {
                    var currentli = target.parentElement.parentElement;

                    var children = currentli.children;


                    var carlist = {};

                    carlist.qty = 1;
                    carlist.imgurl = children[0].children[0].getAttribute('src');
                    console.log(carlist.imgurl)
                    carlist.title = children[1].innerHTML;
                    carlist.price = children[2].children[0].children[0].innerHTML;
                    carlist.disco = children[2].children[0].children[1].innerHTML;



                    count.innerHTML = Number(count.innerHTML) + 1;
                    console.log(count.innerHTML)
                    console.log(carlist.title);
                    if (goods.length === 0) {

                        goods.push(carlist);

                    } else {
                        for (var j = 0; j < goods.length; j++) {

                            if (carlist.title === goods[j].title) {

                                goods[j].qty++;

                                break;
                            }
                        }
                        console.log(j);
                        console.log(goods.length);
                        if (j === goods.length) {

                            goods.push(carlist);

                        }

                    }
                    var now = new Date();
                    now.setDate(now.getDate() + 3)

                    document.cookie = 'goods=' + JSON.stringify(goods) + ';expires=' + now;

                }
            }
        },
        cook: function() {
            $(function() {
                $parentdiv = $('.pro-contents').children('div');
                $count = $('.count');


                $('.carlist').css({ 'cursor': 'pointer' });
                var goods = [];
                var cookies = document.cookie.split('; ');
                console.log(cookies)
                for (var i = 0; i < cookies.length; i++) {
                    var arr = cookies[i].split('=');
                    console.log(arr)
                    if (arr[0] === 'goods') {
                        goods = JSON.parse(arr[1]);
                        // console.log(JSON.parse(arr[1]))

                    }
                }
                $parentdiv.on('click', '.carlist', function() {

                    var carlist = {};
                    var parent = $(this).closest('div').parent();
                    // var currentid=parent.attr('id','guid-data');
                    // console.log(currentid)
                    // carlist.guid=currentid;
                    carlist.title = parent.find('p').eq(1).html();
                    carlist.imgurl = parent.find('img').attr('src');
                    carlist.price = parent.find('big').html();
                    carlist.disco = parent.find('del').html();
                    carlist.qty = 1;
                    $count.html(Number($count.html()) + 1);
                    if (goods.length == 0) {
                        goods.push(carlist);
                    } else {
                        for (var j = 0; j < goods.length; j++) {
                            if (carlist.imgurl === goods[j].imgurl) {

                                goods[j].qty++;
                                break;
                            }

                        }
                        if (j == goods.length) {
                            goods.push(carlist);
                            console.log(arr)
                        }
                    }
                    // Number($count.html())+1;

                    var now = new Date();
                    now.setDate(now.getDate() + 7);
                    document.cookie = 'goods=' + JSON.stringify(goods) + ';expires=' + now;
                })

            })
        }
    }
})
