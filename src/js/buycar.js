
$(function(){
	
	//购物车
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
			

			$('<li/>').addClass('goodsmessage').html('<div>'+'<a>'+'<img src='+goods[i].imgurl+'>'+'</a>'+'<span class="title">'+goods[i].title+'</span>'+'</div>'
			+'<div>'+'<span>'+goods[i].price+'</span>'+'<i class="less">'+"-"+'</i>'+'<strong class="num">'+goods[i].qty+'</strong>'+'<em class="add">'+"+"+'</em>'+'</span >'+'<span class="total">'+goods[i].price*goods[i].qty+'</span>'+'<span>'+'<strong>'+'删除'+
			'</strong>'+'<big>'+'收藏'+'</big>'+'</div>').appendTo($('.goodslists'));
			
			
			sum+=goods[i].price*goods[i].qty;
			pricenum+=goods[i].qty;
			

		}

		$('.cleardiv').find('strong').html(sum);
		$('.cleardiv').find('big').html(pricenum);

		//数量减少
		$('.goodsmessage').on('click','i',function(){
				$less=$(this).siblings('.num').html();
				if($less<=0){
					$less==0;
				}else{
					$less--;
					$(this).siblings('.num').html($less)
				}
				$lessnum=pricenum-$less;
			$('.cleardiv').find('big').html(pricenum);

			});
		
		$('.goodsmessage').on('click','em',function(){

			$less=$(this).siblings('.num').html();
				$less++;
				$(this).siblings('.num').html($less);
				

		})
		
	}	
		
		
		

		$('.allclear').on('click',function(){
				$('.goodslists').remove();
				var now=new Date();
				now.setDate(now.getDate()-3);
				document.cookie ='goods=' + JSON.stringify(goods)+';expires='+now;

					
		});

		$strong=$('.goodsmessage').find('strong');
		$big=$('.goodsmessage').find('big');

		$strong.on('click',function(){
			$this=$(this).closest('li').index();
			console.log($this);
			var $price=$('.cleardiv').find('strong').html()-0-$('.goodsmessage').eq($this).find('.total').html()-0;
			
			$('.cleardiv').find('strong').html($price);


			$title=$('.goodsmessage').eq($this).find('.title').html();
			console.log($title)

			for(var i=0;i<goods.length;i++){
					// 找出要删除的商品
					if(goods[i].title === $title){
						goods.splice(i,1);
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