'use strict';

/**
 * @ngdoc function
 * @name huutoaanestysFrontApp.controller: GeneraattoriCtrl
 * @description
 * # GeneraattoriCtrl
 * Controller of the huutoaanestysFrontApp
 */
angular.module('huutoaanestysFrontApp')
  .controller('GeneraattoriCtrl', function ($scope, $http) {
    $http.get('json/kurssit.json')
      .success(function(data) { //success returns a JS object
        $scope.kurssit = data; // bind the JS object to $scope
  });

  $scope.oneAtATime = true;

});
