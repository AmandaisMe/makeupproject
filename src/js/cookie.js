requirejs(['js/config.js'],function(){
	
			document.addEventlistener('DOMContentLoaded',function(){
				var introduce=document.getElementsByClassName('introduce')[0];
				var count=document.getElementsByClassName('count')[0];
				
				var goods=[];
				var cookies=document.cookie.split('; ');
				
				
				for(var i=0;i<cookies.length;i++){

					var arr=cookies[i].split('=');
					if(arr[0]==='goods'){

						goods=JSON.parse(arr[1]);
						
					}
				}
				
				introduce.onclick=function(e){
					
					e=e ||window.event;
					var target=e.target || e.srcElement;
					if(target.className.toLowerCase()==='carlist'){
						var currentli=target.parentElement.parentElement;
						
						var  children=currentli.children;
						

						var carlist={};
					
						carlist.qty=1;
						carlist.imgurl=children[0].children[0].getAttribute('src');
						console.log(carlist.imgurl)
						carlist.title=children[1].innerHTML;
						
						carlist.price=children[2].children[0].children[0].innerHTML;
						carlist.disco=children[2].children[0].children[1].innerHTML;
						
						// var num = count.innerHTML;

						count.innerHTML=Number(count.innerHTML)+1;
						console.log(carlist.title);
						if(goods.length===0){

							goods.push(carlist);

						}else {
							for(var j=0;j<goods.length;j++){

								if(carlist.title===goods[j].title){

									goods[j].qty++;

									break;
								}
							}
							console.log(j);
							console.log(goods.length);
							if(j===goods.length){
								
								goods.push(carlist);

							}
							
						}
						var now=new Date();
						now.setDate(now.getDate()+3)
						document.cookie='goods='+JSON.stringify(goods)+';expires='+now;
						
					}
				}


		})

})