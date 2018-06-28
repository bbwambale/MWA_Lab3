var fs = require('fs');
var zlib = require('zlib');
var gzip = zlib.createGzip();
var gunZip = zlib.createGunzip();

/*var readable = fs.createReadStream(__dirname + '/source.txt');
var compressed = fs.createWriteStream(__dirname + '/destination.zip');

readable.pipe(gzip).pipe(compressed);*/

var readable1 = fs.createReadStream(__dirname + '/destination.zip');
var compressed1 = fs.createWriteStream(__dirname + '/newSource.txt');

readable1.pipe(gunZip).pipe(compressed1);
