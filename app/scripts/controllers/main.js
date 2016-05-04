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
        //    fixedElements: '#header',
        autoScrolling: false,
        verticalCentered: false,
        fitToSection: false,
        css3: false,
        afterRender: function(){
                        //playing the video
                        $('video').get(0).play();
                    }
        });
        //Navbar show-hide controls. Utilizes plugin Bootstrap-AutoHidingNavbar and basic JQuery
        if (window.innerWidth >899 ){
        $('.navbar-fixed-top').autoHidingNavbar().autoHidingNavbar('hide', true).autoHidingNavbar('setShowOnBottom',false);
        } else{
            $('.navbar-fixed-top').autoHidingNavbar();
        }
        
        $('.onHidden').on('click', function(){
            console.log('clicked!')
            $('.navbar-fixed-top').autoHidingNavbar('show');
        }) 
        
        
        $(window).scroll( function() {
            var value = $(window).scrollTop();
                if (value === 0){
                    // if (window.innerWidth > 900) {
                        // if (location.href.split('#').pop() === '/') {
                            $('.navbar-fixed-top').autoHidingNavbar('hide', true);
                        // }
                    // }
                } else {
                    $('.navbar-fixed-top').autoHidingNavbar();
                }
        
        });    
    });
});