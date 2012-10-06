//Detail Instants Window
function DetailInstantWindow(e) {
	//load dependencies
	//create object instance
	//Ti.API.info('DetailsInstantWindow : ' + instant);
	var self = Ti.UI.createWindow({
		backgroundcolor : 'white',
		modal:true,
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

	var labelNomMagasin = Titanium.UI.createLabel({
	    width: '90%',
	    height: 40,
	    top: 5,
	    right: '5%',
	    textAlign:'center',
	    font: {fontSize: 18, fontFamily: 'Helvetica', fontWeight: 'bold'},
	    //text: instant['nom_commercial']
	    text: e.source.eventID,
	});
	Ti.API.info('Instant ID : ' + e.source.eventID);
	view.add(labelNomMagasin);

	var labelNomMagasin = Titanium.UI.createLabel({
	    width: '90%',
	    height: 60,
	    top: 45,
	    right: '5%',
	    textAlign:'center',
	    font: {fontSize: 22, fontFamily: 'Helvetica', fontWeight: 'bold'},
	    //text: instant['titre']
	    text: e.source.eventNom,
	});
	Ti.API.info('Instant Name : ' + e.source.eventNom);
	view.add(labelNomMagasin);

	return self;
};
module.exports = DetailInstantWindow;