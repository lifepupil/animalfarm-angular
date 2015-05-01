'use strict';

angular.module('poseidon')
.controller('DogsNewCtrl', function($scope, Dog, $state, $window) {

	$scope.addDog = function(obj) {
		var dog = new Dog(obj);
		dog.save()
		.then(function() {
			$state.go('dogs.list');
		})
		.catch(function(){
			$window.swal({title: 'Dog Error', text: 'There was a problem creating your dog. Please try again.', type: 'error'});
		});
	};

});
