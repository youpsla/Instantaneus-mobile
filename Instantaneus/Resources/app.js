//testgit1234
// create tab group
var tabGroup = Ti.UI.createTabGroup();

//Fenêtre 1
var win1 = Titanium.UI.createWindow({
	top: 0,
	left: 0,
	backgroundImage: 'default.png',
});


//Vue principale
var view = Titanium.UI.createView({
	left: 5,
	right: 5,
	top: 5,
	bottom: 5,
	backgroundColor: '#fff',
	borderRadius: 5
});

//Logo
var logo = Titanium.UI.createImageView({
	image: 'appicon.png',
	width: 48,
	height: 48,
	top: 0
});

view.add(logo);


//Creation du LABEL du champs email
var labelEmail = Titanium.UI.createLabel({
    width: '90%',
    height: 30,
    top: 70,
    right: '5%',
    font: {fontSize: 26, fontFamily: 'Helvetica', fontWeight: 'bold'},
    text: 'Adresse Email'
});
view.add(labelEmail);


//Creation du CHAMPS email
var tfEmail = Titanium.UI.createTextField({
	width : '90%',
	height : 70,
	top : 120,
	right: '5%',
	textAlign: 'left',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
	hintText : 'example'
	});
view.add(tfEmail);


//Ajout de la vue
win1.add(view);

var buttonEmail = Titanium.UI.createButton({
   title: 'Valider',
   top: 220,
   width: 100,
   height: 50
});

buttonEmail.addEventListener('click', function() {
	Ti.API.info('buttonEmail');
});

win1.add(buttonEmail)

//Création premier onglet
var tab1 = Ti.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Mes infos',
	
    window: win1
});

//Seconde fenêtre
var win2 = Titanium.UI.createWindow({
	width: 480,
	height: 800,
	top: 0,
	left: 0,
	backgroundImage: 'default.png',
	url: 'window2.js',
	title: 'Settings',
	barImage: 'navbar.png'
});

//Ajout de la fenêtre 2 au tab 2
var tab2 = Ti.UI.createTab({  
    icon:'icon_settings.png',
    title:'Les instants',
    window: win2
});


// Ajout des tabs au tabgroup
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

//Lancement du tabgroup
tabGroup.open();
