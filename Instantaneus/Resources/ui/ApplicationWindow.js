function ApplicationWindow() {
	//load dependencies
	var store = require('services/store'),
	InputEmailFormView = require('ui/wconfig'),
	listInstantsView = require('ui/ListInstantsView');
	
	
	
	//create object instance
	var self = Ti.UI.createWindow({
		backgroundcolor : 'white',
		exitOnClose: true
	});

	//construct UI
	var inputEmailForm = new InputEmailFormView();
	self.add(inputEmailForm);
	
	var listInstantsView = new listInstantsView();
	self.add(listInstantsView);
	
	Ti.API.info(typeof(listInstants))

	
	//Events Listener
	//Ti.App.addEventListener('openListView', function() {
	//	Ti.API.info('openListView: Début');
	//	listInstantsView.show();
	//	Ti.API.info('openListView: Fin');
	//});

	return self;
};

module.exports = ApplicationWindow;