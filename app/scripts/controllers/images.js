'use strict';

angular.module('liftPortWebsiteApp')
    .controller('ImagesCtrl', ['$scope', '$http', function ($scope, $http) {

        var uploadUrl = 'https://api.box.com/oauth2/token';

        var headers = {
            grant_type: "authorization_code",
            code: "EoMxJP5TGu68ygVFx4Rw2zfFJXtz79Sz",
            client_id: "ak3nq6j939d1i6xusk9ibfsd7lkeu1qp",
            client_secret: "GtbGaycXZxYAAFSWJAg2oSxUYFF8l3ex"
        };

        $.ajax({
            url: uploadUrl,
            headers: headers,
            type: 'POST',
            // This prevents JQuery from trying to append the form as a querystring
            // processData: false,
            // contentType: false,
        }).then(function (result) {
             console.log(result.data);
        }, function (err) {
            console.log(err);
        });


        // $http({
        //     url: 'https://api.box.com/oauth2/token',
        //     method: 'POST',
        //     headers: {
        //         "grant_type": "authorization_code",
        //         "code": "EoMxJP5TGu68ygVFx4Rw2zfFJXtz79Sz",
        //         "client_id": "ak3nq6j939d1i6xusk9ibfsd7lkeu1qp",
        //         "client_secret": "GtbGaycXZxYAAFSWJAg2oSxUYFF8l3ex"
        //     }

        // }).then(function (result) {
        //     var edu = result.data;
        // }, function (err) {
        //     console.log(err);
        // });
    }]);




