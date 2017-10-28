const { heroku_instances } = require('./config');

let https = require('https'); 

const Interval = 10;

function keepAlive(instance) {
	let current_hour = new Date().getHours();
	if (current_hour >= 8) {
		console.log(instance);
		let options = {
	        host: instance,
	        port: 80,
	        path: '/'
	    };
	    https.get(instance, (res) => {
	    	return res;
	    });
	}
}

heroku_instances.forEach(function(instance, idx){
	setInterval(keepAlive, Interval*60*1000, instance);
});

