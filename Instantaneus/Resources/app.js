//Load require
var ConfigurationWindow = require ('ui/wconfig');
var saveEmail = require ('services/store').saveEmail;

cfw = new ConfigurationWindow();
cfw.open();

//Event listener for dispalying the ListInstantsWindows (ListInstantView.js)
Ti.App.addEventListener('showListInstantsView', function(){
	Ti.API.info('showListInstantsView listener started');
	var ListIntantsWindow = require ('ui/ListInstantsView');
	liw = new ListIntantsWindow();
	liw.open();
	Ti.API.info('showListInstantsView listener ended');

});

//Event listener for dispalying the DetailInstantWindow
Ti.App.addEventListener('showDetailInstantWindow', function(e){
	Ti.API.info('showDetailInstantWindow listener started');
	var detailInstantWindow = require('ui/DetailsInstantWindow.js');
	diw = new ListIntantsWindow();
	diw.open();
	Ti.API.info('showDetailInstantWindow listener ended');

});



// EventListener wich capture the value 1 or 0
Ti.App.addEventListener('etatEmail', function(e) {
	if (e.etat == 1) {
		Ti.API.info('Avant fireEvent');
		saveEmail(e.email);
		Ti.App.fireEvent('showListInstantsView');
		//Ti.App.fireEvent('openListInstants', 'dada');
		}
	else {
		var alertDialog = Ti.UI.createAlertDialog({
			title: 'KO. Adresse Email NON trouvée',
			buttonNames: ['OK'],
			cancel:0
			});
		alertDialog.show();
		}
	Ti.API.info('Fin du EventListener stateEmail')
	// Destroy EventListener to avoid multiple execution
	Ti.App.removeEventListener('etatEmail');
});
