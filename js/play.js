var playState = {
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#1187fc'; 
        //this.slotOne = game.add.sprite(game.world.centerX, game.world.centerY, 'reel_normal');
    
//        this.slotOne = game.add.sprite(108, 54, 'reel_normal');
//        this.slotTwo = game.add.sprite(209 , 54, 'reel_normal');
       
//        this.slotOne.anchor.setTo(0, 0);
        
//        this.row1_orange = game.add.sprite(108,54,'row1_orange');
//        //this.row1_orange.anchor.setTo(0, 0);
//        game.physics.arcade.enable(this.row1_orange);
//        this.row1_orange.body.velocity.y = game.global.speed_row1;
//        
//        this.row1_seven = game.add.sprite(108,125,'row1_seven');
//        //this.row1_seven.anchor.setTo(0, 0);
//        game.physics.arcade.enable(this.row1_seven);
//        this.row1_seven.body.velocity.y = game.global.speed_row1;
//        
//        this.row1_bar = game.add.sprite(108,196,'row1_bar');
//        //this.row1_bar.anchor.setTo(0, 0);
//        game.physics.arcade.enable(this.row1_bar);
//        this.row1_bar.body.velocity.y = game.global.speed_row1;
         // this.row1_orange = game.add.sprite(108,54,'orange');
//        this.row1_seven = game.add.sprite(108,125,'seven');
//        this.row1_bar = game.add.sprite(108,196,'bar');
//        this.row1_cherry = game.add.sprite(108,267,'cherry');
//        this.row1_peach = game.add.sprite(108,338,'peach');
        
        this.row1 = game.add.group();
        this.row1.enableBody = true;
        //Image height = 71
        game.add.sprite(108, -17, 'orange', 0, this.row1); 
        game.add.sprite(108, 54, 'seven', 0, this.row1); 
        game.add.sprite(108, 125, 'bar', 0, this.row1);
        game.add.sprite(108, 196, 'cherry', 0, this.row1);
        game.add.sprite(108, 267, 'peach', 0, this.row1);

        this.row2 = game.add.group();
        this.row2.enableBody = true;
        game.add.sprite(208, -17, 'orange', 0, this.row2); 
        game.add.sprite(208, 54, 'seven', 0, this.row2); 
        game.add.sprite(208, 125, 'bar', 0, this.row2);
        game.add.sprite(208, 196, 'cherry', 0, this.row2);
        game.add.sprite(208, 267, 'peach', 0, this.row2);
        

        
        this.row3 = game.add.group();
        this.row3.enableBody = true;
        game.add.sprite(308, -17, 'orange', 0, this.row3); 
        game.add.sprite(308, 54, 'seven', 0, this.row3); 
        game.add.sprite(308, 125, 'bar', 0, this.row3);
        game.add.sprite(308, 196, 'cherry', 0, this.row3);
        game.add.sprite(308, 267, 'peach', 0, this.row3);
        
 
         this.slotCover = game.add.sprite(0, 0, 'reel_cover');
        
        //btn_spin = game.add.button(game.world.centerX - 95, 400, 'btn_spin', actionOnClick,this, 2, 1, 0);
       // btn_spin.onInputOver.add(over,this);
       // btn_spin.onInputOut.add(out,this);
       // btn_spin.onInputUp.add(up,this);
        this.btn_lotto_spin = game.add.button(game.world.centerX , 290, 'btn_spin', this.actionOnClick,this);
        this.btn_lotto_spin.input.useHandCursor = true;
        this.btn_lotto_spin.scale.setTo(0.7, 0.7);
        this.btn_lotto_stop = game.add.button(game.world.centerX + 80, 290, 'btn_stop', this.delayClick,this);
        this.btn_lotto_stop.input.useHandCursor = true;
        this.btn_lotto_stop.scale.setTo(0.7, 0.7);
        
        var menu_game = game.add.text(50, game.world.height-20, 'MENU',
                                       { font: '18px Arial', fill: '#0062d4' });
        menu_game.anchor.setTo(0.5, 0.5);
        menu_game.inputEnabled = true;
        menu_game.events.onInputUp.add(function(){
            game.state.start('menu');
        });
    },
    
    update: function () {
//        console.log(this.row1_orange.y);
//        if(this.orange.y <= 15){
//            //this.row1_orange.y = 54;
//            this.orange.reset(108, 252);
//            this.orange.body.velocity.y = game.global.speed_row1;
//        }
//        if(this.seven.y <= 15){
//            //this.row1_orange.y = 54;
//            this.seven.reset(108, 252);
//            this.seven.body.velocity.y = game.global.speed_row1;
//        }
//        if(this.bar.y <= 15){
//            //this.row1_orange.y = 54;
//            this.bar.reset(108, 252);
//            this.bar.body.velocity.y = game.global.speed_row1;
//        }
//        if(this.cherry.y <= 15){
//            //this.row1_orange.y = 54;
//            this.cherry.reset(108, 252);
//            this.cherry.body.velocity.y = game.global.speed_row1;
//        }
//        if(this.peach.y <= 15){
//            //this.row1_orange.y = 54;
//            this.peach.reset(108, 252);
//            this.peach.body.velocity.y = game.global.speed_row1;
//        }
        
//        this.row1.forEach(function(item){
//            if(this.row1_go){
//                if(item.y<-50){
//                    item.reset(108,338);
//                }
//                item.body.y += game.global.speed_row1;
//            }
//        },this);
        
        if(this.row1_go){
            //console.log("---------")
            this.row1.forEach(function(item){
                //if(item.body.y >= (54 + (item.body.height * 4))){
                item.body.y += game.global.speed_row1;
                if(item.body.y >=337){
                    item.reset(108,item.body.y - (item.body.height *5));
                    
                }

                //console.log(item.body.y);
//                if(!this.row1_stop){
//                    item.body.y += item.body.height*0.1;
//                    
//                }else{
//                    item.body.y += 0;
//                }

            },this);
        }

        if(this.row2_go){
            //console.log("---------")
            this.row2.forEach(function(item){
                //if(item.body.y > (54 + (item.body.height * 4))){
                item.body.y += game.global.speed_row2;
                if(item.body.y >= 337){
                    item.reset(208,item.body.y - (item.body.height *5));
                    
                }
               // console.log(item.body.y);
                //item.body.y += game.global.speed_row2;
//                if(!this.row2_stop){
//                    //console.log(item + " " +item.body.y);
//                    item.body.y += item.body.height * 0.2;
//                    
//                }else{
//                    item.body.y += 0;
//                }

            },this);
        }
        
        if(this.row3_go){
            console.log("---------")
            this.row3.forEach(function(item){
                //if(item.body.y > (54 + (item.body.height * 4))){
                item.body.y += game.global.speed_row3;
                if(item.body.y >= 327){
                    item.reset(308,item.body.y - (item.body.height *5));
                    
                }
                console.log(item.body.y);

            },this);
        }
        

    },
    delayClick: function(){
        game.time.events.add(Phaser.Timer.SECOND * 1, this.btn_stop_OnClick, this);
    },
    actionOnClick: function(){
        this.row1_go = true;

        this.row2_go = true;
        
        this.row3_go = true;
        this.row1_stop = false;
        this.row2_stop = false;
        this.row3_stop = false;
        console.log("start");
//        this.row3.forEach(function(item){
//            item.body.velocity.y = game.global.speed_row3;
//        },this);
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
            if(item.body.y < 53){// 53 come from the longest image can reset when go back to the top (337 - (71*5)) = -18 -> -18,53,124,195,266
                item.body.moves = false;
                game.add.tween(item).to({y: -17}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= 53 && item.body.y < 124){
                item.body.moves = false;
                game.add.tween(item).to({y: 54}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= 124 && item.body.y < 195){
                item.body.moves = false;
                game.add.tween(item).to({y: 125}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= 195 && item.body.y < 266){
                item.body.moves = false;
                game.add.tween(item).to({y: 196}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= 266){
                item.body.moves = false;
                game.add.tween(item).to({y: 267}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            console.log("row1:"+item.body.y);
        },this);
        this.row2.forEach(function(item){
            if(item.body.y < 53){ // 53 come from the longest reel can get when reset (337 - (71*5)) = -18 -> -18,53,124,195,266
                item.body.moves = false;
                game.add.tween(item).to({y: -17}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= 53 && item.body.y < 124){
                item.body.moves = false;
                game.add.tween(item).to({y: 54}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= 124 && item.body.y < 195){
                item.body.moves = false;
                game.add.tween(item).to({y: 125}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= 195 && item.body.y < 266){
                item.body.moves = false;
                game.add.tween(item).to({y: 196}, 500).easing(Phaser.Easing.Bounce.Out).start();

            }
            else if(item.body.y >= 266){
                item.body.moves = false;
                game.add.tween(item).to({y: 267}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            console.log("row2:"+item.body.y);
        },this);
        this.row3.forEach(function(item){
            //item.body.moves = false;
            if(item.body.y < 43){ // 43 come from the longest reel can get when reset (327 - (71*5)) = -28 -> -28,43,114,185,256
                item.body.moves = false;
                game.add.tween(item).to({y: -17}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= 43 && item.body.y < 114){
                item.body.moves = false;
                game.add.tween(item).to({y: 54}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= 114 && item.body.y < 185){
                item.body.moves = false;
                game.add.tween(item).to({y: 125}, 500).easing(Phaser.Easing.Bounce.Out).start();

            }
           else if(item.body.y >= 185 && item.body.y < 256){
                item.body.moves = false;
                game.add.tween(item).to({y: 196}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            else if(item.body.y >= 256){
                item.body.moves = false;
                game.add.tween(item).to({y: 267}, 500).easing(Phaser.Easing.Bounce.Out).start();
            }
            
//                        if(item.body.y <= (54 - game.global.speed_row3)){
//                item.body.moves = false;
//                game.add.tween(item).to({y: -17}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            else if(item.body.y > (54 - game.global.speed_row3) && item.body.y <= (125-game.global.speed_row3)){
//                item.body.moves = false;
//                game.add.tween(item).to({y: 54}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            else if(item.body.y > (125-game.global.speed_row3) && item.body.y <= (196-game.global.speed_row3)){
//                item.body.moves = false;
//                game.add.tween(item).to({y: 125}, 500).easing(Phaser.Easing.Bounce.Out).start();
//
//            }
//           else if(item.body.y > (196-game.global.speed_row3) && item.body.y <= (267-game.global.speed_row3)){
//                item.body.moves = false;
//                game.add.tween(item).to({y: 196}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
//            else if(item.body.y > (267-game.global.speed_row3)){
//                item.body.moves = false;
//                game.add.tween(item).to({y: 267}, 500).easing(Phaser.Easing.Bounce.Out).start();
//            }
            console.log("row3:"+item.body.y);
        },this);
    },
    onStart:function(){
        tween.delay(0);
    }
};
