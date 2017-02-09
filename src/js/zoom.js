requirejs(['js/config.js'],function(){
	requirejs(['jquery.zoom','indexhome'],function(z,homepage){
		$('.second-child').zoom();
		homepage.page();
		homepage.cookie();
	})
})