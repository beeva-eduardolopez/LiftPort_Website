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
'use strict';

/**
 * @ngdoc function
 * @name liftPortWebsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the liftPortWebsiteApp
 */
angular.module('liftPortWebsiteApp')
  .controller('AboutCtrl', function () {
    // var $grid = $('.grid').packery({
    //   itemSelector: '.grid-item',
    //   columnWidth: '.grid-sizer',
    //   percentPosition: true,
    // });
    // // layout Packery after each image loads
    // $grid.imagesLoaded().progress( function() {
    //   $grid.packery();
    // });
});

'use strict';

angular.module('liftPortWebsiteApp')
    .controller('MuseumCtrl', function ($scope) {
        
        
        $scope.images = [
            {"imgSrc": "../images/museum/SS_SpaceElevator4.jpg"},
            {"imgSrc": "../images/museum/SS_SpaceElevator5.jpg"},
            {"imgSrc": "../images/museum/SS_SpaceElevator6.jpg"},
            {"imgSrc": "../images/museum/SS_SpaceElevator7.jpg"},
            {"imgSrc": "../images/museum/SS_SpaceElevator8.jpg"},
            {"imgSrc": "../images/museum/SS_SpaceElevator9.jpg"},
            {"imgSrc": "../images/museum/SS_SpaceElevator10.jpg"},
            {"imgSrc": "../images/museum/SS_SpaceElevator12.jpg"}
        ];
});
'use strict';

angular.module('liftPortWebsiteApp')
    .controller('TechDocsCtrl', function ($scope) {
    });
'use strict';

angular.module('liftPortWebsiteApp')
    .controller('LunarElevatorCtrl', function ($scope) {
        $(document).ready(function () {
            // $scope.stylePDF = "embed-link";
            // if (typeof $.fn.fullpage.destroy == 'function') {
            //     $.fn.fullpage.destroy('all');
            // }
            // $('#fullpage').fullpage({
            //     fixedElements: '#header',
            //     autoScrolling: false,
            //     verticalCentered: false,
            //     normalScrollElements: '#jssor_2, fullpage',
            //     //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
            //     css3: false
            // });

            var jssor_2_SlideshowTransitions = [
                { $Duration: 1200, x: 0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: -0.3, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: -0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: 0.3, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: 0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: -0.3, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: -0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: 0.3, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: 0.3, $Cols: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: 0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: 0.3, $Rows: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Row: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: 0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: 0.3, $Cols: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: -0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: 0.3, $Rows: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: -0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, $Delay: 20, $Clip: 3, $Assembly: 260, $Easing: { $Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, $Delay: 20, $Clip: 3, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, $Delay: 20, $Clip: 12, $Assembly: 260, $Easing: { $Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, $Delay: 20, $Clip: 12, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
            ];

            var jssor_2_options = {
                $AutoPlay: true,
                $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: jssor_2_SlideshowTransitions,
                    $TransitionsOrder: 1
                },
                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$
                },
                $ThumbnailNavigatorOptions: {
                    $Class: $JssorThumbnailNavigator$,
                    $Cols: 10,
                    $SpacingX: 8,
                    $SpacingY: 8,
                    $Align: 360
                }
            };

            var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);

            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_2_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 800);
                    jssor_2_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);

        });

        document.querySelector(".embed-link").addEventListener("click", function (e) {

            e.preventDefault();

            this.setAttribute("class", "hidden");

            var options = {
                pdfOpenParams: {
                    pagemode: "thumbs",
                    navpanes: 0,
                    toolbar: 0,
                    statusbar: 0,
                    view: "FitV"
                }
            };

            var myPDF = PDFObject.embed("../pdfs/ladder.pdf", "#pdf", options);
            
            var el = document.querySelector("#results");
            el.setAttribute("class", (myPDF) ? "success" : "fail");
            
            var close = document.querySelector("#close");
            close.classList.remove("hidden");
            
        });


        $scope.closePDF = function (value) {
            $scope.stylePDF = "embed-link";
            var myEl = angular.element(document.querySelector('#pdf'));
            myEl.removeClass("pdfobject-container");
            myEl.empty();
            var el = document.querySelector("#test");
            el.classList.remove("hidden");
            el.classList.add("embed-link");
            var close = document.querySelector("#close");
            close.classList.add("hidden");

        };

    });
'use strict';

angular.module('liftPortWebsiteApp')
    .controller('SpaceElevatorCtrl', function ($scope) {
        $(document).ready(function () {
            // if (typeof $.fn.fullpage.destroy == 'function') {
            //     $.fn.fullpage.destroy('all');
            // }
            // $('#fullpage').fullpage({
            //     fixedElements: '#header',
            //     autoScrolling: false,
            //     verticalCentered: false,
            //     normalScrollElements: '#jssor_1, fullpage',
            //     //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
            //     css3: false
            // });

            var jssor_1_SlideshowTransitions = [
                { $Duration: 1200, x: 0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: -0.3, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: -0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: 0.3, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: 0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: -0.3, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: -0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: 0.3, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: 0.3, $Cols: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: 0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: 0.3, $Rows: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Row: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: 0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: 0.3, $Cols: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, y: -0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: 0.3, $Rows: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: -0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, $Delay: 20, $Clip: 3, $Assembly: 260, $Easing: { $Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, $Delay: 20, $Clip: 3, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, $Delay: 20, $Clip: 12, $Assembly: 260, $Easing: { $Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
                { $Duration: 1200, $Delay: 20, $Clip: 12, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
            ];

            var jssor_1_options = {
                $AutoPlay: true,
                $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: jssor_1_SlideshowTransitions,
                    $TransitionsOrder: 1
                },
                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$
                },
                $ThumbnailNavigatorOptions: {
                    $Class: $JssorThumbnailNavigator$,
                    $Cols: 10,
                    $SpacingX: 8,
                    $SpacingY: 8,
                    $Align: 360
                }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 800);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);

        });

        document.querySelector(".embed-link").addEventListener("click", function (e) {

            e.preventDefault();

            this.setAttribute("class", "hidden");

            var options = {
                pdfOpenParams: {
                    pagemode: "thumbs",
                    navpanes: 0,
                    toolbar: 0,
                    statusbar: 0,
                    view: "FitV"
                }
            };

            var myPDF = PDFObject.embed("../pdfs/example.pdf", "#pdf", options);

            var el = document.querySelector("#results");
            el.setAttribute("class", (myPDF) ? "success" : "fail");
            
            var close = document.querySelector("#close");
            close.classList.remove("hidden");
        });
        
         $scope.closePDF = function (value) {
            $scope.stylePDF = "embed-link";
            var myEl = angular.element(document.querySelector('#pdf'));
            myEl.removeClass("pdfobject-container");
            myEl.empty();
            var el = document.querySelector("#test");
            el.classList.remove("hidden");
            el.classList.add("embed-link");
            var close = document.querySelector("#close");
            close.classList.add("hidden");

        };

    });
/*
 *  Bootstrap Auto-Hiding Navbar - v1.0.5
 *  An extension for Bootstrap's fixed navbar which hides the navbar while the page is scrolling downwards and shows it the other way. The plugin is able to show/hide the navbar programmatically as well.
 *  http://www.virtuosoft.eu/code/bootstrap-autohidingnavbar/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 */
//This is an edit to push this change please disregard


;(function($, window, document, undefined) {
  
 
  var pluginName = 'autoHidingNavbar',
      $window = $(window),
      $document = $(document),
      _scrollThrottleTimer = null,
      _resizeThrottleTimer = null,
      _throttleDelay = 10,
      _lastScrollHandlerRun = 0,
      _previousScrollTop = null,
      _windowHeight = $window.height(),
      _visible = true,
      _hideOffset,
      defaults = {
        disableAutohide: false,
        showOnUpscroll: true,
        showOnBottom: true,
        hideOffset: 'auto', // "auto" means the navbar height
        animationDuration: 200
      };

  function AutoHidingNavbar(element, options) {
    this.element = $(element);
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  function hide(autoHidingNavbar) {
    if (!_visible) {
      return;
    }

    autoHidingNavbar.element.addClass('navbar-hidden').animate({
      top: -1 * parseInt(autoHidingNavbar.element.css('height'), 10)
    }, {
      queue: false,
      duration: autoHidingNavbar.settings.animationDuration
    });

    $('.dropdown.open .dropdown-toggle', autoHidingNavbar.element).dropdown('toggle');

    _visible = false;
  }

  function show(autoHidingNavbar) {
    if (_visible) {
      return;
    }

    autoHidingNavbar.element.removeClass('navbar-hidden').animate({
      top: 0
    }, {
      queue: false,
      duration: autoHidingNavbar.settings.animationDuration
    });
    _visible = true;
  }

  function detectState(autoHidingNavbar) {
    var scrollTop = $window.scrollTop(),
        scrollDelta = scrollTop - _previousScrollTop;
    _previousScrollTop = scrollTop;
    
    if (scrollDelta < 0) {
      if (_visible) {
        return;
      }

      if (autoHidingNavbar.settings.showOnUpscroll <= _hideOffset) {
        show(autoHidingNavbar);
      }
    }
    else if (scrollDelta > 0) {
      if (!_visible) {
        if (autoHidingNavbar.settings.showOnBottom && scrollTop + _windowHeight === $document.height()) {
          show(autoHidingNavbar);
        }
        return;
      }

      if (scrollTop >= _hideOffset) {
        hide(autoHidingNavbar);
      }
    }

  }

  function scrollHandler(autoHidingNavbar) {
    if (autoHidingNavbar.settings.disableAutohide) {
      return;
    }

    _lastScrollHandlerRun = new Date().getTime();

    detectState(autoHidingNavbar);
  }

  function bindEvents(autoHidingNavbar) {
    $document.on('scroll.' + pluginName, function() {
      if (new Date().getTime() - _lastScrollHandlerRun > _throttleDelay) {
        scrollHandler(autoHidingNavbar);
      }
      else {
        clearTimeout(_scrollThrottleTimer);
        _scrollThrottleTimer = setTimeout(function() {
          scrollHandler(autoHidingNavbar);
        }, _throttleDelay);
      }
    });

    $window.on('resize.' + pluginName, function() {
      clearTimeout(_resizeThrottleTimer);
      _resizeThrottleTimer = setTimeout(function() {
        _windowHeight = $window.height();
      }, _throttleDelay);
    });
  }

  function unbindEvents() {
    $document.off('.' + pluginName);

    $window.off('.' + pluginName);
  }

  AutoHidingNavbar.prototype = {
    init: function() {
      this.elements = {
        navbar: this.element
      };

      this.setDisableAutohide(this.settings.disableAutohide);
      this.setShowOnUpscroll(this.settings.showOnUpscroll);
      this.setShowOnBottom(this.settings.showOnBottom);
      this.setHideOffset(this.settings.hideOffset);
      this.setAnimationDuration(this.settings.animationDuration);

      _hideOffset = this.settings.hideOffset === 'auto' ? parseInt(this.element.css('height'), 10) : this.settings.hideOffset;
      bindEvents(this);

      return this.element;
    },
    setDisableAutohide: function(value) {
      this.settings.disableAutohide = value;
      return this.element;
    },
    setShowOnUpscroll: function(value) {
      this.settings.showOnUpscroll = value;
      return this.element;
    },
    setShowOnBottom: function(value) {
      this.settings.showOnBottom = value;
      return this.element;
    },
    setHideOffset: function(value) {
      this.settings.hideOffset = value;
      return this.element;
    },
    setAnimationDuration: function(value) {
      this.settings.animationDuration = value;
      return this.element;
    },
    show: function() {
      show(this);
      return this.element;
    },
    hide: function() {
      hide(this);
      return this.element;
    },
    destroy: function() {
      unbindEvents(this);
      show(this);
      $.data(this, 'plugin_' + pluginName, null);
      return this.element;
    }
  };

  $.fn[pluginName] = function(options) {
    var args = arguments;

    if (options === undefined || typeof options === 'object') {
      return this.each(function() {
        if (!$.data(this, 'plugin_' + pluginName)) {
          $.data(this, 'plugin_' + pluginName, new AutoHidingNavbar(this, options));
        }
      });
    } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
      var returns;

      this.each(function() {
        var instance = $.data(this, 'plugin_' + pluginName);

        if (instance instanceof AutoHidingNavbar && typeof instance[options] === 'function') {
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
      });

      return returns !== undefined ? returns : this;
    }

  };

})(jQuery, window, document);
