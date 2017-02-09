requirejs.config({
	baseUrl:'js',
	paths:{
		"jquery":"jquery-3.1.1",
		'indexhome':'../../dist/js/indexhome',
		'detail':'detail',
		'login':'login',
		'register':'freelogin',
		'home':'index'

	},
	shim:{
		'jquery.zoom':{
			dep:['jquery'],
			exports:'jQuery.fn.zoom'
		}
	}
})