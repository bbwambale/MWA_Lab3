var vioImport = require('./ViolinHome');
var vio = new vioImport(); 
vio.on('printNote', function(){console.log('Note')});