/*global angular, $*/

var app;
app = angular.module('app', ['ngRoute', 'spotify']);

app.run(function ($rootScope, $location, $http, $window) {
    'use strict';

});

app.service("SpotifyService", function ($http, $q, $window, $rootScope, $location) {
    'use strict';

});

app.controller("GroupController", function ($scope, $http, $routeParams) {
    'use strict';

});

app.controller('PlaylistController', function ($rootScope, $scope, $http, $window, $location) {
    'use strict';

});

app.controller('LoginController', function ($scope, Spotify) {
    'use strict';
    $scope.login = function () {
        Spotify.login().then(function (data) {
            console.log(data);
            alert("You are now logged in");
        }, function () {
            console.log('didn\'t log in');
        })
    };
});

app.config(['$routeProvider', function ($routeProvider, $locationProvider) {
    'use strict';

    $routeProvider.when('/', {
        templateUrl: 'html/login.html',
        controller: 'LoginController'
    }).when('/groups', {
        templateUrl: 'html/group.html',
        controller: 'GroupController'
    }).when("/playlists", {
        templateUrl: 'html/playlist.html',
        controller: 'PlaylistController'
    }).otherwise({
        redirectTo: '/'
    });
}]);

app.config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('67f4df5a3037476aaf5e3cf792bc44d6');
    SpotifyProvider.setRedirectUri('http://localhost:4200');
    SpotifyProvider.setScope('user-read-private user-read-email user-top-read');
});