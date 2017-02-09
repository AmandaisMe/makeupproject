requirejs(['js/config.js'],function(){
	requirejs(['indexhome'],function(homepage,d){
		
		
		homepage.cookie();

		// d.detail();
		homepage.page();
	})
})