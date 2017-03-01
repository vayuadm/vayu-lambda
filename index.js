var request = require('request');

exports.handler = function (event, context) {
    console.log(process.env.TOKEN);
};
