Texas.Lobby = function (game) {

  var background;
  var createTableBtn;
  var createTableLabel;
  var playNowBtn;
  var playNowLabel;
  var fullScrnBtn;

  //Player's frame
  var playerFrame;
  var playerAvatar;
  var topUpBtn;
  var topUpLabel;
  var withdrawBtn;
  var withdrawLabel;

  var siteLabel;
  var playerLabel;
  var playerLvlLabel;
  var level;
  var playerMoneyLabel;
  var money;
  var playerWinLabel;
  var win;
  var playerLostLabel;
  var lost;

  //sfx
  var bgm;
  var ambience;
  var mouseOver;
  var mouseClick;

  //RoomHolderBet



  };

  Texas.Lobby.prototype = {
    	create: function(){
          var block = 0;
          var roomHolderBetMinimumBet = "MINIMUM BET";
          var roomHolderBetGold = "10000 GOLD";
          var roomHolderBetCreateRoom = "CREATE\nROOM";
          var roomHolderBetEnterRoom = "ENTER\nROOM";
          var roomHolderBetTableText = "TABLE";
          var roomHolderBetTableCurrentBet = "50";
          var roomHolderBetTableMaxBet = "/50";

          var roomTable = "TABLE'S NAME";
          var roomTableMaximumBet = "MAXIMUM BET";
          var roomTableMaxMoney = "MAX MONEY";
          var roomTableGold = "1000 GOLD";
          var roomTableWatchTable = "WATCH\nTABLE";
          var roomTableJoinTable ="JOIN\nTABLE";
          var roomTablePlayers ="PLAYERS";
          var roomTableCurrentPlayer = "7";
          var roomTableMaxPlayer = "/7";




      	this.add.sprite(0, 0, 'lobby', 'background.jpg');

        if(Texas.desktop){
          	fullScrnBtn = this.add.sprite(1811,8,'lobby','fullScreenBtn.png');
            fullScrnBtn.inputEnabled = true;
      	    fullScrnBtn.input.useHandCursor = true;
      	    fullScrnBtn.events.onInputOver.add(fullScrnOver,this);
      	    fullScrnBtn.events.onInputOut.add(fullScrnOut, this);
      	    fullScrnBtn.events.onInputDown.add(goFullScreen, this);
          }

        // createTableBtn = this.add.sprite(1453,563, 'lobby', 'createTableBtn.png');
        // createTableLabel = this.add.text(1500,568,"CREATE\n TABLE", {font: "18px Arial", fill:"#c1a085"});
        createTableBtn = this.add.sprite(1193,563, 'lobby', 'createTableBtn.png');
        createTableLabel = this.add.text(1240,568,"CREATE\n TABLE", {font: "18px Arial", fill:"#c1a085"});

        playNowBtn = this.add.sprite(1660,563, 'lobby', 'playNowBtn.png');
        playNowBtn.inputEnabled = true;
        playNowBtn.input.useHandCursor = true;
        playNowBtn.events.onInputOver.add(playNowOver,this);
        playNowBtn.events.onInputOut.add(playNowOut, this);
        playNowBtn.events.onInputDown.add(playNowDown, this);

        playNowLabel = this.add.text(1676,580,"PLAY NOW", {font: "18px Arial", fill:"#d5b42b"});

        playSlotBtn = this.add.sprite(1410,563, 'lobby', 'playNowBtn.png');
        playSlotBtn.inputEnabled = true;
        playSlotBtn.input.useHandCursor = true;
        playSlotBtn.events.onInputOver.add(playNowOver,this);
        playSlotBtn.events.onInputOut.add(playNowOut, this);
        playSlotBtn.events.onInputDown.add(playSlotDown, this);

        playSlotLabel = this.add.text(1426,580,"PLAY Slot", {font: "18px Arial", fill:"#d5b42b"});

        //create the player's ID box here
        playerFrame = this.add.sprite(33,563,'lobby', 'userBox.png');
        playerProfile = this.add.sprite(60,598, 'lobby', 'profilePicFrame.jpg');
        playerProfile.alpha = 0.8;

        topUpBtn = this.add.sprite(251,722, 'lobby', 'topUpBtn.png');
        topUpLabel = this.add.text(290,737,"CHARGE MONEY", {font: "16px Arial", fill:"#c1a085"});

        withdrawBtn = this.add.sprite(251,773, 'lobby', 'withdrawBtn.png');
        withdrawLabel = this.add.text(270,787,"WITHDRAW MONEY", {font: "16px Arial", fill:"#d5b42b"});

        playerLabel = this.add.text(75,777,"PLAYER NAME", {font: "16px Arial", fill:"#fde7d5"});

        siteLabel = this.add.text(251,600,"SITE NAME", {font: "16px Arial", fill:"#fde7d5"});

        playerLvlLabel = this.add.text(251,624,"LEVEL:", {font: "16px Arial", fill:"#c1a085"});
        level = this.add.text(320,624,"10", {font: "16px Arial", fill:"#d5b42b"});

        playerMoneyLabel = this.add.text(251,649,"CASH:", {font: "16px Arial", fill:"#c1a085"});
        money = this.add.text(320,649,"$ 10", {font: "16px Arial", fill:"#d5b42b"});

        playerWinLabel = this.add.text(251,674,"WIN:", {font: "16px Arial", fill:"#c1a085"});
        win = this.add.text(306,674,"10", {font: "16px Arial", fill:"#d5b42b"});

        playerLostLabel = this.add.text(356,674,"LOST:", {font: "16px Arial", fill:"#c1a085"});
        lost = this.add.text(416,674,"10", {font: "16px Arial", fill:"#d5b42b"});

        bgm = this.add.audio('lobbyBGM');
        ambience =this.add.audio('ambience');
        mouseOver = this.add.audio('mouseOver');
        mouseClick = this.add.audio('mouseClick');

        //play BGM and ambient..
        //bgm.loopFull(1);
        //ambience.loopFull(1);

        // block++;
        // this.createRoom(block,roomHolderBetMinimumBet, roomHolderBetGold, roomHolderBetCreateRoom, roomHolderBetEnterRoom,roomHolderBetTableText, roomHolderBetTableCurrentBet, roomHolderBetTableMaxBet);
        // block++;
        // this.createRoom(block,roomHolderBetMinimumBet, roomHolderBetGold, roomHolderBetCreateRoom, roomHolderBetEnterRoom,roomHolderBetTableText, roomHolderBetTableCurrentBet, roomHolderBetTableMaxBet);
        // block++;
        // this.createRoom(block,roomHolderBetMinimumBet, roomHolderBetGold, roomHolderBetCreateRoom, roomHolderBetEnterRoom,roomHolderBetTableText, roomHolderBetTableCurrentBet, roomHolderBetTableMaxBet);
        // block++;
        // this.createRoom(block,roomHolderBetMinimumBet, roomHolderBetGold, roomHolderBetCreateRoom, roomHolderBetEnterRoom,roomHolderBetTableText, roomHolderBetTableCurrentBet, roomHolderBetTableMaxBet);
        // block++;
        // this.createRoom(block,roomHolderBetMinimumBet, roomHolderBetGold, roomHolderBetCreateRoom, roomHolderBetEnterRoom,roomHolderBetTableText, roomHolderBetTableCurrentBet, roomHolderBetTableMaxBet);
        block++;
        this.createTable(block,roomTable,roomTableMaxMoney,roomTableGold,roomTableWatchTable,roomTableJoinTable,roomTablePlayers,roomTableCurrentPlayer,roomTableMaxPlayer);
        block++;
        this.createTable(block,roomTable,roomTableMaxMoney,roomTableGold,roomTableWatchTable,roomTableJoinTable,roomTablePlayers,roomTableCurrentPlayer,roomTableMaxPlayer);
        block++;
        this.createTable(block,roomTable,roomTableMaxMoney,roomTableGold,roomTableWatchTable,roomTableJoinTable,roomTablePlayers,roomTableCurrentPlayer,roomTableMaxPlayer);
        block++;
        this.createTable(block,roomTable,roomTableMaxMoney,roomTableGold,roomTableWatchTable,roomTableJoinTable,roomTablePlayers,roomTableCurrentPlayer,roomTableMaxPlayer);
        block++;
        this.createTable(block,roomTable,roomTableMaxMoney,roomTableGold,roomTableWatchTable,roomTableJoinTable,roomTablePlayers,roomTableCurrentPlayer,roomTableMaxPlayer);


    },
    	update: function () {

    },
      createRoom: function(block,roomHolderBetMinimumBet, roomHolderBetGold, roomHolderBetCreateRoom, roomHolderBetEnterRoom, roomHolderBetTableText,roomHolderBetTableCurrentBet, roomHolderBetTableMaxBet) {

        var xPos;
        var yPos;

        if (block % 2 == 1) {
          xPos = 590;
          yPos = Math.floor(block / 2) * 150 + 630;
        } else {
          xPos = 1238;
          yPos = (block / 2) * 150 + 480;
        }

        this.add.sprite(xPos,yPos, 'lobby', 'tableRoomFrame.png');
        this.add.sprite(xPos + 406,yPos + 11, 'lobby', "enterBtn.png");
        this.add.sprite(xPos + 261,yPos + 11, 'lobby', "createWatchBtn.png");
        this.add.sprite(xPos + 20,yPos + 102, 'lobby', "roomMeterBar.png");
        this.add.text(xPos + 20,yPos+17,roomHolderBetMinimumBet, {font: "22px Arial", fill:"#c1a085",fontWeight:'bold'});
        this.add.text(xPos + 20,yPos+46,roomHolderBetGold, {font: "32px Arial", fill:"#d5b42b",fontWeight:'bold'});
        this.add.text(xPos + 288,yPos+26,roomHolderBetCreateRoom, {font: "20px Arial", fill:"#c1a085",fontWeight:'bold',align:'left'});
        this.add.text(xPos + 440,yPos+26,roomHolderBetEnterRoom, {font: "20px Arial", fill:"#d5b42b",fontWeight:'bold',align:'left'});
        this.add.text(xPos + 500,yPos+104,roomHolderBetTableText, {font: "14px Arial", fill:"#d5b42b",align:'left'});
        this.add.text(xPos + 550,yPos+104,roomHolderBetTableCurrentBet,{font:"14px Arial",fill:"#fde7d5",align:'left'});
        this.add.text(xPos + 565,yPos+104,roomHolderBetTableMaxBet,{font:"14px Arial",fill:"#fde7d5",align:'left'});


      },
      createTable: function(block,roomTable,roomTableMaxMoney,roomTableGold,roomTableWatchTable,roomTableJoinTable,roomTablePlayers,roomTableCurrentPlayer,roomTableMaxPlayer){
        var xPos;
        var yPos;

        if(block % 2 ==1){
          xPos = 590;
          yPos = Math.floor(block / 2) * 150 + 630;
        } else {
          xPos = 1238;
          yPos = (block / 2) * 150 + 480;
        }

        this.add.sprite(xPos,yPos, 'lobby', 'tableRoomFrame.png');
        this.add.sprite(xPos + 406,yPos + 11, 'lobby', "enterBtn.png");
        this.add.sprite(xPos + 261,yPos + 11, 'lobby', "createWatchBtn.png");
        this.add.sprite(xPos + 20,yPos + 102, 'lobby', "roomMeterBar.png");
        this.add.text(xPos + 20,yPos+17,roomTable, {font: "22px Arial", fill:"#c1a085",fontWeight:'bold'});
        this.add.text(xPos + 20,yPos+60,roomTableMaxMoney, {font: "16px Arial", fill:"#c1a085",fontWeight:'bold'});
        this.add.text(xPos + 126,yPos+55,roomTableGold, {font: "22px Arial", fill:"#d5b42b",fontWeight:'bold'});
        this.add.text(xPos + 288,yPos+26,roomTableWatchTable, {font: "20px Arial", fill:"#c1a085",fontWeight:'bold',align:'left'});
        this.add.text(xPos + 440,yPos+26,roomTableJoinTable, {font: "20px Arial", fill:"#d5b42b",fontWeight:'bold',align:'left'});
        this.add.text(xPos + 500,yPos+104,roomTablePlayers, {font: "14px Arial", fill:"#d5b42b",align:'left'});
        this.add.text(xPos + 570,yPos+104,roomTableCurrentPlayer,{font:"14px Arial",fill:"#fde7d5",align:'left'});
        this.add.text(xPos + 580,yPos+104,roomTableMaxPlayer,{font:"14px Arial",fill:"#fde7d5",align:'left'});

      }


  };

    function playNowOver(playNowBtn){
      mouseOver.play();
    }

    function playNowOut(playNowBtn){
      mouseOver.stop();
      mouseClick.stop();
    }

    function playNowDown(playNowBtn){
      mouseClick.play();
    	mouseClick.stop();
    	mouseOver.stop();
    	this.state.start('Gameplay');
    }

    function playSlotDown(playNowBtn){
      mouseClick.play();
    	mouseClick.stop();
    	mouseOver.stop();
    	this.state.start('GameSlotplay');
    }
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
