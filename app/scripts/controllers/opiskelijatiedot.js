'use strict';

/**
 * @ngdoc function
 * @name huutoaanestysFrontApp.controller:OppilasCtrl
 * @description
 * # OppilasCtrl
 * Controller of the huutoaanestysFrontApp
 */
angular.module('huutoaanestysFrontApp')	    
  .controller('OppilasCtrl', function ($scope, $http) {
	  
	  $http.get('http://localhost:8080/Huutoaanestys/opiskelijat.json')
      .success(function(data) { //success returns a JS object
        $scope.opiskelija = data[0]; // bind the JS object to $scope
		
      });
	  
	  .error(function(error) {
		  console.log('Virhe: hops.opiskelijat ' + error);
		  });
});
  
	  