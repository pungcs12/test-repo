
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
        this.load.spritesheet('AniPic1','assets/'+BasicGame.screen+"/AniPic1_02.png",140,110,19);
				this.load.image('BtnSpin','assets/'+BasicGame.screen+"/btn_spin.png");
				this.load.image('BtnStop','assets/'+BasicGame.screen+"/btn_stop.png");
				this.load.image('TestSymbol','assets/'+BasicGame.screen+"/TestSymbol146x124.png");
				this.load.atlasJSONHash('MyPic1', 'assets/'+BasicGame.screen+'/AniPackPic1.png', 'assets/'+BasicGame.screen+'/AniPackPic1.json');

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
