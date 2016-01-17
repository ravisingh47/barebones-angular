angular.module("custom").controller('CustomController', function($scope, CustomService) {
	$scope.data = {};

	$scope.initialize = function() {
		CustomService.exampleGET().then(function(response) {
			$scope.data = response.data;
		});
	};

	$scope.initialize();
});
