define([
	'angular',
	'ngRoute'
], function(angular) {
	'use strict';
	return angular.module("custom.routes", [
		'ngRoute'
	]).config(['$routeProvider', function($routeProvider) {
		console.log("Routes initialized");
		$routeProvider.when("/", {controller: 'CustomController', templateUrl: 'scripts/custom/custom.tpl.html'});
	}]);
});
