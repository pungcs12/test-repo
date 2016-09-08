
BasicGame.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)
		this.add.sprite(0,0,'bg');
        
		
		//Aligning HUD to view edges
		//Align to left top edge
		//var q = this.add.sprite(BasicGame.viewX,BasicGame.viewY,'playBtn');
        
//        var SYMTopHatGirl = this.add.sprite(75,55,'SymbolScatter');
//        SYMTopHatGirl.anchor.setTo(0.5,0.5);
//        var SYMPic1 = this.add.sprite(75,158,'SymbolScatter');
//        SYMPic1.anchor.setTo(0.5,0.5);
//        var SYMScatter = this.add.sprite(75,261,'SymbolScatter');
//        SYMScatter.anchor.setTo(0.5,0.5);
//        var SYMStocking = this.add.sprite(75,364,'SymbolScatter');
//        SYMStocking.anchor.setTo(0.5,0.5);
        
//        var SYMTopHatGirl = this.add.sprite(40,25,'SymbolScatter');
//        SYMTopHatGirl.anchor.setTo(0.5,0.5);
//        var SYMPic1 = this.add.sprite(40,69,'SymbolScatter');
//        SYMPic1.anchor.setTo(0.5,0.5);
//        var SYMScatter = this.add.sprite(40,113,'SymbolScatter');
//        SYMScatter.anchor.setTo(0.5,0.5);
//        var SYMStocking = this.add.sprite(40,157,'SymbolScatter');
//        SYMStocking.anchor.setTo(0.5,0.5);
        
        var text = this.add.text(TempWidth/2, 0, 'Width:'+BasicGame.srx+ ' '+BasicGame.screen, { font: TempFont+'px Arial', fill: '#ffffff' });
        text.anchor.setTo(0.5, 0.5);
        this.add.tween(text).to({y: TempHeight/2-TempHeight/5}, 2000).easing(Phaser.Easing.Bounce.Out).start();
//
        var lotto_spin_game = this.add.text(TempWidth/2, TempHeight/2, 'Lotto Spin111',
                            { font: TempFont+'px Arial', fill: '#ffffff' });
        lotto_spin_game.anchor.setTo(0.5, 0.5);
        lotto_spin_game.inputEnabled = true;
        lotto_spin_game.events.onInputUp.add(this.startPlayLotto,this);
        
        var RefTopLayer = this.add.sprite(0,0,'TopLayer');
//        
      
//        var SYMTopHatGirl = this.add.sprite(75,55,'SymbolScatter');
//        SYMTopHatGirl.anchor.setTo(0.5,0.5);
//        var SYMPic1 = this.add.sprite(75,158,'SymbolScatter');
//        SYMPic1.anchor.setTo(0.5,0.5);
//        var SYMScatter = this.add.sprite(75,261,'SymbolScatter');
//        SYMScatter.anchor.setTo(0.5,0.5);
//        var SYMStocking = this.add.sprite(75,364,'SymbolScatter');
//        SYMStocking.anchor.setTo(0.5,0.5);
        
        
        //q.anchor.setTo(0, 0);
		
		//Align to bottom right edge
		//q.position.x = BasicGame.viewWidth - q.width;
		//q.position.y = BasicGame.viewHeight - q.height;
        
        //q.position.x = 10;
		//q.position.y = q.height;
		//q.inputEnabled = true;
		//q.events.onInputDown.add(this.onClick,this);
	},
    startPlayLotto: function () {
        console.log("aaa");
		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.music.stop();

		//	And start the actual game
		this.state.start('PlayLotto');

	},

};
