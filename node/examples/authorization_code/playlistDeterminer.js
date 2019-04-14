// var fs = require('jsonFile');

const zekeTracks = require('./zekeTracks.json');
const johnTracks = require('./johnTracks.json');
const cadeTracks = require('./cadeTracks.json');

var names = "";
var uris = "";
var count = 0;
var frequency = 0;
var currentURI;
var currentName;
var added = false;

console.log(zekeTracks);

for (i = 0; i < cadeTracks.items.length; i++) {
    currentURI = cadeTracks.items[i].uri;
    currentName = cadeTracks.items[i].name;
    frequency = 1;
    added = false;

    for (j = 0; j < johnTracks.items.length; j++) {
        if (johnTracks.items[j].uri === currentURI) {
            frequency++;
        }
        for (k = 0; k < zekeTracks.items.length; k++) {
            if (zekeTracks.items[k].uri === currentURI) {
                frequency++;
            }
            if (frequency == 1 && added === false) {
                uris += (", " + currentURI);
                names += (", " + currentName);
                added = true;
            }
        }
    }
}

console.log(uris);
console.log(names);