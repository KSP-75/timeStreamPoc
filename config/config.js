const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region : process.env.AWS_REGION
});

module.exports = AWS;

