
$(function(){

	//导航条
   
   $(window).on('scroll',function(){
	   	$scroll=$(window).scrollTop();

		if($scroll>400){
			$('.navlist').fadeIn();
			
		}else {
			$('.navlist').fadeOut();
		}
   });
   //点击对应楼梯事件
    $('.navlist').on('click','li',function(){
    	// $index=$(this).index();
    	$index = $(this).index();
		scrollTop=$('body>div').eq($index-1).height()-300;

		$('body').animate({scrollTop:scrollTop});
    })


    //栏目side
    $sidenavli=$('.sidenav').find('li');
    

    $sidenavli.on('mouseleave',function(){
    	$sidenavli.find('div').fadeOut();
    })
    $sidenavli.on('mouseenter',function(){
    	   $this=$(this).index();
    		$sidenavli.eq($this).addClass('backcolor').siblings().removeClass('backcolor');
    		$sidenavli.eq($this).find('div').fadeIn();
    	
    }).trigger('mouseleave');

    $sidenavli.on('click',function(){
    	$this=$(this).index();
    	$sidenavli.eq($this).find('section').show();

    })
    // $sidecarspan.on('click','span',function(){
    // 	$('.sidecarlist').hide();
    // })

    $sidecarspan=$('.mycar').find('span');
    $sidecarspan.on('click',function(){
    	$('.sidecarlist').fadeOut();
    })

    $sidecarlist=$('.sidecarlist');
    $sidecount=$('.count').html();
    
    if($sidecount>0){
    	console.log(1)

    }

    	




    //submenu nav
    $headerrightli=$('.header-right').children('li');

    $headerrightli.on('mouseenter',function(){

    	$sunbindex=$(this).index();
    	// $headerrightli.eq($sunbindex).addClass('backgroundcolor').siblings('$headerrightli').hide();
    	$headerrightli.eq($sunbindex).find('.submenu').slideDown().siblings('.submenu').slideUp();
    	// $headerrightli.eq($sunbindex).find('span').rotate('45');

    }).on('mouseleave',function(){
    	$headerrightli.eq($sunbindex).find('.submenu').slideUp();

    })


	//header
	$img=$('.picitem').find("img");
	$big=$('#bigbanner');
	$small=$("#minbanner");
	$img.on('click',function(){
		$big.css({opacity:1,'position': 'relative'}).show();
		$small.hide().css({opacity:0});
		$('.picitem').find("img").attr('src','img/imgindex/unfold.jpg').addClass('unfold').
		on('click',function(){
		console.log(1)
		$big.css({opacity:0}).hide();
		$small.show().css({opacity:1});
		$('.picitem').find("img").attr('src','img/imgindex/fold.jpg');
		})


	});

	

	


	// brandlist 
	$submenulist=$('.submenulist');
	$li=$submenulist.parent();
	$li.on('mouseenter',function(){
		$submenulist.animate({height:'280px'},1000);
		
	});

	
	

  //brandlist
	$span=$('.brand').find('span');
	$prolist=$('.prolist').children();
	// console.log($prolist)
	// console.log($span);\
	$span.on('mouseenter',function(){

		$index=$(this).index();
		
		
		$prolist.eq($index).show().siblings().hide();

	});
	
	
	//nav
	
	$sea=$('.seas');
	$sea.on('mouseenter',function(){
		$sea.find('img').attr('src','img/imgindex/home_overseas_current.gif');
	}).on('mouseleave',function(){
		$sea.find('img').attr('src','img/imgindex/home_overseas.gif');
	});

	$move=$('#mainright').children();
	$move.on('mouseenter',function(){
		$index=$(this).index();
		$move.eq($index).show(300,function(){

		$move.eq($index).css('width','100px').animate({'left':'-100px'});
		})
		// .on('mouseleave',function(){
		// // $move.addClass('mainnav-right');	
		// $move.attr('id','mainright');
		// })
		
		
	});

	
});


