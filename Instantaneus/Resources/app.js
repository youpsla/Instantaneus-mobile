var ApplicationWindow = require ('ui/ApplicationWindow');
tt = new ApplicationWindow();
tt.open();


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
