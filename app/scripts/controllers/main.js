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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   $(document).ready(function () {
     if (typeof $.fn.fullpage.destroy == 'function') {
       $.fn.fullpage.destroy('all');
     }
     $('#fullpage').fullpage({
       fixedElements: '#header',
       autoScrolling: false,
       verticalCentered: false,
       css3: false,
       afterRender: function(){
					//playing the video
					$('video').get(0).play();
				}
     });
   });

    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    // if (typeof $.fn.fullpage.destroy == 'function') {
    //   $.fn.fullpage.destroy('all');
    // }
    // $(document).ready(function () {
    //   if (typeof $.fn.fullpage.destroy == 'function') {
    //     $.fn.fullpage.destroy('all');
    //   }
    //   $('#fullpage').fullpage({
    //     fixedElements: '#header',
    //     autoScrolling: false,
    //     verticalCentered: false,
    //     css3: false
    //   });
    // });

  });
