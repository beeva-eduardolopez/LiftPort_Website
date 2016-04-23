'use strict';

/**
 * @ngdoc function
 * @name liftPortWebsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the liftPortWebsiteApp
 */
angular.module('liftPortWebsiteApp')
  .controller('AboutCtrl', function ($scope) {
    var $grid = $('.grid').packery({
      // options...
    });
    // layout Packery after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.packery();
    });
});
