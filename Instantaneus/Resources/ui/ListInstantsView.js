//List Instants views
function ListInstantsView() {
	//load dependencies
	listInstantsNetwork = require('services/network').listInstantsNetwork;
	populateListInstants = require('services/store').populateListInsants;
	//store = require('services/store')
	
	//create object instance
	var self = Titanium.UI.createView({
		left: 5,
		right: 5,
		top: 5,
		bottom: 5,
		backgroundColor: '#fff',
		borderRadius: 5,
		visible: false,
		zindex:2
	});

	var labelInstants = Titanium.UI.createLabel({
	    width: '90%',
	    height: 40,
	    top: 40,
	    right: '5%',
	    textAlign:'center',
	    font: {fontSize: 20, fontFamily: 'Helvetica', fontWeight: 'bold'},
	    text: 'Mes Instants'
	});
	self.add(labelInstants);
	
	Ti.App.addEventListener('showListInstantsView', function(){
		self.show();
	});

	var listInstants = function (){
		if (!Ti.App.Properties.getString('email')){
				var alertDialog = Ti.UI.createAlertDialog({
					title: 'KO. Adresse Email NON trouvée',
					buttonNames: ['OK'],
					cancel:0
					});
				alertDialog.show();
				}
		else {
			email = Ti.App.Properties.getString('email');
			Ti.API.info('Email found in properties');
			listInstantsNetwork(email);
						
		}
	};
	
	Ti.App.addEventListener('openListInstants', function(){
		email = Ti.App.Properties.getString('email');
		Ti.API.info('openListInstants listener launch')
		listInstants(email);
	});

	var InstantsTableView = Titanium.UI.createTableView({
		data: [{title:"Row 1"},{title:"Row 2"}]
		});
	
	self.add(InstantsTableView);

	return self;
	
	//network.listInstants();
}

module.exports = ListInstantsView;