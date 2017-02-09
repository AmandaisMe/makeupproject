requirejs(['js/config.js'],function(){
	requirejs(['indexhome'],function(homepage){
		homepage.page();
		homepage.cookie();
		homepage.carousel();
	})
})