window.onload=function(){
	var produceslist=document.getElementsByClassName('produceslist')[0];
	var pageright=document.getElementsByClassName('page-right')[0];
	var pagespan=pageright.getElementsByClassName('numpro')[0];
	console.log(pagespan.innerHTML)
	var xhr=new XMLHttpRequest();
	//接受数据
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status===200){
			var res=JSON.parse(xhr.responseText);
			pagespan.innerHTML=res.length;
			var arr=[];
			for(var i=0;i<res.length;i++){

				// var smallli=document.createElement("li");
				empty='<li>'+'<a href='+res[i].href+'>'+'<img src='+res[i].img+'>'+'</a>'+'<p>'+res[i].title+'</p>'+'<p>'
				+'<big>'+res[i].price+'</big>'
				+'<del>'+res[i].disco+'</del>'+'<strong>'+"加入购物车"+'</strong>'+'</p>'+'</li>';
				
				// produceslist.appendChild(smallli);
				arr.push(empty);
			}
			console.log(arr)
			var pageleng=8;
			var page=Math.ceil(res.length/pageleng);
			//8个一组
			
			console.log(length)
			var div=document.createElement('div');
			div.className='pagediv';
			produceslist.parentElement.appendChild(div);
			for(var i=0;i<page;i++){
				var span=document.createElement('span');
				span.className='pagebuttom';
				span.innerHTML=i+1;
				div.appendChild(span);
				var boxli=document.createElement('li');
				boxli.className='boxli';
				boxli.innerHTML=arr.splice(0,pageleng);
				produceslist.appendChild(boxli);
				

			}

			$('.pagebuttom').on('click',function(){
				$this=$(this).index();
				$('.boxli').eq($this).css({display:'block'}).siblings().css({display:'none'});
			})


			
			
		}
	}

	xhr.open('get',"php/object.json",true);
	xhr.send();
}

