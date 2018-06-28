const util = require('util');
const dnsy = require('dns');

const stat = util.promisify(dnsy.resolve4);
stat('www.mum.edu').then((address) => {
    console.log('address: %j', address);
}).catch((error) => {
    console.log('Adress Not found');
});