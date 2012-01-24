function ApplicationWindow() {
	//load dependencies
	var network = require('services/network'),
	store = require('services/store'),
	InputEmailFormView = require('ui/wconfig')
	
	
	//create object instance
	var self = Ti.UI.createWindow({
		backgroundcolor : 'white',
		exitOnClose: true
	});
	
	//construct UI
	var inputEmailForm = new InputEmailFormView();
	self.add(inputEmailForm);

	return self;
}

module.exports = ApplicationWindow;