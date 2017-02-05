window.onload=function(){
	
	var goodslist=document.getElementsByClassName('goodslist')[0];
	var goods;
	var cookies=document.cookie.split('; ');
	
	for(var i=0;i<cookies.length;i++){
		var arr=cookies[i].split('=');

		if(arr[0]==='goods'){

			goods=JSON.parse(arr[1]);
			
		}
	}
	
	

	if(goods){
		var ul=document.createElement('ul');
		for(var i=0;i<goods.length;i++){
			var li=document.createElement('li');
			li.innerHTML='<span>'+goods[i].title+'</span>';
			
			console.log(goods[i].title)
			ul.appendChild(li);
			
		}
		goodslist.appendChild(ul);

	}
}