var play_tablespin_State = {
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        // Set some game settings 
        game.stage.backgroundColor = '#f0c654'; 
        game.add.sprite(54, 36, 'table_BG');
        this.table_pointer = game.add.sprite(54, 36, 'table_pointer');
        game.physics.arcade.enable(this.table_pointer);
    
        this.btn_table_spin = game.add.button(300, 290, 'btn_spin', this.btn_table_spin1,this);
        this.btn_table_spin.input.useHandCursor = true;
        this.btn_table_spin.scale.setTo(0.7, 0.7);
        

        this.btn_table_spin_stop = game.add.button(380, 290, 'btn_stop',  this.btn_table_spin_stop1,this);
        this.btn_table_spin_stop.input.useHandCursor = true;
        this.btn_table_spin_stop.scale.setTo(0.7, 0.7);
        

        
        
        this.posX = [54,54,54,125,125,125,196,196,196,267,267,267];
        this.posY = [36,107,178,178,107,36,36,107,178,178,107,36];
        this.counter = 0;
        this.speed = 10;
        
        var menu_game2 = game.add.text(50, game.world.height-20, 'MENU',
                                { font: '18px Arial', fill: '#0062d4' });
        menu_game2.anchor.setTo(0.5, 0.5);
        menu_game2.inputEnabled = true;
        menu_game2.events.onInputUp.add(function(){
            game.state.start('menu');
        });
        

    },
    updateCounter: function(){
        if(this.counter == 12)
            this.counter = 0;
        this.table_pointer.body.moves = false;
        game.add.tween(this.table_pointer).to({x:this.posX[this.counter],y: this.posY[this.counter]}, 10).start();
        this.counter++;
    },
    btn_table_spin1: function(){
         console.log(this.speed);
        this.my_event = game.time.events.loop(50, this.updateCounter, this);
    },
        
    btn_table_spin_stop1: function(){
        game.time.events.remove(this.my_event);
        console.log("aaa"+this.posX[this.counter]+"BBB"+this.posY[this.counter])
        game.add.tween(this.table_pointer).to({x:this.posX[this.counter-1],y: this.posY[this.counter-1]}, 1000,Phaser.Easing.Bounce.Out,true).start();
    },
};