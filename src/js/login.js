
$(function(){
	$('input').focus(function(){
		var val=$(this).val();
		if(val==''){
			$(this).parent().find('span').show();
		}
	})
	

		// if(!/^[\w\.\-]+@[a-zA-Z0-9\-]+(\.[a-zA-Z]+){1,2}$/.test($val)){
		// 	console.log(1)
		// 	// alert('请输入正确邮箱');
		// 	return false;
			
		// }
	
 	
})

	
// || !/^1[34578]\d{9}/.test($val)