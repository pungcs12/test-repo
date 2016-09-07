BasicGame.PlayLotto = function (game) {

	this.music = null;
	this.playButton = null;

};

BasicGame.PlayLotto.prototype = {
    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.stage.backgroundColor = '#1187fc'; 
        
        this.row1 = this.game.add.group();
        this.row1.enableBody = true;
        this.game.add.sprite(140, 119, 'orange', 0, this.row1);
        //this.row1.create(143, 12,'orange');
        this.row1.create(140, 226,'seven');
        this.row1.create(140, 333,'bar');
        this.row1.create(140, 440,'cherry');
        this.row1.create(140, 547,'peach');
        
        this.row1.scale.setTo(BasicGame.scaleRatio);
        this.row1.x = BasicGame.realWidth/2 - 960*BasicGame.assetScale*this.row1.scale.y/2;
        this.row1.y = BasicGame.realHeight/2 - 540*BasicGame.assetScale*this.row1.scale.x/2;
    
        this.row2 = this.game.add.group();
        this.row2.enableBody = true;
        this.row2.create(308 , 119,'orange');
        this.row2.create(308, 226,'seven');
        this.row2.create(308, 333,'bar');
        this.row2.create(308, 440,'cherry');
        this.row2.create(308, 547,'peach');
        
        this.row2.scale.setTo(BasicGame.scaleRatio);
        this.row2.x = BasicGame.realWidth/2 - 960*BasicGame.assetScale*this.row2.scale.y/2;
        this.row2.y = BasicGame.realHeight/2 - 540*BasicGame.assetScale*this.row2.scale.x/2;
        
        this.row3 = this.game.add.group();
        this.row3.enableBody = true;
        this.row3.create(477, 119,'orange');
        this.row3.create(477, 226,'seven');
        this.row3.create(477, 333,'bar');
        this.row3.create(477, 440,'cherry');
        this.row3.create(477, 547,'peach');
        //this.row3.create(0,0,'bgMask');
        
        
        this.row3.scale.setTo(BasicGame.scaleRatio);
        this.row3.x = BasicGame.realWidth/2 - 960*BasicGame.assetScale*this.row3.scale.y/2;
        this.row3.y = BasicGame.realHeight/2 - 540*BasicGame.assetScale*this.row3.scale.x/2;
        
        this.barHit = this.game.add.group();
        this.barHit.enableBody = true;
        this.barBottom = this.barHit.create(143, 654,'barHitCheck');
        this.barHit.setAll('body.immovable', true);
        this.barHit.scale.setTo(BasicGame.scaleRatio);
        this.barHit.x = BasicGame.realWidth/2 - 960*BasicGame.assetScale*this.barHit.scale.y/2;
        this.barHit.y = BasicGame.realHeight/2 - 540*BasicGame.assetScale*this.barHit.scale.x/2;
        
        
        
        
        //this.barBottom.y = 740;
        this.refBgMask = this.add.sprite(100, 0, 'bgMask');
        this.refBgMask.alpha = 20;
        this.refBgMask.scale.setTo(BasicGame.scaleRatio);
        this.refBgMask.x = BasicGame.realWidth/2 - 960*BasicGame.assetScale*this.row3.scale.y/2;
        this.refBgMask.y = BasicGame.realHeight/2 - 540*BasicGame.assetScale*this.row3.scale.x/2;
        
        this.row1.forEach(function(item){
            item.anchor.setTo(0, 1);
        },this);
        this.row2.forEach(function(item){
            item.anchor.setTo(0, 1);
        },this);
        this.row3.forEach(function(item){
            item.anchor.setTo(0, 1);
        },this);
        this.btn_lotto_spin = this.add.button(BasicGame.realWidth/2 +120 , 200, 'btn_spin', this.actionOnClick,this);
        this.btn_lotto_spin.input.useHandCursor = true;
        this.btn_lotto_spin.scale.setTo(0.7, 0.7);
        this.btn_lotto_stop = this.add.button(BasicGame.realWidth/2 + 200, 200, 'btn_stop', this.btn_stop_OnClick,this);
        this.btn_lotto_stop.input.useHandCursor = true;
        this.btn_lotto_stop.scale.setTo(0.7, 0.7);
        
        this.Row1Pos = new Array(5);
        this.Row2Pos = new Array(5);
        this.Row3Pos = new Array(5);
        this.i1 = 0;
        this.i2 = 0;
        this.i3 = 0;
        //***May use later
        //this.scale.setResizeCallback(this.gameResized, this);
    },
update: function () {
//        this.funcking.body.velocity.y = 200;
//        this.game.physics.arcade.collide(this.funcking, this.funcking2);

    
       // console.log(this.Row1Pos[1] + " ABC");
        
        if(this.row1_go){
            if(!this.keepInitRow1Pos){
                this.row1.forEach(function(item){
                    this.Row1Pos[this.i1] = item.body.y;
                    this.i1++;
                },this);
                this.keepInitRow1Pos = true;
            }
            this.row1.forEach(function(item){
                //item.anchor.setTo(0.5, 1);
                //console.log("abc1 "+item.body.y + " "+item.body.x);
            },this);

                this.row1.forEach(function(item){
                    //if(item.body.y >= (54 + (item.body.height * 4))){
                   item.body.y += BasicGame.speed_row1;
                   // item.body.velocity.y =BasicGame.speed_row1;
    //                if(item.body.y >=440){
    //                    
    //                    item.reset(143,item.body.y - (item.body.height *5));
    //                    console.log(item.body.y);
    //                }
    //                if(!item.inWorld){
    //                    item.reset(143,12);
    //                }
                    this.game.physics.arcade.collide(item, this.barBottom, this.collisionHandler, null, this);
                },this);
        }

        if(this.row2_go){
            if(!this.keepInitRow2Pos){
                this.row2.forEach(function(item){
                    this.Row2Pos[this.i2] = item.body.y;
                    
                    this.i2++;
                    
                },this);
                this.keepInitRow2Pos = true;
            }
            this.row2.forEach(function(item){
                //if(item.body.y > (54 + (item.body.height * 4))){
                //item.body.y += BasicGame.speed_row2;
                item.body.velocity.y =BasicGame.speed_row2;
//                if(item.body.y >= 540){
//                    item.reset(311,item.body.y - (item.body.height *5));
//                    
//                }

                this.game.physics.arcade.collide(item, this.barBottom, this.collisionHandlerRow2, null, this);
            },this);
        }
        
        if(this.row3_go){
           // console.log("---------")
            if(!this.keepInitRow3Pos){
                this.row3.forEach(function(item){
                    this.Row3Pos[this.i3] = item.body.y;
                    console.log("Row" +this.i3 +" " + item.body.y);
                    this.i3++;
                },this);
                this.keepInitRow3Pos = true;
            }
            this.row3.forEach(function(item){
                //if(item.body.y > (54 + (item.body.height * 4))){
                item.body.y += BasicGame.speed_row3;
                //item.body.velocity.y =BasicGame.speed_row3;
//                if(item.body.y >= 540){
//                    item.reset(479,item.body.y - (item.body.height *5));
//                    
//                }
                this.game.physics.arcade.collide(item, this.barBottom, this.collisionHandlerRow3, null, this);
                console.log(item.body.y);

            },this);
        }
        
    

    },
    collisionHandler(obj1,obj2){
        obj1.reset(140,119);
    },
    collisionHandlerRow2(obj1,obj2){
        obj1.reset(308,119);
    },
    collisionHandlerRow3(obj1,obj2){
        obj1.reset(477,119);
    },
    actionOnClick: function(){
        this.row1_go = true;

        this.row2_go = true;
        
        this.row3_go = true;
        this.row1_stop = false;
        this.row2_stop = false;
        this.row3_stop = false;
        console.log("start");
        this.row1.forEach(function(item){
            item.body.moves = true;
        },this);        
        this.row2.forEach(function(item){
            item.body.moves = true;
        },this);
        this.row3.forEach(function(item){
            item.body.moves = true;
        },this);
    },
    btn_stop_OnClick: function(){
        this.row1_stop = true;
        this.row2_stop = true;
        this.row3_stop = true;
        this.row1_go = false;
        this.row2_go = false;
        this.row3_go = false;

        this.row1.forEach(function(item){
            if(item.body.y < this.Row1Pos[1]-5){// 53 come from the longest image can reset when go back to the top (337 - (71*5)) = -18 -> -18,53,124,195,266
                item.body.moves = false;
                this.game.add.tween(item).to({y: 119}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= this.Row1Pos[1]-5 && item.body.y < this.Row1Pos[2]-5){
                item.body.moves = false;
                this.game.add.tween(item).to({y: 226}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= this.Row1Pos[2]-5 && item.body.y < this.Row1Pos[3]-5){
                item.body.moves = false;
                this.game.add.tween(item).to({y: 333}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= this.Row1Pos[3]-5 && item.body.y < this.Row1Pos[4]-5){
                item.body.moves = false;
                this.game.add.tween(item).to({y: 440}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= this.Row1Pos[4]-5){
                item.body.moves = false;
                this.game.add.tween(item).to({y: 547}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            //console.log("row1:"+item.body.y);
        },this);
        this.row2.forEach(function(item){
            if(item.body.y < this.Row2Pos[1]){// 53 come from the longest image can reset when go back to the top (337 - (71*5)) = -18 -> -18,53,124,195,266
                item.body.moves = false;
                this.game.add.tween(item).to({y: 119}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= this.Row2Pos[1] && item.body.y < this.Row2Pos[2]){
                item.body.moves = false;
                this.game.add.tween(item).to({y: 226}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= this.Row2Pos[2] && item.body.y < this.Row2Pos[3]){
                item.body.moves = false;
                this.game.add.tween(item).to({y: 333}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= this.Row2Pos[3] && item.body.y < this.Row2Pos[4]){
                item.body.moves = false;
                this.game.add.tween(item).to({y: 440}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= this.Row2Pos[4]){
                item.body.moves = false;
                this.game.add.tween(item).to({y: 547}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            //console.log("row1:"+item.body.y);
        },this);
        console.log("row3============");
        this.row3.forEach(function(item){
            if(item.body.y < this.Row3Pos[1]){// 53 come from the longest image can reset when go back to the top (337 - (71*5)) = -18 -> -18,53,124,195,266
                item.body.moves = false;
                this.game.add.tween(item).to({y: 119}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= this.Row3Pos[1] && item.body.y < this.Row3Pos[2]){
                item.body.moves = false;
                this.game.add.tween(item).to({y: 226}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= this.Row3Pos[2] && item.body.y < this.Row3Pos[3]){
                item.body.moves = false;
                this.game.add.tween(item).to({y: 333}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= this.Row3Pos[3] && item.body.y < this.Row3Pos[4]){
                item.body.moves = false;
                this.game.add.tween(item).to({y: 440}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= this.Row3Pos[4]){
                item.body.moves = false;
                this.game.add.tween(item).to({y: 547}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            console.log("row3:"+item.body.y);
        },this);
    },
    render: function() {
        //console.log("fff");
        // Input debug info
        //this.debug.inputInfo(32, 32);
        //game.debug.spriteInputInfo(sprite, 32, 130);
        this.game.debug.pointer( this.input.activePointer );

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