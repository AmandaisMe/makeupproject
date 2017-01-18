// brandlist 
$(function(){
	$span=$('.brand').find('span');
	$prolist=$('.prolist').children();
	// console.log($prolist)
	// console.log($span);\
	$span.on('mouseenter',function(){

		$index=$(this).index();
		// console.log($index)
		
		$prolist.eq($index).show().siblings().hide();

	});
	
})