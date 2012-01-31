// load dependencies
//var User = require('model/User');

//bootstrap user datastore
exports.saveEmail = function(email) {
	if (!Ti.App.Properties.getString('email')){
		Ti.App.Properties.setString('email', email);
		Ti.API.info('Adresse Email sauvagardée');
		Ti.App.fireEvent('saveEmail');
	}
	else {
		Ti.App.Properties.setString('email', email);
		Ti.API.info('Email changed and registered')
	}
};

exports.storeListInstants = function(data) {
	Ti.API.info('Beginning of storeListInstants');
	var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'instants.txt');
	Ti.API.info('Instants details before storage: ' + data);
	f.write(data);
	Ti.API.info('End of storeListInstants');
	};

exports.populateListInstants = function() {
	Ti.API.info('Beginning of populateListInstants');
	var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'instants.txt');
	var contents = f.read();
	return contents;
	};


