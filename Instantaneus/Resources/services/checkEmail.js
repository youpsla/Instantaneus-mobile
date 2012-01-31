var SERVER_URL = 'http://192.168.0.10:8010/clients/api/';

// implement check User email service interface
function checkUser (email) {
	Ti.API.info('Valeur saisie dans le tfEmail: ' + email)
	var xhr = Ti.Network.createHTTPClient();
	
	xhr.onload = function() {
		var data = JSON.parse(this.responseText);
		Ti.API.info('Data de la reponse JSON: ' + data[0]);
		Ti.API.info('Nombre de champs de la réponse json: ' + data.length);
		if (data[0].status == '1'){
			Ti.API.info('Adresse email ' + email + ' existe dans la base');
			var etat = 1;
			Ti.App.fireEvent('etatEmail', {etat:etat, email:email} );
			}
		else {
			Ti.API.info('Adresse email non trouvée');
			var etat = 2;
			Ti.App.fireEvent('etatEmail', {etat:etat, email:email} );
		}
	};
		
	xhr.onerror = function() {
		Ti.API.error(this.status + ' - ' + this.statusText);
		var alertDialog = Ti.UI.createAlertDialog({
			title: 'Erreur',
			messsage: 'Service inacessible',
			buttonNames: ['OK'],
			cancel:0
		});
		alertDialog.show();
		
	};
	Ti.API.info(SERVER_URL + 'email_check/' + email + '/')
	xhr.open('GET', SERVER_URL + 'email_check/' + email + '/');
	xhr.send();
	
};

//module.exports = checkUser;