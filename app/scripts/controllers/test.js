'use strict';

/**
 * @ngdoc function
 * @name liftPortWebsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the liftPortWebsiteApp
 */
angular.module('liftPortWebsiteApp')
  .controller('TestCtrl', ['$scope', function ($scope) {

    $(document).ready(function () {
      $('#fullpage').fullpage({
        verticalCentered: false,

        //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
        css3: false
      });
    });
    scope.$on('$routeChangeStart', function () {
      $.fn.fullpage.destroy('all');
    });


  }]);