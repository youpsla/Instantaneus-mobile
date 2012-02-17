//List Instants views
function ListInstantsWindow() {
	//load dependencies
	listInstantsNetwork = require('services/network').listInstantsNetwork;
	populateListInstants = require('services/store').populateListInsants;

	
	//create object instance
	var self = Ti.UI.createWindow({
		backgroundcolor : 'white',
		//visible: true,
		//zIndex:2,
		modal:true,
		//exitOnClose: false,
	});
	
	var view = Titanium.UI.createView({
		left: 5,
		right: 5,
		top: 5,
		bottom: 5,
		backgroundColor: '#fff',
		borderRadius: 5,
	});
	self.add(view)

	var labelInstants = Titanium.UI.createLabel({
	    width: '90%',
	    height: 40,
	    top: 5,
	    right: '5%',
	    textAlign:'center',
	    font: {fontSize: 12, fontFamily: 'Helvetica', fontWeight: 'bold'},
	    text: 'Mes Instants'
	});
	view.add(labelInstants);

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
	
	Ti.App.addEventListener('buildTableListInstants', function(e){
		var data = [];
		Ti.API.info('DATA: '+ e);

		var i = 0,
			key,
			instant;
		for (;i < e.length; i++) {
			instant = e[i];
			var row = Titanium.UI.createTableViewRow({
				hasChild: true,
				});
			Ti.API.info(instant);
				for (key in instant) {
					if (key == "nom") {
						Ti.API.info(instant['nom']);
						var nomLabel = Titanium.UI.createLabel({
							text: instant['nom'],
							left: 70,
							top: 5,
							height: 20,
						});
					row.add(nomLabel);
					};
					
					if (key == "mentions") {
						Ti.API.info(instant['mentions']);
						var mentionsLabel = Titanium.UI.createLabel({
							text: instant['mentions'],
							left: 70,
							top: 25,
							height: 60,
						});
					row.add(mentionsLabel);
					};	
				};
			data.push(row);
		};
		
		var InstantsTableView = Titanium.UI.createTableView({
			top: 40,
			//data: [{title:"Row 1"},{title:"Row 2"}]
		});
		InstantsTableView.data = data;
		view.add(InstantsTableView);
	});
	
	email = Ti.App.Properties.getString('email');
	listInstants(email);
	
	var row = Titanium.UI.createTableViewRow({
		rowHeight: 30,
		hasChild: true,
	});
	
	
	
	//Event listener to check if liw really open
	self.addEventListener('open', function(event){
		Ti.API.info('liw open evenlistener launched');
	});
	
	return self;
	
	//network.listInstants();
}

module.exports = ListInstantsWindow;