

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var fs = require('fs');

var client_id = '67f4df5a3037476aaf5e3cf792bc44d6'; // Your client id
var client_secret = '75c4580629964e78912a639855832ce8'; // Your secret
var redirect_uri = 'http://localhost:4200/callback'; // Your redirect uri

var _baseUri = 'https://api.spotify.com/v1';

var _extend = function() {
    var args = Array.prototype.slice.call(arguments);
    var target = args[0];
    var objects = args.slice(1);
    target = target || {};
    objects.forEach(function(object) {
        for (var j in object) {
            if (object.hasOwnProperty(j)) {
                target[j] = object[j];
            }
        }
    });
    return target;
};

Constr.prototype.createPlaylist = function(userId, options, callback) {
    var requestData = {
        url: _baseUri + '/users/' + 'cademack' + '/playlists',
        type: 'POST',
        postData: options
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
};

var _checkParamsAndPerformRequest = function(requestData, options, callback, optionsAlwaysExtendParams) {
    var opt = {};
    var cb = null;

    if (typeof options === 'object') {
        opt = options;
        cb = callback;
    } else if (typeof options === 'function') {
        cb = options;
    }

    // options extend postData, if any. Otherwise they extend parameters sent in the url
    var type = requestData.type || 'GET';
    if (type !== 'GET' && requestData.postData && !optionsAlwaysExtendParams) {
        requestData.postData = _extend(requestData.postData, opt);
    } else {
        requestData.params = _extend(requestData.params, opt);
    }
    return _performRequest(requestData, cb);
};

console.log('Listening on 4200');
app.listen(4200);