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
    if (typeof $.fn.fullpage.destroy == 'function') {
      $.fn.fullpage.destroy('all');
    }
    $(document).ready(function () {
      $('#fullpage').fullpage({
        fixedElements: '#header',
        autoScrolling: false,
        verticalCentered: false,

        //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
        css3: false
      });
    });

  }]);