BasicGame.PlayLotto = function (game) {

	this.music = null;
	this.playButton = null;
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

	this.RdmPickSymbolRow1 = 0;
	this.RdmPickSymbolRow2 = 0;
	this.RdmPickSymbolRow3 = 0;
	this.RdmPickSymbolRow4 = 0;
	this.RdmPickSymbolRow5 = 0;
	this.credit = 999;
	this.TXTCredit = "";
	this.WinPos = [
		['1/0/A','1/1/A','1/2/A','1/3/A','1/4/A'],
		['2/0/A','2/1/A','2/2/A','2/3/A','2/4/A'],
		['3/0/A','3/1/A','3/2/A','3/3/A','3/4/A'],
		['4/0/A','4/1/A','4/2/A','4/3/A','4/4/A']
	];
	this.SymbolAfterSpin = new Array();
	//this.SymbolAfterSpin =[[]];
};

BasicGame.PlayLotto.prototype = {
    create: function () {
				console.log(this.WinPos[0][0]);
				for (i=0;i<5;i++) {
 					this.SymbolAfterSpin[i]=new Array();
 					for (j=0;j<5;j++) {
  					this.SymbolAfterSpin[i][j]=0;
 					}
				}
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.add.sprite(0,0,'bg');
        //SymbolShoes SymbolWild SymbolScatter SymbolPic1 SymbolStocking SymbolTopHatGirl TestSymbol
				 //this.row1 = this.game.add.group();
				 //this.row1.enableBody = true;
				this.SYMRow1[0] = this.game.add.sprite(Number(row1Pos[0].split("/")[0]),Number(row1Pos[0].split("/")[1]),'SymbolShoes');
				this.SYMRow1[1] = this.game.add.sprite(Number(row1Pos[1].split("/")[0]),Number(row1Pos[1].split("/")[1]),'SymbolStocking');
				this.SYMRow1[2] = this.game.add.sprite(Number(row1Pos[2].split("/")[0]),Number(row1Pos[2].split("/")[1]),'SymbolRose');
				this.SYMRow1[3] = this.game.add.sprite(Number(row1Pos[3].split("/")[0]),Number(row1Pos[3].split("/")[1]),'SymbolScatter');
				this.SYMRow1[4] = this.game.add.sprite(Number(row1Pos[4].split("/")[0]),Number(row1Pos[4].split("/")[1]),'SymbolTopHatGirl');
				this.SYMRow1.forEach(function(item,index){
					item.anchor.setTo(0.5,0.5);
				},this);

				this.SYMRow2[0] = this.game.add.sprite(Number(row2Pos[0].split("/")[0]),Number(row2Pos[0].split("/")[1]),'SymbolTopHatGirl');
				this.SYMRow2[1] = this.game.add.sprite(Number(row2Pos[1].split("/")[0]),Number(row2Pos[1].split("/")[1]),'SymbolPic1');
				this.SYMRow2[2] = this.game.add.sprite(Number(row2Pos[2].split("/")[0]),Number(row2Pos[2].split("/")[1]),'SymbolRose');
				this.SYMRow2[3] = this.game.add.sprite(Number(row2Pos[3].split("/")[0]),Number(row2Pos[3].split("/")[1]),'SymbolShoes');
				this.SYMRow2[4] = this.game.add.sprite(Number(row2Pos[4].split("/")[0]),Number(row2Pos[4].split("/")[1]),'SymbolScatter');
				this.SYMRow2.forEach(function(item,index){
				  item.anchor.setTo(0.5,0.5);
				},this);

				this.SYMRow3[0] = this.game.add.sprite(Number(row3Pos[0].split("/")[0]),Number(row3Pos[0].split("/")[1]),'SymbolRose');
				this.SYMRow3[1] = this.game.add.sprite(Number(row3Pos[1].split("/")[0]),Number(row3Pos[1].split("/")[1]),'SymbolTopHatGirl');
				this.SYMRow3[2] = this.game.add.sprite(Number(row3Pos[2].split("/")[0]),Number(row3Pos[2].split("/")[1]),'SymbolWild');
				this.SYMRow3[3] = this.game.add.sprite(Number(row3Pos[3].split("/")[0]),Number(row3Pos[3].split("/")[1]),'SymbolScatter');
				this.SYMRow3[4] = this.game.add.sprite(Number(row3Pos[4].split("/")[0]),Number(row3Pos[4].split("/")[1]),'SymbolShoes');
				this.SYMRow3.forEach(function(item,index){
				  item.anchor.setTo(0.5,0.5);
				},this);

				this.SYMRow4[0] = this.game.add.sprite(Number(row4Pos[0].split("/")[0]),Number(row4Pos[0].split("/")[1]),'SymbolShoes');
				this.SYMRow4[1] = this.game.add.sprite(Number(row4Pos[1].split("/")[0]),Number(row4Pos[1].split("/")[1]),'SymbolStocking');
				this.SYMRow4[2] = this.game.add.sprite(Number(row4Pos[2].split("/")[0]),Number(row4Pos[2].split("/")[1]),'SymbolRose');
				this.SYMRow4[3] = this.game.add.sprite(Number(row4Pos[3].split("/")[0]),Number(row4Pos[3].split("/")[1]),'SymbolWild');
				this.SYMRow4[4] = this.game.add.sprite(Number(row4Pos[4].split("/")[0]),Number(row4Pos[4].split("/")[1]),'SymbolTopHatGirl');
				this.SYMRow4.forEach(function(item,index){
				  item.anchor.setTo(0.5,0.5);
				},this);

				this.SYMRow5[0] = this.game.add.sprite(Number(row5Pos[0].split("/")[0]),Number(row5Pos[0].split("/")[1]),'SymbolWild');
				this.SYMRow5[1] = this.game.add.sprite(Number(row5Pos[1].split("/")[0]),Number(row5Pos[1].split("/")[1]),'SymbolTopHatGirl');
				this.SYMRow5[2] = this.game.add.sprite(Number(row5Pos[2].split("/")[0]),Number(row5Pos[2].split("/")[1]),'SymbolRose');
				this.SYMRow5[3] = this.game.add.sprite(Number(row5Pos[3].split("/")[0]),Number(row5Pos[3].split("/")[1]),'SymbolStocking');
				this.SYMRow5[4] = this.game.add.sprite(Number(row5Pos[4].split("/")[0]),Number(row5Pos[4].split("/")[1]),'SymbolShoes');
				this.SYMRow5.forEach(function(item,index){
				  item.anchor.setTo(0.5,0.5);
				},this);


				//****Animation
        //this.RefAniPic1 = this.game.add.sprite(row1Pos[1].split("/")[0],row1Pos[1].split("/")[1],'AniPic1');
        // RefAniPic1.scale.set(1);
        // RefAniPic1.anchor.setTo(0.5,0.5);
        // RefAniPic1.smoothed = false;
        // anim = RefAniPic1.animations.add('smile');
        // anim.play(10,true);

        this.add.sprite(0,0,'TopLayer');
				this.btn_lotto_spin = this.add.button(TempWidth-140 , TempHeight-50, 'BtnSpin', this.BtnSpinOnClick,this);
        this.btn_lotto_spin.input.useHandCursor = true;
        this.btn_lotto_spin.scale.setTo(0.7, 0.7);

			//	this.TXTCredit = this.add.text(30, TempHeight - 40, 'Credit: '+this.credit+ ' ', { font: '15px Arial', fill: '#ffffff' });
				this.TXTCredit = this.add.text(TempWidth-230, TempHeight - 40, 'Credit: '+this.credit+ ' ', { font: '15px Arial', fill: '#ffffff' });
				//TXTCredit.anchor.setTo(0.5, 0.5);
        // this.btn_lotto_stop = this.add.button(300, 400, 'BtnStop', this.BtnStopOnClick,this);
        // this.btn_lotto_stop.input.useHandCursor = true;
        // this.btn_lotto_stop.scale.setTo(0.7, 0.7);
        //this.stage.backgroundColor = '#1187fc';
        //***May use later
        //this.scale.setResizeCallback(this.gameResized, this);
    },
    update: function () {

			if(this.IsSpinRow1){
				//this.pickSymbol = this.game.rnd.integerInRange(0, 4);
				this.SYMRow1.forEach(function(item){
					//console.log(this.IsSpinRow1Stop +" YY "+this.SYMRow1[0].y);
					//if()
					if(this.IsSpinRow1Stop && (this.SYMRow1[this.RdmPickSymbolRow1].y > (400-(this.RdmPickSymbolRow1*5)))){
							this.StopRow1();
							this.IsSpinRow1 = false;
							this.IsSpinRow1Stop = false;
					// }else if(!this.IsSpinRow1Stop){
					}else{
						 item.y += 20;
					 if(item.y >= row1EndCheckPoint){
						 item.reset(Number(row1Pos[4].split("/")[0]),item.y - ((Number(row1Pos[4].split("/")[1]))-(Number(row1Pos[3].split("/")[1]))) * 5);
					 }
				 }
				},this);
				//console.log("-----------");
			}

			if(this.IsSpinRow2){
				//this.pickSymbol = this.game.rnd.integerInRange(0, 4);
				this.SYMRow2.forEach(function(item){
					if(this.IsSpinRow2Stop && (this.SYMRow2[this.RdmPickSymbolRow2].y > (400-(this.RdmPickSymbolRow2*5)))){
							this.StopRow2();
							this.IsSpinRow2 = false;
							this.IsSpinRow2Stop = false;
					//}else if(!this.IsSpinRow2Stop){
					}else {
						item.y += 20;
					 	if(item.y >= row2EndCheckPoint){
						 item.reset(Number(row2Pos[4].split("/")[0]),item.y - ((Number(row2Pos[4].split("/")[1]))-(Number(row2Pos[3].split("/")[1]))) * 5);
					 }
				 }
				},this);
			}
			if(this.IsSpinRow3){
				this.SYMRow3.forEach(function(item){
					if(this.IsSpinRow3Stop && (this.SYMRow3[this.RdmPickSymbolRow3].y > (400-(this.RdmPickSymbolRow3*5)))){
					// 	setTimeout(function() {
					// 		this.pass = true;
					// }, 1000);
					 this.StopRow3();
					 this.IsSpinRow3 = false;
					 this.IsSpinRow3Stop = false;

				 }else{
						 item.y += 20;
					 if(item.y >= row3EndCheckPoint){
						 item.reset(Number(row3Pos[4].split("/")[0]),item.y - ((Number(row3Pos[4].split("/")[1]))-(Number(row3Pos[3].split("/")[1]))) * 5);
					 }
					 //console.log("Row3" + this.pickSymbolRow3 +" "+ this.SYMRow3[this.pickSymbolRow3].y +" "+this.SYMRow3[this.pickSymbolRow3].key);
				 }

				},this);
			}
			if(this.IsSpinRow4){
				//this.pickSymbol = this.game.rnd.integerInRange(0, 4);
				this.SYMRow4.forEach(function(item){

					if(this.IsSpinRow4Stop && (this.SYMRow4[this.RdmPickSymbolRow4].y > (400-(this.RdmPickSymbolRow4*5)))){
					 this.StopRow4();
					 this.IsSpinRow4 = false;
					 this.IsSpinRow4Stop = false;
				 }else{
				     item.y += 20;
				   if(item.y >= row4EndCheckPoint){
				     item.reset(Number(row4Pos[4].split("/")[0]),item.y - ((Number(row4Pos[4].split("/")[1]))-(Number(row4Pos[3].split("/")[1]))) * 5);
				   }
				 }
				},this);
			}
			if(this.IsSpinRow5){
				this.SYMRow5.forEach(function(item){
					if(this.IsSpinRow5Stop && (this.SYMRow5[this.RdmPickSymbolRow5].y > (400-(this.RdmPickSymbolRow5*5)))){
						this.StopRow5();
					 this.IsSpinRow5 = false;
					 this.IsSpinRow5Stop = false;
				 }else{
				     item.y += 20;
				   if(item.y >= row5EndCheckPoint){
				     item.reset(Number(row5Pos[4].split("/")[0]),item.y - ((Number(row5Pos[4].split("/")[1]))-(Number(row5Pos[3].split("/")[1]))) * 5);
				   }
				 }

				},this);
			}
    },

   BtnSpinOnClick: function(){
		 //this.btn_lotto_spin.enabled = false;

		 if(this.credit < 100){
			 	this.TXTCredit.setText('No Credit');
		 		return;
			}
		 this.btn_lotto_spin.inputEnabled = false;
		 this.credit -= 100;
		 this.TXTCredit.setText('Credit: '+this.credit);

		 if(this.RemoveAnimation){
		 	//this.RefAniPic1.destroy();
			this.Pic1.destroy();
			//this.RemoveAnimation=false;
		 }
			this.IsSpin = true;
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
	 BtnStopOnClick: function(){
		 this.IsSpin = false;
	 },

	 StopSpinRow1: function(){
		 this.IsSpinRow1Stop = true;
	 },
	 StopRow1: function(){
		 console.log("--------Colume 1-------");
		 this.SYMRow1.forEach(function(item,index){
				 if(item.y < 47){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row1Pos[0].split("/")[1])}, 1000,Phaser.Easing.Elastic.Out,false).start();
					 this.SymbolAfterSpin[0][0] = item.key; //[row][col]
				 }
				 else if(item.y >= 47 && item.y < 150){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row1Pos[1].split("/")[1])}, 1000,Phaser.Easing.Elastic.Out,false).start();
					 this.SymbolAfterSpin[1][0] = item.key;
				 }
				 else if(item.y >= 150 && item.y < 253){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row1Pos[2].split("/")[1])}, 1000,Phaser.Easing.Elastic.Out,false).start();
					 this.SymbolAfterSpin[2][0] = item.key;
				 }
				 else if(item.y >= 253 && item.y < 356){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row1Pos[3].split("/")[1])}, 1000,Phaser.Easing.Elastic.Out,false).start();
					 this.SymbolAfterSpin[3][0] = item.key;
				 }
				 else if(item.y >= 356){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row1Pos[4].split("/")[1])}, 1000,Phaser.Easing.Elastic.Out,false).start();
					 this.SymbolAfterSpin[4][0] = item.key;
				 }

		 },this);
		 console.log(this.SymbolAfterSpin[0][0] +" "+this.SymbolAfterSpin[1][0]+" "+this.SymbolAfterSpin[2][0]+" "+this.SymbolAfterSpin[3][0]+" "+this.SymbolAfterSpin[4][0]);
	 },
	 StopSpinRow2: function(){
		 this.IsSpinRow2Stop = true;
	 },
	 StopRow2: function(){
		 console.log("--------Colume 2-------");
		 this.SYMRow2.forEach(function(item){
				 if(item.y < 47){
						 item.moves = false;
						 //this.game.add.tween(item).to({y: Number(row2Pos[0].split("/")[1])}, 1000).easing(Phaser.Easing.Exponential.Out).start();
						 this.game.add.tween(item).to({y: Number(row2Pos[0].split("/")[1])}, 1000,Phaser.Easing.Elastic.Out).start();
						 this.SymbolAfterSpin[0][1] = item.key; //[row][col]
				 }
				 else if(item.y >= 47 && item.y < 150){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row2Pos[1].split("/")[1])}, 1000,Phaser.Easing.Elastic.Out).start();
					 this.SymbolAfterSpin[1][1] = item.key; //[row][col]
				 }
				 else if(item.y >= 150 && item.y < 253){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row2Pos[2].split("/")[1])}, 1000,Phaser.Easing.Elastic.Out).start();
					 this.SymbolAfterSpin[2][1] = item.key; //[row][col]
				 }
				 else if(item.y >= 253 && item.y < 356){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row2Pos[3].split("/")[1])}, 1000,Phaser.Easing.Elastic.Out).start();
					 this.SymbolAfterSpin[3][1] = item.key; //[row][col]
				 }
				 else if(item.y >= 356){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row2Pos[4].split("/")[1])}, 1000,Phaser.Easing.Elastic.Out).start();
					 this.SymbolAfterSpin[4][1] = item.key; //[row][col]
				 }
		 },this);
		 console.log(this.SymbolAfterSpin[0][1] +" "+this.SymbolAfterSpin[1][1]+" "+this.SymbolAfterSpin[2][1]+" "+this.SymbolAfterSpin[3][1]+" "+this.SymbolAfterSpin[4][1]);
	 },
	 StopSpinRow3: function(){
		 this.IsSpinRow3Stop = true;
	 },
	 StopRow3: function(){
		 console.log("--------Colume 3-------");
		 this.SYMRow3.forEach(function(item){
				 if(item.y < 47){
						 item.moves = false;
						 this.game.add.tween(item).to({y: Number(row1Pos[0].split("/")[1])}, 1000).easing(Phaser.Easing.Elastic.Out).start();
						 this.SymbolAfterSpin[0][2] = item.key; //[row][col]
				 }
				 else if(item.y >= 47 && item.y < 150){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row1Pos[1].split("/")[1])}, 1000).easing(Phaser.Easing.Elastic.Out).start();
					 this.SymbolAfterSpin[1][2] = item.key; //[row][col]
				 }
				 else if(item.y >= 150 && item.y < 253){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row1Pos[2].split("/")[1])}, 1000).easing(Phaser.Easing.Elastic.Out).start();
					 this.SymbolAfterSpin[2][2] = item.key; //[row][col]
				 }
				 else if(item.y >= 253 && item.y < 356){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row1Pos[3].split("/")[1])}, 1000).easing(Phaser.Easing.Elastic.Out).start();
					 this.SymbolAfterSpin[3][2] = item.key; //[row][col]
				 }
				 else if(item.y >= 356){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row1Pos[4].split("/")[1])}, 1000).easing(Phaser.Easing.Elastic.Out).start();
					 this.SymbolAfterSpin[4][2] = item.key; //[row][col]
				 }
		 },this);
		 console.log(this.SymbolAfterSpin[0][2] +" "+this.SymbolAfterSpin[1][2]+" "+this.SymbolAfterSpin[2][2]+" "+this.SymbolAfterSpin[3][2]+" "+this.SymbolAfterSpin[4][2]);
	 },
	 StopSpinRow4: function(){
		 this.IsSpinRow4Stop = true;
	 },
	 StopRow4: function(){
		 console.log("--------Colume 4-------");
		 this.SYMRow4.forEach(function(item){
				 if(item.y < 47){
						 item.moves = false;
						 this.game.add.tween(item).to({y: Number(row4Pos[0].split("/")[1])}, 1000).easing(Phaser.Easing.Elastic.Out).start();
						 this.SymbolAfterSpin[0][3] = item.key; //[row][col]
				 }
				 else if(item.y >= 47 && item.y < 150){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row4Pos[1].split("/")[1])}, 1000).easing(Phaser.Easing.Elastic.Out).start();
					 this.SymbolAfterSpin[1][3] = item.key; //[row][col]
				 }
				 else if(item.y >= 150 && item.y < 253){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row4Pos[2].split("/")[1])}, 1000).easing(Phaser.Easing.Elastic.Out).start();
					 this.SymbolAfterSpin[2][3] = item.key; //[row][col]
				 }
				 else if(item.y >= 253 && item.y < 356){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row4Pos[3].split("/")[1])}, 1000).easing(Phaser.Easing.Elastic.Out).start();
					 this.SymbolAfterSpin[3][3] = item.key; //[row][col]
				 }
				 else if(item.y >= 356){
					 item.moves = false;
					 this.game.add.tween(item).to({y: Number(row4Pos[4].split("/")[1])}, 1000).easing(Phaser.Easing.Elastic.Out).start();
					 this.SymbolAfterSpin[4][3] = item.key; //[row][col]
				 }
		 },this);
		 console.log(this.SymbolAfterSpin[0][3] +" "+this.SymbolAfterSpin[1][3]+" "+this.SymbolAfterSpin[2][3]+" "+this.SymbolAfterSpin[3][3]+" "+this.SymbolAfterSpin[4][3]);
	 },
	 StopSpinRow5: function(){
		 this.IsSpinRow5Stop = true;
	 },
	 StopRow5: function(){
		 console.log("--------Colume 5-------");
			 this.SYMRow5.forEach(function(item){
					 if(item.y < 47){
							 item.moves = false;
							 this.game.add.tween(item).to({y: Number(row5Pos[0].split("/")[1])}, 1000).easing(Phaser.Easing.Elastic.Out).start();
							 this.SymbolAfterSpin[0][4] = item.key; //[row][col]
					 }
					 else if(item.y >= 47 && item.y < 150){
						 item.moves = false;
						 this.game.add.tween(item).to({y: Number(row5Pos[1].split("/")[1])}, 1000).easing(Phaser.Easing.Elastic.Out).start();
						 this.SymbolAfterSpin[1][4] = item.key; //[row][col]
					 }
					 else if(item.y >= 150 && item.y < 253){
						 item.moves = false;
						 this.game.add.tween(item).to({y: Number(row5Pos[2].split("/")[1])}, 1000).easing(Phaser.Easing.Elastic.Out).start();
						 this.SymbolAfterSpin[2][4] = item.key; //[row][col]
					 }
					 else if(item.y >= 253 && item.y < 356){
						 item.moves = false;
						 this.game.add.tween(item).to({y: Number(row5Pos[3].split("/")[1])}, 1000).easing(Phaser.Easing.Elastic.Out).start();
						 this.SymbolAfterSpin[3][4] = item.key; //[row][col]
					 }
					 else if(item.y >= 356){
						 item.moves = false;
						 this.game.add.tween(item).to({y: Number(row5Pos[4].split("/")[1])}, 1000).easing(Phaser.Easing.Elastic.Out).start();
						 this.SymbolAfterSpin[4][4] = item.key; //[row][col]
					 }
			 },this);
			 console.log(this.SymbolAfterSpin[0][4] +" "+this.SymbolAfterSpin[1][4]+" "+this.SymbolAfterSpin[2][4]+" "+this.SymbolAfterSpin[3][4]+" "+this.SymbolAfterSpin[4][4]);
			 this.ShowAnimationResult();
	 },
	 ShowAnimationResult: function(){
		 //****Animation
		//  this.RefAniPic1 = this.game.add.sprite(row1Pos[1].split("/")[0],row1Pos[1].split("/")[1],'AniPic1');
		//  this.RefAniPic1.scale.set(1);
		//  this.RefAniPic1.anchor.setTo(0.5,0.5);
		//  this.RefAniPic1.smoothed = false;
		//  anim = this.RefAniPic1.animations.add('smile');
		//  anim.play(10,true);
		 this.Pic1 = this.game.add.sprite(row1Pos[1].split("/")[0],row1Pos[1].split("/")[1],'MyPic1');
		 this.Pic1.scale.set(0.5,0.6);
		 this.Pic1.anchor.setTo(0.5,0.5);
		 this.Pic1.animations.add('run',Phaser.Animation.generateFrameNames('Pic1_', 1, 81, '.png', 5), 10, true, false);
		 this.Pic1.animations.play('run');
		 this.RemoveAnimation = true;
		 this.btn_lotto_spin.inputEnabled = true;
	 },

    render: function() {
        //console.log("fff");
        // Input debug info
        //this.debug.inputInfo(32, 32);
        //game.debug.spriteInputInfo(sprite, 32, 130);
       // this.game.debug.pointer( this.input.activePointer );

    },
//***may use later
//	gameResized: function (width,height) {
//		BasicGame.updateScaleRatio();
//		this.row1.scale.setTo(BasicGame.scaleRatio);
//        this.row1.x = BasicGame.realWidth/2 - 960*BasicGame.assetScale*this.row1.scale.y/2;
//        this.row1.y = BasicGame.realHeight/2 - 540*BasicGame.assetScale*this.row1.scale.x/2;
//
//        this.group2.scale.setTo(BasicGame.scaleRatio);
//        this.group2.x = BasicGame.realWidth/2 - 960*BasicGame.assetScale*this.group2.scale.y/2;
//        this.group2.y = BasicGame.realHeight/2 - 540*BasicGame.assetScale*this.group2.scale.x/2;
//
//    },
};
