/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var fs = require('fs');

var client_id = '67f4df5a3037476aaf5e3cf792bc44d6'; // Your client id
var client_secret = '75c4580629964e78912a639855832ce8'; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

var userInfo;
var tracks;

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: 'AIzaSyBAMTvZISVKpaRlizJW4WBkUNatchMEKXo',
    authDomain: 'pack-hack.firebaseapp.com',
    projectId: 'pack-hack'
});

var db = firebase.firestore();


/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email user-top-read user-read-recently-played';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state,
      show_dialog: true, 
    }));
});

app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;
  console.log("CODE: ")
  console.log(code)
  console.log(state)
  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;
        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API

        request.get(options, function(error, response, body) {
          userInfo = body;
            // fs.writeFile("johnInfo.json", JSON.stringify(body, null, 4), (err) => {
                if (error) {
                    console.error(err);
                    return;
                };
                console.log("File Created");
                console.log("JOHNS EMAIL IS : " + body.email)

                db.collection("users").doc(body.email).set({
                  "refresh_token": refresh_token
                }).then(function() {
                  console.log("Document successfully updated!");
                });
        });

        options = {
          url: 'https://api.spotify.com/v1/me/top/tracks',
          headers: { 'Authorization': 'Bearer ' + access_token },
          limit: 50,
          json: true
        };

        // use the access token to access the Spotify Web API

        request.get(options, function(error, response, body) {
          console.log('beforebody');
          tracks = body;
            /**
             * Can you push this body / tracks value up to the user field in firebase? then it could be yanked down later
             */
          fs.writeFile("cadeRecentTracks.json", JSON.stringify(body, null, 4), (err) => {
            if (err) {
              console.error(err);
              return;
            };
            console.log("File Created");
          });


          console.log(body);
          console.log('afterbody');
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect('/#save-token?' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

console.log('Listening on 8888');
app.listen(8888);
