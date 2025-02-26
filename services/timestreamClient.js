const AWS = require('../config/config');

const timestreamWrite = new AWS.TimestreamWrite();
const timestreamQuery = new AWS.TimestreamQuery();


module.exports = {timestreamWrite, timestreamQuery};

