angular.module("custom.routes", [
	'ngRoute'
]).config(function($routeProvider) {
	console.log("Routes initialized");
	$routeProvider.when("/", {controller: 'CustomController', templateUrl: 'scripts/custom/custom.tpl.html'});
});
