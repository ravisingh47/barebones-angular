angular.module('custom', [
    'ui.bootstrap',
    'ngAnimate',
    'ngTouch',
	'custom.routes'
    ])
.config(function() {
	console.log("App initialized");
});

