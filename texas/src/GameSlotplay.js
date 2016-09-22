Texas.GameSlotplay = function(game) {
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
    this.Speed = 20;
    this.SYMRow1 = [];
  	this.SYMRow2 = [];
  	this.SYMRow3 = [];
  	this.SYMRow4 = [];
  	this.SYMRow5 = [];
    this.IsSpinRow1Stop = false;
  	this.IsSpinRow2Stop = false;
  	this.IsSpinRow3Stop = false;
  	this.IsSpinRow4Stop = false;
  	this.IsSpinRow5Stop = false;
    this.RdmPickSymbolRow1 =0;
    this.RdmPickSymbolRow2 =0;
    this.RdmPickSymbolRow3 =0;
    this.RdmPickSymbolRow4 =0;
    this.RdmPickSymbolRow5 =0;
    this.credit = 999;
  	this.TXTCredit = "";
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

Texas.GameSlotplay.prototype = {
    create: function() {
      //SymTest.png SymPic1.png  SymWild.png SymVegas.png SymTopHatGirl.png  SymShoes.png SymRose.png SymStocking.png
        // add background
        background = this.add.sprite(0, 0, 'game2BG');

        //spinBoxBG = this.add.sprite(this.world.centerX+580, 1000, 'game2', 'SpinBoxBG.png');

        // this.SYMRow1[0] = this.add.sprite(this.world.centerX-618,-84,'game2', 'SymTest.png');
        // this.SYMRow1[1] = this.add.sprite(this.world.centerX-618,114,'game2', 'SymTest.png');
        // this.SYMRow1[2] = this.add.sprite(this.world.centerX-618,312,'game2', 'SymTest.png');
        // this.SYMRow1[3] = this.add.sprite(this.world.centerX-618,510,'game2', 'SymTest.png');
        // this.SYMRow1[4] = this.add.sprite(this.world.centerX-618,708,'game2', 'SymTest.png');
        this.SYMRow1[0] = this.add.sprite(this.world.centerX-618,-84,'game2', 'SymPic1.png');
        this.SYMRow1[1] = this.add.sprite(this.world.centerX-618,114,'game2', 'SymVegas.png');
        this.SYMRow1[2] = this.add.sprite(this.world.centerX-618,312,'game2', 'SymWild.png');
        this.SYMRow1[3] = this.add.sprite(this.world.centerX-618,510,'game2', 'SymShoes.png');
        this.SYMRow1[4] = this.add.sprite(this.world.centerX-618,708,'game2', 'SymTopHatGirl.png');
        this.SYMRow1.forEach(function(item,index){
          item.anchor.setTo(0.5,0.5);
        },this);

        this.SYMRow2[0] = this.add.sprite(this.world.centerX-309,-84,'game2', 'SymTopHatGirl.png');
        this.SYMRow2[1] = this.add.sprite(this.world.centerX-309,114,'game2', 'SymRose.png');
        this.SYMRow2[2] = this.add.sprite(this.world.centerX-309,312,'game2', 'SymPic1.png');
        this.SYMRow2[3] = this.add.sprite(this.world.centerX-309,510,'game2', 'SymVegas.png');
        this.SYMRow2[4] = this.add.sprite(this.world.centerX-309,708,'game2', 'SymWild.png');
        this.SYMRow2.forEach(function(item,index){
          item.anchor.setTo(0.5,0.5);
        },this);

        this.SYMRow3[0] = this.add.sprite(this.world.centerX+1,-84,'game2', 'SymPic1.png');
        this.SYMRow3[1] = this.add.sprite(this.world.centerX+1,114,'game2', 'SymShoes.png');
        this.SYMRow3[2] = this.add.sprite(this.world.centerX+1,312,'game2', 'SymVegas.png');
        this.SYMRow3[3] = this.add.sprite(this.world.centerX+1,510,'game2', 'SymWild.png');
        this.SYMRow3[4] = this.add.sprite(this.world.centerX+1,708,'game2', 'SymTopHatGirl.png');
        this.SYMRow3.forEach(function(item,index){
          item.anchor.setTo(0.5,0.5);
        },this);

        this.SYMRow4[0] = this.add.sprite(this.world.centerX+312,-84,'game2', 'SymVegas.png');
        this.SYMRow4[1] = this.add.sprite(this.world.centerX+312,114,'game2', 'SymTopHatGirl.png');
        this.SYMRow4[2] = this.add.sprite(this.world.centerX+312,312,'game2', 'SymShoes.png');
        this.SYMRow4[3] = this.add.sprite(this.world.centerX+312,510,'game2', 'SymRose.png');
        this.SYMRow4[4] = this.add.sprite(this.world.centerX+312,708,'game2', 'SymPic1.png');
        this.SYMRow4.forEach(function(item,index){
          item.anchor.setTo(0.5,0.5);
        },this);

        this.SYMRow5[0] = this.add.sprite(this.world.centerX+622,-84,'game2', 'SymPic1.png');
        this.SYMRow5[1] = this.add.sprite(this.world.centerX+622,114,'game2', 'SymWild.png');
        this.SYMRow5[2] = this.add.sprite(this.world.centerX+622,312,'game2', 'SymVegas.png');
        this.SYMRow5[3] = this.add.sprite(this.world.centerX+622,510,'game2', 'SymTopHatGirl.png');
        this.SYMRow5[4] = this.add.sprite(this.world.centerX+622,708,'game2', 'SymRose.png');
        this.SYMRow5.forEach(function(item,index){
          item.anchor.setTo(0.5,0.5);
        },this);

        backgroundMask = this.add.sprite(0, 0, 'game2', 'Backround_Mask.png');


        spinBoxBG = this.add.sprite(this.world.centerX+580, 1000, 'game2', 'SpinBoxBG.png');
        spinBoxBG.anchor.setTo(0.5);
        spinBoxBTN = this.add.sprite(this.world.centerX+690, 980, 'game2', 'SpinBoxBTN.png');
        spinBoxBTN.anchor.setTo(0.5);
        spinBoxBTN.inputEnabled = true;
        spinBoxBTN.input.useHandCursor = true;
        spinBoxBTN.events.onInputDown.add(this.spinBoxBTNDown, this);
        spinLabel = this.add.text(this.world.centerX+660,965,"SPIN", {font: "25px Arial", fill:"#373232"});
        spinCreditLabel = this.add.text(this.world.centerX+600,1020,"Credit:", {font: "20px Arial", fill:"#000000"});
        this.TXTCredit = this.add.text(this.world.centerX+700, 1020,this.credit, { font: '20px Arial', fill: '#000000' });
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
    spinBoxBTNDown: function(){

      if(this.credit < 100){
 			 	this.TXTCredit.setText('No Credit');
 		 		return;
 			}
 		 spinBoxBTN.inputEnabled = false;
 		 this.credit -= 100;
 		 this.TXTCredit.setText(this.credit);

      console.log("start spin..");
      this.IsSpinRow1 = true;
			this.IsSpinRow2 = true;
			this.IsSpinRow3 = true;
			this.IsSpinRow4 = true;
			this.IsSpinRow5 = true;
      this.IsSpinRow1Stop = false;
			this.IsSpinRow2Stop = false;
			this.IsSpinRow3Stop = false;
			this.IsSpinRow4Stop = false;
			this.IsSpinRow5Stop = false;

      this.game.time.events.add(Phaser.Timer.SECOND * 2, this.StopSpinRow1, this);
      this.game.time.events.add(Phaser.Timer.SECOND * 3.5, this.StopSpinRow2, this);
			 this.game.time.events.add(Phaser.Timer.SECOND * 5, this.StopSpinRow3, this);
			this.game.time.events.add(Phaser.Timer.SECOND * 6.5, this.StopSpinRow4, this);
			this.game.time.events.add(Phaser.Timer.SECOND * 8, this.StopSpinRow5, this);

      this.RdmPickSymbolRow1 = this.game.rnd.integerInRange(0, 4);
			this.RdmPickSymbolRow2 = this.game.rnd.integerInRange(0, 4);
			this.RdmPickSymbolRow3 = this.game.rnd.integerInRange(0, 4);
			this.RdmPickSymbolRow4 = this.game.rnd.integerInRange(0, 4);
			this.RdmPickSymbolRow5 = this.game.rnd.integerInRange(0, 4);
    },
    update: function() {
      if(this.IsSpinRow1){
        this.SYMRow1.forEach(function(item){
          if(this.IsSpinRow1Stop && (this.SYMRow1[this.RdmPickSymbolRow1].y > (800-(this.RdmPickSymbolRow1*5)))){
            this.StopRow1();
            this.IsSpinRow1 = false;
            this.IsSpinRow1Stop = false;
          }else{
            item.y += this.Speed;
      			if(item.y >= 906){
  						 item.reset(this.world.centerX-618,item.y -(198 * 5));
  					}
          }
        },this);
      }
      if(this.IsSpinRow2){
        this.SYMRow2.forEach(function(item){
          if(this.IsSpinRow2Stop && (this.SYMRow2[this.RdmPickSymbolRow2].y > (800-(this.RdmPickSymbolRow2*5)))){
            this.StopRow2();
            this.IsSpinRow2 = false;
            this.IsSpinRow2Stop = false;
          }else{
            item.y += this.Speed;
            if(item.y >= 906){
               item.reset(this.world.centerX-309,item.y -(198 * 5));
            }
          }
        },this);
      }
      if(this.IsSpinRow3){
        this.SYMRow3.forEach(function(item){
          if(this.IsSpinRow3Stop && (this.SYMRow3[this.RdmPickSymbolRow3].y > (800-(this.RdmPickSymbolRow3*5)))){
            this.StopRow3();
            this.IsSpinRow3 = false;
            this.IsSpinRow3Stop = false;
          }else{
            item.y += this.Speed;
            if(item.y >= 906){
               item.reset(this.world.centerX+1,item.y -(198 * 5));
            }
          }
        },this);
      }

    if(this.IsSpinRow4){
      this.SYMRow4.forEach(function(item){
        if(this.IsSpinRow4Stop && (this.SYMRow4[this.RdmPickSymbolRow4].y > (800-(this.RdmPickSymbolRow4*5)))){
          this.StopRow4();
          this.IsSpinRow4 = false;
          this.IsSpinRow4Stop = false;
        }else{
          item.y += this.Speed;
          if(item.y >= 906){
             item.reset(this.world.centerX+312,item.y -(198 * 5));
          }
        }
      },this);
    }
    if(this.IsSpinRow5){
      this.SYMRow5.forEach(function(item){
        if(this.IsSpinRow5Stop && (this.SYMRow5[this.RdmPickSymbolRow5].y > (800-(this.RdmPickSymbolRow5*5)))){
          this.StopRow5();
          this.IsSpinRow5 = false;
          this.IsSpinRow5Stop = false;
        }else{
          item.y += this.Speed;
          if(item.y >= 906){
             item.reset(this.world.centerX+622,item.y -(198 * 5));
          }
        }
      },this);
    }
  },
      // if(this.IsSpinRow1){
				// this.SYMRow1.forEach(function(item){
				// 	//if(this.IsSpinRow1Stop && (this.SYMRow1[this.RdmPickSymbolRow1].y > (400-(this.RdmPickSymbolRow1*5)))){
				// 	if(this.IsSpinRow1Stop &&  this.Speed <= 5){
        //   //if(this.IsSpinRow1Stop){
				// 				this.StopRow1();
				// 				this.IsSpinRow1 = false;
				// 				this.IsSpinRow1Stop = false;
				// 	}else{
				// 			 item.y += this.Speed;
				// 			 if(item.y >= 906){
				// 				 item.reset(this.world.centerX-618,item.y -(198 * 5));
				// 			 }
				// 	}
				// },this);



    StopSpinRow1: function(){
 		 this.IsSpinRow1Stop = true;
 	 },
 	 StopRow1: function(){
 		 console.log("--------Colume 1-------");
 		 this.SYMRow1.forEach(function(item,index){
 				 if(item.y < 96){
 					 item.moves = false;
 					 this.game.add.tween(item).to({y: -84}, 1000,Phaser.Easing.Elastic.Out,false).start();
 					 //this.SymbolAfterSpin[0][0] = item.key; //[row][col]
 				 }
 				 else if(item.y >= 96 && item.y < 294){
 					 item.moves = false;
 					 this.game.add.tween(item).to({y: 114}, 1000,Phaser.Easing.Elastic.Out,false).start();
 					 //this.SymbolAfterSpin[1][0] = item.key;
 				 }
 				 else if(item.y >= 294 && item.y < 492){
 					 item.moves = false;
 					 this.game.add.tween(item).to({y: 312}, 1000,Phaser.Easing.Elastic.Out,false).start();
 					 //this.SymbolAfterSpin[2][0] = item.key;
 				 }
 				 else if(item.y >= 492 && item.y < 690){
 					 item.moves = false;
 					 this.game.add.tween(item).to({y: 510}, 1000,Phaser.Easing.Elastic.Out,false).start();
 					 //this.SymbolAfterSpin[3][0] = item.key;
 				 }
 				 else if(item.y >= 690){
 					 item.moves = false;
 					 this.game.add.tween(item).to({y: 708}, 1000,Phaser.Easing.Elastic.Out,false).start();
 					 //this.SymbolAfterSpin[4][0] = item.key;
 				 }
         console.log(item.key + " " +item.y);
 		 },this);
 		 //console.log(this.SymbolAfterSpin[0][0] +" "+this.SymbolAfterSpin[1][0]+" "+this.SymbolAfterSpin[2][0]+" "+this.SymbolAfterSpin[3][0]+" "+this.SymbolAfterSpin[4][0]);
 	 },

   StopSpinRow2: function(){
    this.IsSpinRow2Stop = true;
  },
  StopRow2: function(){
    console.log("--------Colume 1-------");
    this.SYMRow2.forEach(function(item,index){
        if(item.y < 96){
          item.moves = false;
          this.game.add.tween(item).to({y: -84}, 1000,Phaser.Easing.Elastic.Out,false).start();
          //this.SymbolAfterSpin[0][0] = item.key; //[row][col]
        }
        else if(item.y >= 96 && item.y < 294){
          item.moves = false;
          this.game.add.tween(item).to({y: 114}, 1000,Phaser.Easing.Elastic.Out,false).start();
          //this.SymbolAfterSpin[1][0] = item.key;
        }
        else if(item.y >= 294 && item.y < 492){
          item.moves = false;
          this.game.add.tween(item).to({y: 312}, 1000,Phaser.Easing.Elastic.Out,false).start();
          //this.SymbolAfterSpin[2][0] = item.key;
        }
        else if(item.y >= 492 && item.y < 690){
          item.moves = false;
          this.game.add.tween(item).to({y: 510}, 1000,Phaser.Easing.Elastic.Out,false).start();
          //this.SymbolAfterSpin[3][0] = item.key;
        }
        else if(item.y >= 690){
          item.moves = false;
          this.game.add.tween(item).to({y: 708}, 1000,Phaser.Easing.Elastic.Out,false).start();
          //this.SymbolAfterSpin[4][0] = item.key;
        }
        //console.log(item.key + " " +item.y);
    },this);
    //console.log(this.SymbolAfterSpin[0][0] +" "+this.SymbolAfterSpin[1][0]+" "+this.SymbolAfterSpin[2][0]+" "+this.SymbolAfterSpin[3][0]+" "+this.SymbolAfterSpin[4][0]);
  },
  StopSpinRow3: function(){
   this.IsSpinRow3Stop = true;
 },
 StopRow3: function(){
   console.log("--------Colume 1-------");
   this.SYMRow3.forEach(function(item,index){
       if(item.y < 96){
         item.moves = false;
         this.game.add.tween(item).to({y: -84}, 1000,Phaser.Easing.Elastic.Out,false).start();
         //this.SymbolAfterSpin[0][0] = item.key; //[row][col]
       }
       else if(item.y >= 96 && item.y < 294){
         item.moves = false;
         this.game.add.tween(item).to({y: 114}, 1000,Phaser.Easing.Elastic.Out,false).start();
         //this.SymbolAfterSpin[1][0] = item.key;
       }
       else if(item.y >= 294 && item.y < 492){
         item.moves = false;
         this.game.add.tween(item).to({y: 312}, 1000,Phaser.Easing.Elastic.Out,false).start();
         //this.SymbolAfterSpin[2][0] = item.key;
       }
       else if(item.y >= 492 && item.y < 690){
         item.moves = false;
         this.game.add.tween(item).to({y: 510}, 1000,Phaser.Easing.Elastic.Out,false).start();
         //this.SymbolAfterSpin[3][0] = item.key;
       }
       else if(item.y >= 690){
         item.moves = false;
         this.game.add.tween(item).to({y: 708}, 1000,Phaser.Easing.Elastic.Out,false).start();
         //this.SymbolAfterSpin[4][0] = item.key;
       }
       //console.log(item.key + " " +item.y);
   },this);
   //console.log(this.SymbolAfterSpin[0][0] +" "+this.SymbolAfterSpin[1][0]+" "+this.SymbolAfterSpin[2][0]+" "+this.SymbolAfterSpin[3][0]+" "+this.SymbolAfterSpin[4][0]);
 },
 StopSpinRow4: function(){
  this.IsSpinRow4Stop = true;
},
StopRow4: function(){
  console.log("--------Colume 1-------");
  this.SYMRow4.forEach(function(item,index){
      if(item.y < 96){
        item.moves = false;
        this.game.add.tween(item).to({y: -84}, 1000,Phaser.Easing.Elastic.Out,false).start();
        //this.SymbolAfterSpin[0][0] = item.key; //[row][col]
      }
      else if(item.y >= 96 && item.y < 294){
        item.moves = false;
        this.game.add.tween(item).to({y: 114}, 1000,Phaser.Easing.Elastic.Out,false).start();
        //this.SymbolAfterSpin[1][0] = item.key;
      }
      else if(item.y >= 294 && item.y < 492){
        item.moves = false;
        this.game.add.tween(item).to({y: 312}, 1000,Phaser.Easing.Elastic.Out,false).start();
        //this.SymbolAfterSpin[2][0] = item.key;
      }
      else if(item.y >= 492 && item.y < 690){
        item.moves = false;
        this.game.add.tween(item).to({y: 510}, 1000,Phaser.Easing.Elastic.Out,false).start();
        //this.SymbolAfterSpin[3][0] = item.key;
      }
      else if(item.y >= 690){
        item.moves = false;
        this.game.add.tween(item).to({y: 708}, 1000,Phaser.Easing.Elastic.Out,false).start();
        //this.SymbolAfterSpin[4][0] = item.key;
      }
      //console.log(item.key + " " +item.y);
  },this);
  //console.log(this.SymbolAfterSpin[0][0] +" "+this.SymbolAfterSpin[1][0]+" "+this.SymbolAfterSpin[2][0]+" "+this.SymbolAfterSpin[3][0]+" "+this.SymbolAfterSpin[4][0]);
},
StopSpinRow5: function(){
 this.IsSpinRow5Stop = true;
},
StopRow5: function(){
 console.log("--------Colume 1-------");
 this.SYMRow5.forEach(function(item,index){
     if(item.y < 96){
       item.moves = false;
       this.game.add.tween(item).to({y: -84}, 1000,Phaser.Easing.Elastic.Out,false).start();
       //this.SymbolAfterSpin[0][0] = item.key; //[row][col]
     }
     else if(item.y >= 96 && item.y < 294){
       item.moves = false;
       this.game.add.tween(item).to({y: 114}, 1000,Phaser.Easing.Elastic.Out,false).start();
       //this.SymbolAfterSpin[1][0] = item.key;
     }
     else if(item.y >= 294 && item.y < 492){
       item.moves = false;
       this.game.add.tween(item).to({y: 312}, 1000,Phaser.Easing.Elastic.Out,false).start();
       //this.SymbolAfterSpin[2][0] = item.key;
     }
     else if(item.y >= 492 && item.y < 690){
       item.moves = false;
       this.game.add.tween(item).to({y: 510}, 1000,Phaser.Easing.Elastic.Out,false).start();
       //this.SymbolAfterSpin[3][0] = item.key;
     }
     else if(item.y >= 690){
       item.moves = false;
       this.game.add.tween(item).to({y: 708}, 1000,Phaser.Easing.Elastic.Out,false).start();
       //this.SymbolAfterSpin[4][0] = item.key;
     }
     //console.log(item.key + " " +item.y);
 },this);
 this.ShowAnimationResult();
 //console.log(this.SymbolAfterSpin[0][0] +" "+this.SymbolAfterSpin[1][0]+" "+this.SymbolAfterSpin[2][0]+" "+this.SymbolAfterSpin[3][0]+" "+this.SymbolAfterSpin[4][0]);
},
    ShowAnimationResult(){
      spinBoxBTN.inputEnabled = true;
    },


    quitGame: function (pointer) {

      	//this.state.start("Lobby");
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
