$(function(){
				$parentdiv=$('.pro-contents').children('div');
				$count=$('.count');
				$count.html(Number($count.html())+1);

				$('.carlist').css({'cursor':'pointer'});
				var goods=[];
				var cookies=document.cookie.split('; ');
				console.log(cookies)
				for(var i=0;i<cookies.length;i++){
					var arr=cookies[i].split('=');
					console.log(arr)
					if(arr[0]==='goods'){
						goods=JSON.parse(arr[1]);
						// console.log(JSON.parse(arr[1]))
						
					}
				}
				$parentdiv.on('click','.carlist',function(){
					
					var carlist={};
					var parent=$(this).closest('div').parent();
					var currentid=parent.attr('id','guid-data');
					console.log(currentid)
					carlist.guid=currentid;
					carlist.title=parent.find('p').eq(1).html();
					carlist.imgurl=parent.find('img').attr('src');
					carlist.price=parent.find('big').html();
					carlist.disco=parent.find('del').html();
					carlist.qty=1;
					$count.html(Number($count.html())+1);
					if(goods.length==0){
						goods.push(carlist);
					}else{
						for(var j=0;j<goods.length;j++){
							if(goods[j].guid===currentid){
								
								goods[j].qty++;
								break;
							}

						}
						if(j==goods.length){
						goods.push(carlist);
						console.log(arr)	
						}
					}
					// Number($count.html())+1;
					
					var now=new Date();
					now.setDate(now.getDate()+7);
					document.cookie='goods='+JSON.stringify(goods)+';expires='+now;
				})

			})