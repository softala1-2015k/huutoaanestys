'use strict';

/**
 * @ngdoc overview
 * @name huutoaanestysFrontApp
 * @description
 * # huutoaanestysFrontApp
 *
 * Main module of the application.
 */
angular
  .module('huutoaanestysFrontApp', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/hops', {
        templateUrl: 'views/hops.html',
        controller: 'HopsCtrl'
      })
      .when('/gnrtr', {
        templateUrl: 'views/gnrtr.html',
        controller: 'GnrtrCtrl'
      })
      .when('/json', {
        templateUrl: 'views/json.html',
        controller: 'JsonCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
