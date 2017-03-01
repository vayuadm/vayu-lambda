var request = require('request');

exports.handler = function (event, context) {
    request.post({
		headers: {'content-type':'application/json'},
		url: process.env.CIRCLE_BUILD_URL,
		json: {"build_parameters":{"ANSIBLE_ACTION": process.env.ANSIBLE_ACTION}}
	}, function (error, response, body) {
		console.log('Error:', error);
		console.log('Status Code:', response && response.statusCode);
		console.log('Body:', body);
	});
};
