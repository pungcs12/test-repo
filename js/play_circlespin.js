var play_circlespin_State = {
    create: function() {
        //game.physics.startSystem(Phaser.Physics.ARCADE);
        // Set some game settings 
        game.stage.backgroundColor = '#fcb311'; 

        
        this.circlespin_wheel = game.add.sprite(game.world.centerX-50, game.world.centerY, 'Circlespin_Wheel');
        this.circlespin_needle = game.add.sprite(game.world.centerX-50, 0, 'Circlespin_Needle');
        this.circlespin_wheel.anchor.setTo(0.5, 0.5);
        this.circlespin_needle.anchor.setTo(0.5, 0);
        
        this.btn_spin = game.add.button(300, 290, 'btn_spin', this.btn_circlewheel_spin,this);
        this.btn_spin.input.useHandCursor = true;
        this.btn_spin.scale.setTo(0.7, 0.7);
        this.btn_spin_stop = game.add.button(380, 290, 'btn_stop', this.btn_circlewheel_spin_stop,this);
        this.btn_spin_stop.input.useHandCursor = true;
        this.btn_spin_stop.scale.setTo(0.7, 0.7);
        
        this.toStart =false;
        this.toStop =false;
        this.my_angle = 30;
        var menu_game = game.add.text(50, game.world.height-20, 'MENU',
                                       { font: '18px Arial', fill: '#0062d4' });
        menu_game.anchor.setTo(0.5, 0.5);
        menu_game.inputEnabled = true;
        menu_game.events.onInputUp.add(function(){
            game.state.start('menu');
        });

    },
    update: function(){
        if(this.toStart){
            this.circlespin_wheel.angle += this.my_angle;
        }
        
        if(this.toStop){
            //this.circlespin_wheel.angle +=2;
            this.my_angle -= 0.5;
            if(this.my_angle <=5){
                this.toStart = false;
                game.add.tween(this.circlespin_wheel.angle).to({angle: 0}, 10000, Phaser.Easing.Bounce.Out, true);
            }
        }
    },
    
    btn_circlewheel_spin: function(){
        console.log("sdf");
        this.toStart = true;
        this.toStop = false;
        this.my_angle = 30;
    },
        
    btn_circlewheel_spin_stop: function(){
        this.toStop = true;
        //this.btn_circlewheel_spin = false;
        //game.add.tween(sprite).to( { angle: 45 }, 2000, Phaser.Easing.Linear.None, true);
        //game.add.tween(this.circlespin_wheel).to({angle: 0}, 10000,  Phaser.Easing.Linear.None, true);
    },
};