
BasicGame.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		///this.music = this.add.audio('titleMusic');
		//this.music.play();
//game.add.sprite(209 , 54, 'orange');
       // var text = new Phaser.Text(this, 0, 0, "Text", {/*style object*/});
        var text = this.add.text(460, 0, 'Insane Lotto', { font: '80px Arial', fill: '#ffffff' });
        text.anchor.setTo(0.5, 0.5);
        this.add.tween(text).to({y: 150}, 1000).easing(Phaser.Easing.Bounce.Out).start();

        var lotto_spin_game = this.add.text(200, 400, 'Lotto Spin',
                            { font: '30px Arial', fill: '#ffffff' });
        lotto_spin_game.anchor.setTo(0, 0.5);
        lotto_spin_game.inputEnabled = true;
        lotto_spin_game.events.onInputUp.add(this.startPlayLotto,this);
        
        var wheel_spin_game = this.add.text(400, 400, 'Wheel Spin',
                            { font: '30px Arial', fill: '#ffffff' });
        wheel_spin_game.anchor.setTo(0, 0.5);
        wheel_spin_game.inputEnabled = true;
        wheel_spin_game.events.onInputUp.add(this.startPlayLotto,this);
        
        var table_spin_game = this.add.text(600, 400, 'Table Spin',
                            { font: '30px Arial', fill: '#ffffff' });
        table_spin_game.anchor.setTo(0, 0.5);
        table_spin_game.inputEnabled = true;
        table_spin_game.events.onInputUp.add(this.startPlayLotto,this);    
        
        
        
		this.group1 = this.game.add.group();
        this.group1.create(0,0,'bg'+BasicGame.assetScale);

        this.group1.add(text);
        this.group1.add(lotto_spin_game);
        this.group1.add(wheel_spin_game);
        this.group1.add(table_spin_game);

        this.group1.scale.setTo(BasicGame.scaleRatio);
        this.group1.x = BasicGame.realWidth/2 - 960*BasicGame.assetScale*this.group1.scale.y/2;
        this.group1.y = BasicGame.realHeight/2 - 540*BasicGame.assetScale*this.group1.scale.x/2;
        
        this.group2 = this.game.add.group();
        this.group2.create(100,0,'orange');

        this.group2.scale.setTo(BasicGame.scaleRatio);
        this.group2.x = BasicGame.realWidth/2 - 960*BasicGame.assetScale*this.group2.scale.y/2;
        this.group2.y = BasicGame.realHeight/2 - 540*BasicGame.assetScale*this.group2.scale.x/2;
        
        //this.state.start('playLotto');
        this.scale.setResizeCallback(this.gameResized, this);
        
	},

	gameResized: function (width,height) {
		BasicGame.updateScaleRatio();
		this.group1.scale.setTo(BasicGame.scaleRatio);
        this.group1.x = BasicGame.realWidth/2 - 960*BasicGame.assetScale*this.group1.scale.y/2;
        this.group1.y = BasicGame.realHeight/2 - 540*BasicGame.assetScale*this.group1.scale.x/2;
        
        this.group2.scale.setTo(BasicGame.scaleRatio);
        this.group2.x = BasicGame.realWidth/2 - 960*BasicGame.assetScale*this.group2.scale.y/2;
        this.group2.y = BasicGame.realHeight/2 - 540*BasicGame.assetScale*this.group2.scale.x/2;
        
	},
    startPlayLotto: function () {
        console.log(250);
		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.music.stop();

		//	And start the actual game
		this.state.start('playLotto');

	},
	update: function () {
		//	Do some nice funky main menu effect here
        //this.state.start('playLotto');
	},

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		this.music.stop();

		//	And start the actual game
		this.state.start('Game');

	},


};
