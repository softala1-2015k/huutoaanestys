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
	  
    /*
	  $http.get('http://proto317.haaga-helia.fi:8080/huutoaanestys_back/opiskelijat.json')
      .success(function(data) { //success returns a JS object
        $scope.opiskelijat = data; // bind the JS object to $scope
  });
	  */
	  
	  $http.get('json/kurssit.json')
      .success(function(data) { //success returns a JS object
        $scope.opiskelija = data[0]; // bind the JS object to $scope
  })
  .error(function(error) {
		  console.log('Virhe: hops.opiskelijat ' + error);
		  });	  
  });
