window.onload=function(){

	var introduce=document.getElementsByClassName('introduce')[0];
	var count=document.getElementsByClassName('count')[0];
	
	var goods=[];
	var cookies=document.cookie.split('; ');
	
	console.log(cookies)
	for(var i=0;i<cookies.length;i++){

		var arr=cookies[i].split('=');
		if(arr[0]==='goods'){

			// goods=JSON.parse(arr[1]);
			console.log(arr)
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
			carlist.imgurl=children[0].innerHTML;
			console.log(carlist.imgurl)
			carlist.title=children[1].innerHTML;
			
			carlist.price=children[2].children[0].children[0].innerHTML;
			carlist.disco=children[2].children[0].children[1].innerHTML;
			
			
			console.log(carlist)
			if(goods.length===0){
				goods.push(carlist);

			}else {
				for(var i=0;i<goods.length;i++){

					if(goods[i].title===carlist.title){

						goods[i].qty++;

						break;
					}
				}
				
				if(i===goods.lenght){
					goods.push(carlist);

				}
				
			}
			
			document.cookie='goods='+JSON.stringify(goods);
			
		}
	}

}