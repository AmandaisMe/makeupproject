window.onload=function(){
	var banner=document.getElementsByClassName('banner')[0];
	var ul=banner.getElementsByTagName('ul')[0];
	var speed;
	var children=ul.children;
	list=children.length;
	index=0;

	//获取元素高度
	height=ul.offsetHeight;
	cloneli=ul.firstElementChild.cloneNode(true);
	ul.appendChild(cloneli);
	setInterval(function(){
		index++;

		if(index>list){
			ul.style.top=0;
			index=1;

		}
		target=-height*index;
		clearInterval(ul.timer);

		ul.timer=setInterval(function(){

			var currenttop=ul.offsetTop;
			speed=(target-currenttop)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(currenttop==target){
				clearInterval(ul.timer);
				currenttop=target-speed;
			}
			ul.style.top=currenttop+speed+'px';

		},30)

	},3000);




}