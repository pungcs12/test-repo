Texas.Gameplay = function(game) {
    //	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:
    this.game; //	a reference to the currently running game
    this.add; //	used to add sprites, text, groups, etc
    this.camera; //	a reference to the game camera
    this.cache; //	the game cache
    this.input; //	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load; //	for preloading assets
    this.math; //	lots of useful common math operations
    this.sound; //	the sound manager - add a sound, play one, set-up markers, etc
    this.stage; //	the game stage
    this.time; //	the clock
    this.tweens; //	the tween manager
    this.world; //	the game world
    this.particles; //	the particle manager
    this.physics; //	the physics manager
    this.rnd; //	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
    var background;
    var table;
    var fullScrnBtn;
    var playerFrame;
    var cardsTab;
    var cardsLabel;
    var historyTab;
    var historyLabel;
    var scrollDwnBtnLeft;
    var chatTab;
    var chatLabel;
    var infoTab;
    var infoLabel;
    var scrollDwnBtnRight;
    var leftFrame;
    var rightFrame;
    var callBtn;
    var betBtn;
    var foldBtn;
    var checkBtn;
    var allInBtn;
    var optionTab;
    var optionLabel;
    var changeRoomTab;
    var changeRoomLabel;
    var exitTab;
    var exitLabel;
    var card1;
    var card2;
    var communitycard1;
    var communitycard2;
    var communitycard3;
    var communitycard4;
    var communitycard5;
    var playerAvatar;
    var playerTimer;
};

Texas.Gameplay.prototype = {
    create: function() {
        // add background
        background = this.add.sprite(0, 0, 'game0', 'background.png');

        // add table
        table = this.add.sprite(this.world.centerX, 450, 'game0', 'table.png');
        table.anchor.setTo(0.5);

        // add left frame
        leftFrame = this.add.sprite(this.world.centerX - 550, 920, 'game0', 'infoColumn.png');
        leftFrame.anchor.setTo(0.5);
        cardsTab = this.add.sprite(this.world.centerX - 649, 814, 'game0', 'inactiveTab.png');
        cardsTab.anchor.setTo(0.5);
        historyTab = this.add.sprite(this.world.centerX - 479, 814, 'game0', 'activeTab.png');
        historyTab.anchor.setTo(0.5);
        scrollDwnBtnLeft = this.add.sprite(this.world.centerX - 379, 814, 'game0', 'scrollDwnBtn.png');
        scrollDwnBtnLeft.anchor.setTo(0.5);

        // add right frame
        rightFrame = this.add.sprite(this.world.centerX + 550, 920, 'game0', 'infoColumn.png');
        rightFrame.anchor.setTo(0.5);
        chatTab = this.add.sprite(this.world.centerX + 479, 814, 'game0', 'inactiveTab.png');
        chatTab.anchor.setTo(0.5);
        infoTab = this.add.sprite(this.world.centerX + 649, 814, 'game0', 'activeTab.png');
        infoTab.anchor.setTo(0.5);
        scrollDwnBtnRight = this.add.sprite(this.world.centerX + 379, 814, 'game0', 'scrollDwnBtn.png');
        scrollDwnBtnRight.anchor.setTo(0.5);

        // add player frame
        playerFrame = this.add.sprite(this.world.centerX, 840, 'game1', 'playerFrame.png');
        playerFrame.anchor.setTo(0.5);
        playerAvatar = this.add.sprite(this.world.centerX - 320, 740, 'game0', 'avatarFrame.png');

        // add cards
        card1 = this.add.sprite(this.world.centerX - 170, 740, 'deck', 'A_S.png');
        card2 = this.add.sprite(this.world.centerX - 120, 740, 'deck', 'A_S.png');

        // add buttons
        betBtn = this.add.sprite(this.world.centerX + 0, 680, 'game0', 'betBtn.png');
        callBtn = this.add.sprite(this.world.centerX + 160, 680, 'game0', 'betBtn.png');
        foldBtn = this.add.sprite(this.world.centerX + 0, 777, 'game0', 'betBtn.png');
        checkBtn = this.add.sprite(this.world.centerX + 160, 777, 'game0', 'betBtn.png');
        allInBtn = this.add.sprite(this.world.centerX + 160, 874, 'game0', 'betBtn.png');

        // add hud
        hubTab = this.add.sprite(0, 0, 'game0', 'hubTab.png');

        if(Texas.desktop){
          //this.game.scale.onFullScreenChange.add(goFullScreen,this);
          fullScrnBtn = this.add.sprite(1811,8,'lobby','fullScreenBtn.png');
          fullScrnBtn.inputEnabled = true;
          fullScrnBtn.input.useHandCursor = true;
          fullScrnBtn.events.onInputOver.add(fullScrnOver,this);
          fullScrnBtn.events.onInputOut.add(fullScrnOut, this);
          fullScrnBtn.events.onInputDown.add(goFullScreen, this);
        }

    },
    update: function() {

    },

    quitGame: function (pointer) {

      	this.state.start("Lobby");
  	}
};


function fullScrnOut(fullScrnBtn){
	mouseOver.stop();
	mouseClick.stop();
}

function fullScrnOver(fullScrnBtn){
	mouseOver.play();
}

function goFullScreen(){
	mouseClick.play();
	if (this.game.isFullScreen){
		//console.log("going back to normal screen")
		//fullScrnBtn.visible = true;
		this.game.scale.stopFullScreen();
	}else{
		//Still buggy, best to leave button visible at all times.
		//console.log("going full screen")
		//fullScrnBtn.visible = false;
		this.game.scale.startFullScreen(false);
	}
}
