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

app.controller('LoginController', function ($rootScope, $scope, $http, $window, $location) {
    'use strict';

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
