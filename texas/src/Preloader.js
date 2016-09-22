Texas.Preloader = function(game){
  Texas.GAME_WIDTH = window.innerWidth * window.devicePixelRatio;
  Texas.GAME_HEIGHT = window.innerHeight * window.devicePixelRatio;

  this.ready = false;
};

Texas.Preloader.prototype = {
  preload:function() {
  	this.background = this.add.sprite(0, 0,'loading','loadingBackground.jpg');
    this.preloadBar =  this.add.sprite(267 ,840, 'loading', 'loadingMeter.png');
    this.load.setPreloadSprite(this.preloadBar);
    this.load.onLoadComplete.add(this.loadComplete,this);

    this.load.atlasJSONHash('lobby','images/lobby.png', 'images/lobby.json');
    this.load.atlasJSONHash('deck','images/deck.png', 'images/deck.json');
    this.load.atlasJSONHash('game0','images/game0.png', 'images/game0.json');
    this.load.atlasJSONHash('game1','images/game1.png', 'images/game1.json');
    this.load.atlasJSONHash('game2','images/SlotVegas.png', 'images/SlotVegas.json');
    this.load.image('game2BG','images/SlotVegasBackground.png');
    this.load.audio('mouseClick', ['sfx/mouseClick.ogg','sfx/mouseClick.m4a' ]);
    this.load.audio('mouseOver', ['sfx/mouseOver.ogg', 'sfx/mouseOver.m4a']);
    this.load.audio('ambience', ['sfx/ambient.ogg', 'sfx/ambient.m4a']);
    this.load.audio('lobbyBGM', ['sfx/lobbyBGM.ogg', 'sfx/lobbyBGM.m4a']);

  },

  	loadComplete: function(){
      this.ready = true;
      console.log("Load completed...");
    },


  	update: function () {

  		//console.log("decoding sounds..")

  	 	if(this.cache.isSoundDecoded('mouseClick') && this.cache.isSoundDecoded('mouseOver')
  	 	&& this.cache.isSoundDecoded('ambience') && this.cache.isSoundDecoded('lobbyBGM') && this.ready == true){
  		 	console.log("Sound loaded.. To the game");
  		 	this.ready = false;
  		 	//init nerwork
  		 	AppFacadeInstance.sendNotification(TexasEvents.INIT_NETWORK);
        //AppFacadeInstance.sendNotification(TexasEvents.CHECK_LOGIN);
  		  //this.state.start("Lobby");

  	 }
  	}

  };
