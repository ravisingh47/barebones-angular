require.config({
	baseUrl: 'scripts',
	paths: {
		domReady: 'vendor/js/domReady',
		angular: 'vendor/js/angular',
		ngAnimate: 'vendor/js/angular-animate',
		ngAria: 'vendor/js/angular-aria',
		ngRoute: 'vendor/js/angular-route',
		ngMaterial: 'vendor/js/angular-material',
		ngCookies: 'vendor/js/angular-cookies',
		custom: 'custom'
	},
	shim: {
		ngAnimate: { deps: ['angular']},
		ngAria: { deps: ['angular']},
		ngRoute: { deps: ['angular']},
		ngCookies: { deps: ['angular']},
		ngMaterial: { deps: ['angular', 'ngAnimate', 'ngAria']},
		angular: { exports: 'angular'},
	},
	deps: ['boot']
});
