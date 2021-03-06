const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: 'AIzaSyBAMTvZISVKpaRlizJW4WBkUNatchMEKXo',
    authDomain: 'pack-hack.firebaseapp.com',
    projectId: 'pack-hack'
});

var db = firebase.firestore();

var fs = require('fs');

// const zekeTracks = require('./zekeTracks.json');
// const johnTracks = require('./johnTracks.json');
// const cadeTracks = require('./cadeTracks.json');

var names = "";
var uris = "";
var count = 0;
var frequency = 0;
var currentURI;
var currentName;
var added = false;
var songAmount = 35;

var prospectiveSongs = [];
var goodSongs = [];


//

 var topTrackLists;
 // topTrackLists = [cadeTracks, johnTracks, zekeTracks];

//ideally here the program would pull down the list of users from a specified group from firebase(and their refresh keys)
//then the program would loop through each user and their top list of songs and push these lists onto the
// topTrackLists variable, then the program would run out fine.


function isAdded(song) {
    if (goodSongs.indexOf(song) === -1) {
        return false;
    } else {
        return true;
    }
}

for (i = 0; i < topTrackLists.length; i++) {
    for (j = 0; j < topTrackLists[i].items.length; j++) {
        if (prospectiveSongs.indexOf(topTrackLists[i].items[j]) === -1 ) {
            prospectiveSongs.push(topTrackLists[i].items[j]);
        } else {
            goodSongs.push(topTrackLists[i].items[j]);
        }
    }
}


for (i = 0; i < topTrackLists.length; i ++) {
    for (j = 0; j < (songAmount-goodSongs.length)/topTrackLists.length; j++) {
        if (!isAdded(topTrackLists[i].items[j])) {
            goodSongs.push((topTrackLists[i].items[j]));
        }
    }

}


for (i = 0; i < goodSongs.length; i++) {
    console.log(goodSongs[i].name);
}

fs.writeFile("playlist.json", JSON.stringify(goodSongs, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File Created");
});