'use strict';

/**
 * @ngdoc function
 * @name liftPortWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the liftPortWebsiteApp
 */
angular.module('liftPortWebsiteApp')
  .controller('MainCtrl', function ($scope) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
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
      $(".nav li a").on("click", function(){
            $(".nav").find(".active").removeClass("active");
            $(this).parent().addClass("active");
      });
    });
  });
