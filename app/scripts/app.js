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
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
