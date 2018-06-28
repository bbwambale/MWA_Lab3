const util = require('util');
const dnsy = require('dns');

const stat = util.promisify(dnsy.resolve4);
async function callStat() {
  const ipAdd = await stat('www.mum.edu');
  console.log(`The Ip Address is:  ${ipAdd}`);
}

callStat();