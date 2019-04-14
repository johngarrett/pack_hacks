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
    $scope.songs = [
        {
          image: "http://extras.mnginteractive.com/live/media/site21/2018/0523/20180523__24DCABVSw~1.jpg",
          title: "The title of the song",
          time: "3:07",
          users: [
            {
              image: "https://levinescholars.uncc.edu/sites/levinescholars.uncc.edu/files/styles/portrait_image/public/fields/field_photo/photo/SSI_3987.jpg?itok=5N0KThLp"
            }
          ],
        },
        {
          image: "http://extras.mnginteractive.com/live/media/site21/2018/0523/20180523__24DCABVSw~1.jpg",
          title: "The title of the song",
          time: "3:07",
          users: [
            {
              image: "https://levinescholars.uncc.edu/sites/levinescholars.uncc.edu/files/styles/portrait_image/public/fields/field_photo/photo/SSI_3987.jpg?itok=5N0KThLp"
            }
          ],
        },
        {
          image: "http://extras.mnginteractive.com/live/media/site21/2018/0523/20180523__24DCABVSw~1.jpg",
          title: "The title of the song",
          time: "3:07",
          users: [
            {
              image: "https://levinescholars.uncc.edu/sites/levinescholars.uncc.edu/files/styles/portrait_image/public/fields/field_photo/photo/SSI_3987.jpg?itok=5N0KThLp"
            },
            {
              image: "https://levinescholars.uncc.edu/sites/levinescholars.uncc.edu/files/styles/portrait_image/public/fields/field_photo/photo/SSI_3987.jpg?itok=5N0KThLp"
            }
          ],
        }
      ];
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