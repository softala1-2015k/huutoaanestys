'use strict';

/**
 * @ngdoc function
 * @name huutoaanestysFrontApp.controller: GeneraattoriCtrl
 * @description
 * # GeneraattoriCtrl
 * Controller of the huutoaanestysFrontApp
 */
angular.module('huutoaanestysFrontApp')
  .controller('GeneraattoriCtrl', function ($scope, $window, $http) {
    $http.get('json/kurssit.json')
      .success(function(data) { //success returns a JS object
        $scope.kurssit = data; // bind the JS object to $scope
  });

  var maxWidth = 768;
  
  $scope.$watch(function(){
    if($window.innerWidth > maxWidth) {
      $scope.oneAtATime = false;
    }
    else {
      $scope.oneAtATime = true;
    }
  });

});