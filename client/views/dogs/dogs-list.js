'use strict';

angular.module('poseidon')
.controller('DogsListCtrl', function($scope, Dog) {
	Dog.find()
	.then(function(response){
		// console.log(response.data.dogs);
		$scope.dogs = response.data.dogs;
	});

	$scope.destroy = function(obj) {
		// var dog = new Dog(obj);
		Dog.destroy(obj._id)
		.then(function(response) {
			_.remove($scope.dogs, function(dog) {
				console.log(dog);
				return dog._id === response.data._id;
			});
		});
	};
});
