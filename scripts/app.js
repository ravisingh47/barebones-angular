define([
	'angular',
	'ngRoute',
	'ngCookies',
	'ngMaterial',
	'custom/routes',
	'custom/index'
], function(angular) {
	'use strict';
	return angular.module('custom', [
		'ngCookies',
		'ngMaterial',
		'custom.routes'])
	.config([function() {
		console.log("App initialized");
	}]);
});
