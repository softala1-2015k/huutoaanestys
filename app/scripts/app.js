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
      .when('/generaattori', {
        templateUrl: 'views/generaattori.html',
        controller: 'GeneraattoriCtrl'
      })
      .when('/kurssihaku', {
        templateUrl: 'views/kurssihaku.html',
        controller: 'KurssihakuCtrl'
      })
      .when('/ilmoittautuminen', {
    	templateUrl: 'views/ilmoittautuminen.html',
    	controller: 'IlmoittautuminenCtrl'
      })
      .when('/hops/oppilastiedot', {
    	 templateUrl: 'views/hops.html',
    	 controller: 'OppilasCtrl'
      })
      
      .otherwise({
        redirectTo: '/'
      });
  });
