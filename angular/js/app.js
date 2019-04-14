/*global angular, $*/

app = angular.module('app', ['ngRoute', 'spotify']);

app.config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('67f4df5a3037476aaf5e3cf792bc44d6');
    SpotifyProvider.setRedirectUri('http://localhost:4200');
    SpotifyProvider.setScope('user-read-private user-read-email user-top-read');
});

 setAuthToken = function(authToken) {
            this.authToken = authToken;
            return this.authToken;
          };

login = function () {
var deferred = $q.defer();
var that = this;

var w = 400,
    h = 500,
    left = (screen.width / 2) - (w / 2),
    top = (screen.height / 2) - (h / 2);

var params = {
    client_id: this.clientId,
    redirect_uri: this.redirectUri,
    scope: this.scope || '',
    response_type: 'token'
};

var authCompleted = false;
var authWindow = openDialog(
    'https://accounts.spotify.com/authorize?' + this.toQueryString(params),
    'Spotify',
    'menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=' + w + ',height=' + h + ',top=' + top + ',left=' + left,
    function () {
    if (!authCompleted) {
        deferred.reject();
    }
    }
);

function storageChanged (e) {
    if (e.key === 'spotify-token') {
    if (authWindow) { authWindow.close(); }
    authCompleted = true;

    that.setAuthToken(e.newValue);
    $window.removeEventListener('storage', storageChanged, false);

    deferred.resolve(e.newValue);
    }
}

$window.addEventListener('storage', storageChanged, false);

return deferred.promise;
};
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