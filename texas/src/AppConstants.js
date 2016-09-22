var AppConstants = {
    CurrScene:null,
    CORE_NAME:'TexasHold',
    SERVER_BASE_URL:'http://192.168.0.174:9003/',
    SERVER_WSS_URL:null,
    //SERVER_BASE_URL:'http://beatslotsjavatest.bigwavegaming.com/',
    APP_VERSION:1.0,
    PLATFORM:"Web",
    NOW:0,
    USER:null,
    SESSIONID:"de70bafad3dc94a6ae97da1fbd0420d3",
    ISNETWORKOK:false,
};

var AppFacadeInstance = null;

window.onload = function (){
		//init mvc
	AppFacadeInstance = AppFacade.getInstance(AppConstants.CORE_NAME);
   	AppFacadeInstance.startup();
   	//
	var targetWidth = 1920;
  	var targetHeight = 1080;


	var deviceRatio = (window.innerWidth/window.innerHeight); //device aspect ratio

	var newRatio = (targetHeight/targetWidth)*deviceRatio; //new ratio to fit the screen

	var newWidth = targetWidth*newRatio;
	var newHeight = targetHeight;

	var gameWidth = newWidth;
	var gameHeight = newHeight;
	var gameRendrer = Phaser.AUTO;

	AppConstants.game = new Phaser.Game(1920,1080,Phaser.AUTO,'game');

	AppConstants.game.state.add('Boot', Texas.Boot);
	AppConstants.game.state.add('Preloader', Texas.Preloader);
	AppConstants.game.state.add('Lobby', Texas.Lobby);
	AppConstants.game.state.add('Gameplay', Texas.Gameplay);
  AppConstants.game.state.add('GameSlotplay', Texas.GameSlotplay);




	//	Now start the Boot state.
	AppConstants.game.state.start('Boot');


   //
}
