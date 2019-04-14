
const zekeTracks = require('./zekeTracks.json');
const johnTracks = require('./johnTracks.json');
const cadeTracks = require('./cadeTracks.json');

const cadeRecent = require('./cadeRecentTracks.json');

console.log("Cade's stuff");
for (i = 0; i < cadeRecent.items.length; i++) {
    console.log(cadeRecent.items[i].track.name);
    console.log(cadeRecent.items[i].track.uri);
}
