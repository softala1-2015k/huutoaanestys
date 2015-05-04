 'use strict';

/**
 * @ngdoc function
 * @name huutoaanestysFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the huutoaanestysFrontApp
 */
angular.module('huutoaanestysFrontApp')
  .controller('KurssihakuCtrl', function ($scope, $http) {
	  
	  $http.get('http://localhost:8080/Huutoaanestys/kurssit.json')
      .success(function(data) { //success returns a JS object
        $scope.kurssit = data; // bind the JS object to $scope
		
      });
});
