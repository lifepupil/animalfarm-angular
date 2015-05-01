'use strict';

angular.module('poseidon')
.controller('DogsShowCtrl', function($scope, $state, Dog) {
	Dog.findById($state.params.dogId)
	.then(function(response) {
		$scope.dog = response.data;
		console.log(response.data);
	});
});
