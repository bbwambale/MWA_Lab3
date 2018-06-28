const dns = require('dns');

dns.lookup('www.mum.edu', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});