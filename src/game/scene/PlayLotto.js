BasicGame.PlayLotto = function (game) {

	this.music = null;
	this.playButton = null;

};

BasicGame.PlayLotto.prototype = {
    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.add.sprite(0,0,'bg');
        //SymbolShoes SymbolWild SymbolScatter SymbolPic1 SymbolStocking SymbolTopHatGirl
        var SYMRow11 = this.add.sprite(row1Pos[0].split("-")[0],row1Pos[0].split("-")[1],'SymbolTopHatGirl');
        SYMRow11.anchor.setTo(0.5,0.5);
        var SYMRow12 = this.add.sprite(row1Pos[1].split("-")[0],row1Pos[1].split("-")[1],'SymbolScatter');
        SYMRow12.anchor.setTo(0.5,0.5);
        var SYMRow13 = this.add.sprite(row1Pos[2].split("-")[0],row1Pos[2].split("-")[1],'SymbolShoes');
        SYMRow13.anchor.setTo(0.5,0.5);
        var SYMRow14 = this.add.sprite(row1Pos[3].split("-")[0],row1Pos[3].split("-")[1],'SymbolPic1');
        SYMRow14.anchor.setTo(0.5,0.5);
        
        var SYMRow21 = this.add.sprite(row2Pos[0].split("-")[0],row2Pos[0].split("-")[1],'SymbolPic1');
        SYMRow21.anchor.setTo(0.5,0.5);
        var SYMRow22 = this.add.sprite(row2Pos[1].split("-")[0],row2Pos[1].split("-")[1],'SymbolStocking');
        SYMRow22.anchor.setTo(0.5,0.5);
        var SYMRow23 = this.add.sprite(row2Pos[2].split("-")[0],row2Pos[2].split("-")[1],'SymbolRose');
        SYMRow23.anchor.setTo(0.5,0.5);
        var SYMRow24 = this.add.sprite(row2Pos[3].split("-")[0],row2Pos[3].split("-")[1],'SymbolPic1');
        SYMRow24.anchor.setTo(0.5,0.5);
        
        var SYMRow31 = this.add.sprite(row3Pos[0].split("-")[0],row3Pos[0].split("-")[1],'SymbolStocking');
        SYMRow31.anchor.setTo(0.5,0.5);
        var SYMRow32 = this.add.sprite(row3Pos[1].split("-")[0],row3Pos[1].split("-")[1],'SymbolRose');
        SYMRow32.anchor.setTo(0.5,0.5);
        var SYMRow33 = this.add.sprite(row3Pos[2].split("-")[0],row3Pos[2].split("-")[1],'SymbolWild');
        SYMRow33.anchor.setTo(0.5,0.5);
        var SYMRow34 = this.add.sprite(row3Pos[3].split("-")[0],row3Pos[3].split("-")[1],'SymbolScatter');
        SYMRow34.anchor.setTo(0.5,0.5);
        
        var SYMRow41 = this.add.sprite(row4Pos[0].split("-")[0],row4Pos[0].split("-")[1],'SymbolTopHatGirl');
        SYMRow41.anchor.setTo(0.5,0.5);
        var SYMRow42 = this.add.sprite(row4Pos[1].split("-")[0],row4Pos[1].split("-")[1],'SymbolStocking');
        SYMRow42.anchor.setTo(0.5,0.5);
        var SYMRow43 = this.add.sprite(row4Pos[2].split("-")[0],row4Pos[2].split("-")[1],'SymbolWild');
        SYMRow43.anchor.setTo(0.5,0.5);
        var SYMRow44 = this.add.sprite(row4Pos[3].split("-")[0],row4Pos[3].split("-")[1],'SymbolRose');
        SYMRow44.anchor.setTo(0.5,0.5);
        
        var SYMRow51 = this.add.sprite(row5Pos[0].split("-")[0],row5Pos[0].split("-")[1],'SymbolPic1');
        SYMRow51.anchor.setTo(0.5,0.5);
        var SYMRow52 = this.add.sprite(row5Pos[1].split("-")[0],row5Pos[1].split("-")[1],'SymbolRose');
        SYMRow52.anchor.setTo(0.5,0.5);
        var SYMRow53 = this.add.sprite(row5Pos[2].split("-")[0],row5Pos[2].split("-")[1],'SymbolStocking');
        SYMRow53.anchor.setTo(0.5,0.5);
        var SYMRow54 = this.add.sprite(row5Pos[3].split("-")[0],row5Pos[3].split("-")[1],'SymbolWild');
        SYMRow54.anchor.setTo(0.5,0.5);
        
        this.add.sprite(0,0,'TopLayer');
        //this.stage.backgroundColor = '#1187fc'; 
        //***May use later
        //this.scale.setResizeCallback(this.gameResized, this);
    },
    update: function () {

    },
//    btn_stop_OnClick: function(){
//        this.row1_stop = true;
//        this.row2_stop = true;
//        this.row3_stop = true;
//        this.row1_go = false;
//        this.row2_go = false;
//        this.row3_go = false;
//
//        this.row1.forEach(function(item){
//            if(item.body.y < this.Row1Pos[1]-5){// 53 come from the longest image can reset when go back to the top (337 - (71*5)) = -18 -> -18,53,124,195,266
//                item.body.moves = false;
//                this.game.add.tween(item).to({y: 119}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            else if(item.body.y >= this.Row1Pos[1]-5 && item.body.y < this.Row1Pos[2]-5){
//                item.body.moves = false;
//                this.game.add.tween(item).to({y: 226}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            else if(item.body.y >= this.Row1Pos[2]-5 && item.body.y < this.Row1Pos[3]-5){
//                item.body.moves = false;
//                this.game.add.tween(item).to({y: 333}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            else if(item.body.y >= this.Row1Pos[3]-5 && item.body.y < this.Row1Pos[4]-5){
//                item.body.moves = false;
//                this.game.add.tween(item).to({y: 440}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            else if(item.body.y >= this.Row1Pos[4]-5){
//                item.body.moves = false;
//                this.game.add.tween(item).to({y: 547}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            //console.log("row1:"+item.body.y);
//        },this);
//        this.row2.forEach(function(item){
//            if(item.body.y < this.Row2Pos[1]){// 53 come from the longest image can reset when go back to the top (337 - (71*5)) = -18 -> -18,53,124,195,266
//                item.body.moves = false;
//                this.game.add.tween(item).to({y: 119}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            else if(item.body.y >= this.Row2Pos[1] && item.body.y < this.Row2Pos[2]){
//                item.body.moves = false;
//                this.game.add.tween(item).to({y: 226}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            else if(item.body.y >= this.Row2Pos[2] && item.body.y < this.Row2Pos[3]){
//                item.body.moves = false;
//                this.game.add.tween(item).to({y: 333}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            else if(item.body.y >= this.Row2Pos[3] && item.body.y < this.Row2Pos[4]){
//                item.body.moves = false;
//                this.game.add.tween(item).to({y: 440}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            else if(item.body.y >= this.Row2Pos[4]){
//                item.body.moves = false;
//                this.game.add.tween(item).to({y: 547}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            //console.log("row1:"+item.body.y);
//        },this);
//        console.log("row3============");
//        this.row3.forEach(function(item){
//            if(item.body.y < this.Row3Pos[1]){// 53 come from the longest image can reset when go back to the top (337 - (71*5)) = -18 -> -18,53,124,195,266
//                item.body.moves = false;
//                this.game.add.tween(item).to({y: 119}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            else if(item.body.y >= this.Row3Pos[1] && item.body.y < this.Row3Pos[2]){
//                item.body.moves = false;
//                this.game.add.tween(item).to({y: 226}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            else if(item.body.y >= this.Row3Pos[2] && item.body.y < this.Row3Pos[3]){
//                item.body.moves = false;
//                this.game.add.tween(item).to({y: 333}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            else if(item.body.y >= this.Row3Pos[3] && item.body.y < this.Row3Pos[4]){
//                item.body.moves = false;
//                this.game.add.tween(item).to({y: 440}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            else if(item.body.y >= this.Row3Pos[4]){
//                item.body.moves = false;
//                this.game.add.tween(item).to({y: 547}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            console.log("row3:"+item.body.y);
//        },this);
//    },
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