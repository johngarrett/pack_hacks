
const zekeTracks = require('./zekeTracks.json');
const johnTracks = require('./johnTracks.json');
const cadeTracks = require('./cadeTracks.json');

console.log("Cade's stuff");
for (i = 0; i < cadeTracks.items.length; i++) {
    console.log(cadeTracks.items[i].name);
}

console.log("John's stuff");
for (i = 0; i < johnTracks.items.length; i++) {
    console.log(johnTracks.items[i].name);
}

console.log("Zeke's stuff");
for (i = 0; i < zekeTracks.items.length; i++) {
    console.log(zekeTracks.items[i].name);
}