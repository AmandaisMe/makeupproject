requirejs(['js/config.js'],function(){
	requirejs(['indexhome'],function(homepage){
		homepage.page();
		homepage.carousel();
		homepage.cook();
		homepage.cookie();
		
		
	})
})