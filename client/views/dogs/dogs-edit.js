'use strict';

angular.module('poseidon')
.controller('DogsEditCtrl', function($scope, $state, Dog, $window) {

	Dog.findById($state.params.dogId)
	.then(function(response) {
		$scope.dog = response.data;
		console.log(response.data);
	});

	// $scope.updateDog = function(obj) {
	// 	Dog.edit(obj._id)
	// 	.then(function(response) {
	// 		_.remove($scope.dogs, function(dog) {
	// 			console.log(dog);
	// 			return dog._id === response.data._id;
	// 		});
	// 	})
	// 	.catch(function(){
	// 		$window.swal({title: 'Dog Error', text: 'There was a problem UPDATING your dog. Please try again.', type: 'error'});
	// 	});
	// };

	$scope.updateDog = function(obj) {
		var dog = new Dog(obj);
		dog.edit()
		.then(function() {
			$state.go('dogs.list');
		})
		.catch(function(){
			$window.swal({title: 'Dog Error', text: 'There was a problem UPDATING your dog. Please try again.', type: 'error'});
		});
	};



});
