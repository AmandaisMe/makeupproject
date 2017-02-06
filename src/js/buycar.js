
$(function(){

	$goodslist=$('.goodslist');
	var goods;
	$cookies=document.cookie.split('; ');
	for(var i=0;i<$cookies.length;i++){
		var arr=$cookies[i].split('=');

		if(arr[0]==='goods'){

			goods=JSON.parse(arr[1]);
			
		}
	}
	

	if(goods){
		$ul=$('<ul/>').addClass('goodslists').appendTo($('.goodslist'));
		var sum=0;
		var pricenum=0

		for(var i=0;i<goods.length;i++){
			

			$('<li/>').addClass('goodsmessage').html('<div>'+'<a>'+'<img src='+goods[i].imgurl+'>'+'</a>'+'<span>'+goods[i].title+'</span>'+'</div>'
			+'<div>'+'<span>'+goods[i].price+'</span>'+'<span>'+goods[i].qty+'</span>'+'<span>'+goods[i].price*goods[i].qty+'</span>'+'<span>'+'<big>'+'删除'+
			'</big>'+'<big>'+'收藏'+'</big>'+'</div>').appendTo($('.goodslists'));
			
			
			sum+=goods[i].price*goods[i].qty;
			pricenum+=goods[i].qty;
		
		}

		$('.cleardiv').find('strong').html(sum);
		$('.cleardiv').find('big').html(pricenum);
		$('.count').text(pricenum);
		
	}


	$('.goodsmessage').children('big')
})