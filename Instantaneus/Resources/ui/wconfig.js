//Fenêtre de configuration des informations utilisateur
function InputEmailFormView() {
	//load dependencies
	//var network = require('services/network'), 
	var checkUser = require('services/network').checkUser,
	store = require('services/store')
	
	//create object instance
	var self = Titanium.UI.createView({
		left: 5,
		right: 5,
		top: 5,
		bottom: 5,
		backgroundColor: '#fff',
		borderRadius: 5,
		zindex:1
	});
	
	//construct ui
	var logo = Titanium.UI.createImageView({
		image: 'appicon.png',
		width: 48,
		height: 48,
		top: 0
	});
	self.add(logo);	

	var labelEmail = Titanium.UI.createLabel({
	    width: '90%',
	    height: 90,
	    top: 70,
	    right: '5%',
	    font: {fontSize: 20, fontFamily: 'Helvetica', fontWeight: 'bold'},
	    text: 'Saisissez ci-dessous l\'adresse Email que vous avez utilisée lors de l\'inscription sur le site web.'
	});
	self.add(labelEmail);
	
	var tfEmail = Titanium.UI.createTextField({
		width : '90%',
		height : 70,
		top : 180,
		right: '5%',
		textAlign: 'left',
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
		hintText : 'example'
	});
	self.add(tfEmail);
	
	var buttonEmail = Titanium.UI.createButton({
	   title: 'Valider',
	   top: 280,
	   width: 100,
	   height: 50
	});
	self.add(buttonEmail);
	
	//add behavior
	buttonEmail.addEventListener('click', function() {
	   var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
	   if(reg.test(tfEmail.value) == false) {
		        var alertDialog = Ti.UI.createAlertDialog({
				title: 'Veuillez saisir une adresse Email valide',
				buttonNames: ['OK'],
				cancel:0
			});
		alertDialog.show();
	    }
	    else {
	    	Ti.API.info('Bouton Email cliqué');
	    	// CheckUser function launch. Return 1 if email is in database, 0 instead.
	    	//var checkUser = new network.checkUser()
	    	checkUser(tfEmail.value);
	    	// EventListener wich capture the value 1 or 0
	    	Ti.App.addEventListener('etatEmail', function(e) {
				if (e.etat == 1) {
					Ti.API.info('Avant fireEvent');
					store.saveEmail(e.email);
					Ti.App.fireEvent('showListInstantsView');
					Ti.App.fireEvent('openListInstants', 'dada');
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
	    }
	});
		
	//return instance from constructor
	return self;
}

module.exports = InputEmailFormView;