// 'use strict';

// angular.module('liftPortWebsiteApp')
//     .controller('ImagesCtrl', ['$scope', '$http', function ($scope, $http) {

//         var token = '';

//         var uploadUrl = 'https://api.box.com/oauth2/token';
//         if ($scope.token == "" || $scope.token === undefined) {
//              var post = {
//                 code: "BXVhS1B61iMq8TC7VodT4SHJOFXO2wQc",
//                 grant_type: "authorization_code",
//                 client_id: "ak3nq6j939d1i6xusk9ibfsd7lkeu1qp",
//                 client_secret: "GtbGaycXZxYAAFSWJAg2oSxUYFF8l3ex"
//             };

//             $.ajax({
//                 url: uploadUrl,
//                 type: 'POST',
//                 // This prevents JQuery from trying to append the form as a querystring
//                 // processData: false,
//                 // contentType: false,
//                 data: post
//             }).then(function (result) {
//                 $scope.token = result.access_token;
//                 token = result.access_token;
//             }, function (err) {
//                 console.log(err);
//             });
//         } else {

//         }
//           $.ajax({
//                 url:  'https://api.box.com/2.0/folders/7581833161/items',
//                 type: 'GET',
//                 headres:{
//                     Authorization:  'Bearer '+token
//                 }
//                 // This prevents JQuery from trying to append the form as a querystring
//                 // processData: false,
//                 // contentType: false,
//                 // data: post
//             }).then(function (result) {
//                console.log(result.entries);
//             }, function (err) {
//                 console.log(err);
//             });
          
           

//     }]);




