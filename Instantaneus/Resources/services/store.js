// load dependencies
//var User = require('model/User');

//bootstrap user datastore
exports.saveEmail = function(email) {
	if (!Ti.App.Properties.getString('email')){
		Ti.App.Properties.setString('email', email)
		Ti.API.info('Adresse Email sauvagardée')
		Ti.App.fireEvent('saveEmail')
	}
	else {
		Ti.API.info('Une adresse Email est déjà présente dans les propriétés')
	}
};



