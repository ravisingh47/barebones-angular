angular.module("custom").service('CustomService', function($http) {
	this.exampleGET = function(query) {
		var params = {
			q: query
		};

		var path = 'http://httpbin.org/get';

		return $http({
			method: 'GET',
			url: path,
			params: params
		});
	};
});
