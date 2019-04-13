var fs = require('fs');
fs.readFile('/Users/zeke/Programming/pack_hacks/node/key.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK:');
  console.log(data)
});
