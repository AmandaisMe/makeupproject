requirejs(['js/config.js'],function(){
	requirejs(['indexhome','detail'],function(homepage,d){
		
		
		// homepage.cookie();

		d.detail();
		homepage.page();
	})
})