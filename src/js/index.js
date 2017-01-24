// brandlist 
$(function(){
	$submenulist=$('.submenulist');
	$li=$submenulist.parent();
	$li.on('mouseenter',function(){
		$submenulist.animate({height:'280px'},1000);
		
	});

	//轮播图
	$('.banner').find('ul').gdscarousel({width:'100%',height:'300px',page:'center',
		imglist:['img/imgindex/banner1.jpg','img/imgindex/banner2.jpg','img/imgindex/banner3.jpg']});

	$span=$('.brand').find('span');
	$prolist=$('.prolist').children();
	// console.log($prolist)
	// console.log($span);\
	$span.on('mouseenter',function(){

		$index=$(this).index();
		
		
		$prolist.eq($index).show().siblings().hide();

	});
	
	//producelist
		$img=$('.producelist').find('img');
		$prod=$('.functionone');
		
	$img.on('mouseenter',function(){
		// $index=$(this).index();
		// .parent().siblings().find('.functionone').hide()
		$prod.show();
	}).on('mouseleave',function(){
		$prod.hide();
	});

	// $sub=$('.submenu');
	
	// $min=$('.header-right').children().find('span');
	
	// $min.on('mouseenter',function(){
	// 	$index=$(this).index();
	// 	$sub.eq($index).slideDown(200);
	
	// })
	
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

		$move.eq($index).css('width','100px').animate({'left':100});
		})
		// .on('mouseleave',function(){
		// // $move.addClass('mainnav-right');	
		// $move.attr('id','mainright');
		// })
		
		
	})

});


