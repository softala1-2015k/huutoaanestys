angular.module('huutoaanestysFrontApp')
	.controller('MainCtrl', function($scope, $http) {
		  
		  $http.get('json/lukkarikurssit.json')
	      .success(function(data) { //success returns a JS object
	        $scope.lukkari = data; // bind the JS object to $scope  
	        
	  }),
	  
	  		  $http.get('json/tiedotteet.json')
	      .success(function(data1) { //success returns a JS object
	        $scope.tiedote = data1; // bind the JS object to $scope  
	        
	  })
	
	
	  .error(function(error) {
			  console.log('Virhe: main.opiskelija ' + error);
			  });	  
	  });