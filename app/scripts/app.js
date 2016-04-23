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
    'ngTouch',
    'routeStyles'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

       .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        css: 'styles/about.css'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
