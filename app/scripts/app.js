'use strict';

/**
 * @ngdoc overview
 * @name liftPortWebsiteApp
 * @description
 * # liftPortWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('liftPortWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/museum', {
        templateUrl: 'views/museum.html',
        controller: 'MuseumCtrl'
      })

      .when('/techdocs', {
        templateUrl: 'views/techdocs.html',
        controller: 'TechDocsCtrl'
      })

      .when('/lunarelevator', {
        templateUrl: 'views/lunarelevator.html',
        controller: 'LunarElevatorCtrl'
      })

      .when('/spaceelevator', {
        templateUrl: 'views/spaceelevator.html',
        controller: 'SpaceElevatorCtrl'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });




