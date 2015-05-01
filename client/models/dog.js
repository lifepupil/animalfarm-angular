'use strict';

angular.module('poseidon')
.factory('Dog', function($http, nodeUrl) {

	function Dog(obj) {
		this.name = obj.name;
		this.age = obj.age;
		this.sex = obj.sex;
		this.photo = obj.photo;
	}


	// Dog.edit = function(dogId) {
	// 	return $http.put(nodeUrl + dogId + '/dogs/');
	// };

	Dog.prototype.edit = function() {
		return $http.put(nodeUrl + '/dogs/', this);
	};


	Dog.destroy = function(dogId) {
		return $http.delete(nodeUrl + '/dogs/' + dogId);
	};


	Dog.findById = function(dogId) {
		// console.log(nodeUrl + '/dogs/' + dogId));
		return $http.get(nodeUrl + '/dogs/' + dogId);
	};

	Dog.find = function() {
		return $http.get(nodeUrl + '/dogs');
	};

	Dog.prototype.save = function() {
		// the 'this' is your payload
		return $http.post(nodeUrl + '/dogs/', this);
	};

	return Dog;
});
