'use strict';

/**
 * @ngdoc function
 * @name huutoaanestysFrontApp.controller:HopsCtrl
 * @description
 * # HopsCtrl
 * Controller of the huutoaanestysFrontApp
 */
angular.module('huutoaanestysFrontApp')
  .controller('HopsCtrl', function ($scope, $http) {
    
	   $http.get('json/opiskelijat.json')
	      .success(function(data) { //success returns a JS object
	        $scope.opiskelija = data[0]; // bind the JS object to $scope
	      });
	    
  });
