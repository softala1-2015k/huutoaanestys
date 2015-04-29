'use strict';

/**
 * @ngdoc function
 * @name huutoaanestysFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the huutoaanestysFrontApp
 */
angular.module('huutoaanestysFrontApp')
  .controller('JsonCtrl', function ($scope, $http) {
    // JSON url, only json residing within the same domain is supported, for out of domain json use $http.jsonp
    $http.get('json/kurssit.json')
      .success(function(data) { //success returns a JS object
        $scope.kurssit = data; // bind the JS object to $scope
      });
});
