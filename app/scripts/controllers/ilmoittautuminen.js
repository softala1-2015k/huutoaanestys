'use strict';

/**
 * @ngdoc function
 * @name huutoaanestysFrontApp.controller:HopsCtrl
 * @description
 * # HopsCtrl
 * Controller of the huutoaanestysFrontApp
 */
angular.module('huutoaanestysFrontApp')
  .controller('IlmoittautuminenCtrl', function ($scope, $http) {
    $http.get('json/toteutukset.json')
    	.success(function(data) {
    		$scope.toteutukset = data;
    		
    	});
    $scope.formData = {};

});
