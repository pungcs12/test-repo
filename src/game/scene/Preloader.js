
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {


		//this.background = this.add.sprite(0, 0, 'preloaderBackground');
		//this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		
		//this.load.setPreloadSprite(this.preloadBar);
		
		//this.load.image('bg','assets/'+BasicGame.screen+"/bg.jpg");
        console.log(BasicGame.screen);
        this.load.image('bg','assets/'+BasicGame.screen+"/Screen2.png");
		//this.load.image('playBtn','assets/'+BasicGame.screen+"/playBtn.png");
        this.load.image('SymbolTopHatGirl','assets/'+BasicGame.screen+"/Top_Hat_Girl.png");
        this.load.image('SymbolPic1','assets/'+BasicGame.screen+"/Pic1.png");
        this.load.image('SymbolScatter','assets/'+BasicGame.screen+"/Scatter.png");
        this.load.image('SymbolStocking','assets/'+BasicGame.screen+"/Stocking.png");
        this.load.image('SymbolRose','assets/'+BasicGame.screen+"/SymRose.png");
        this.load.image('SymbolShoes','assets/'+BasicGame.screen+"/SymShoes.png");
        this.load.image('SymbolWild','assets/'+BasicGame.screen+"/SymWild.png");
        
        this.load.image('TopLayer','assets/'+BasicGame.screen+"/TopLayer.png");
	},

	create: function () {
		//this.preloadBar.cropEnabled = false;
		this.ready = true;
		this.state.start('MainMenu');
	},

//	update: function () {
//
//		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
//		{
//			this.ready = true;
//			this.state.start('MainMenu');
//		}
//
//	}

};
