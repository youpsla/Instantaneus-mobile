//var ApplicationWindow = require ('ui/ApplicationWindow');
//tt = new ApplicationWindow();
//tt.open();
//var ListIntantsWindow = require ('ui/ListInstantsView');
var ConfigurationWindow = require ('ui/wconfig');
var saveEmail = require ('services/store').saveEmail;

cfw = new ConfigurationWindow();
cfw.open();
//liw = new ListIntantsWindow();
//liw.open();

Ti.App.addEventListener('showListInstantsView', function(){
	Ti.API.info('showListInstantsView listener started');
	var ListIntantsWindow = require ('ui/ListInstantsView');
	liw = new ListIntantsWindow();
	liw.open();
	Ti.API.info('showListInstantsView listener ended');

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


// // create tab group
// var tabGroup = Ti.UI.createTabGroup();
// 
// var wconfig = Titanium.UI.createWindow({
	// top: 0,
	// left: 0,
	// backgroundImage: 'default.png',
	// url:'wconfig.js',
// });
// 
// //Création premier onglet
// var tab1 = Ti.UI.createTab({  
    // icon:'KS_nav_ui.png',
    // title:'Mes infos',
    // window: wconfig
// });
// 
// //Seconde fenêtre
// var win2 = Titanium.UI.createWindow({
	// width: 480,
	// height: 800,
	// top: 0,
	// left: 0,
	// backgroundImage: 'default.png',
	// url: 'window2.js',
	// title: 'Settings',
	// barImage: 'navbar.png'
// });
// 
// //Ajout de la fenêtre 2 au tab 2
// var tab2 = Ti.UI.createTab({  
    // icon:'icon_settings.png',
    // title:'Les instants',
    // window: win2
// });
// 
// 
// // Ajout des tabs au tabgroup
// tabGroup.addTab(tab1);  
// tabGroup.addTab(tab2);  
// 
// //Lancement du tabgroup
// tabGroup.open();
