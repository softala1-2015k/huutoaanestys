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
	  
	   $http.get('http://proto317.haaga-helia.fi:8080/huutoaanestys_back/kurssit.json')
      .success(function(data) { //success returns a JS object
        $scope.kurssit = data; // bind the JS object to $scope
	  
	  /*
	  $http.get('json/kurssit.json')
      .success(function(data) { //success returns a JS object
          $scope.kurssit = data; // bind the JS object to $scope
       */
	      var koulutusohjelmat = [];
	      
	      for (var i = 0; i < data.length; i++){
	    	 koulutusohjelmat.push(data[i].koulutusohjelma); 
	      }
	     
	     koulutusohjelmat = koulutusohjelmat.filter (function (v, i, a) { return a.indexOf (v) == i });
	      $scope.koulutusohjelmat = koulutusohjelmat;
    
		
      });
});
