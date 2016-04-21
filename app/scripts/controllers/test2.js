'use strict';

/**
 * @ngdoc function
 * @name liftPortWebsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the liftPortWebsiteApp
 */
angular.module('liftPortWebsiteApp')
    .controller('TestCtrl2', ['$scope', function ($scope) {

        $(document).ready(function () {
            $('#fullpage').fullpage({
                sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
                anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
                menu: '#menu',

                //equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
                easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
            });

        });
       
    }]);