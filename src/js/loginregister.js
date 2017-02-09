requirejs(['js/config.js'],function(){
	requirejs(['login','register','home'],function(l,r,h){
		l.login();
		r.register();
		h.home();
	
	})
})

