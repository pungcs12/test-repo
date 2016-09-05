var menuState = {
    create: function() {
        
        game.add.image(0, 0, 'background');
        var nameLabel = game.add.text(game.world.centerX, 50, 'Insane Lotto', { font: '50px Arial', fill: '#ffffff' });
        nameLabel.anchor.setTo(0.5, 0.5);
         game.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
        

        
//        var startLabel = game.add.text(game.world.centerX, game.world.height-80, 'press the up arrow key to start',
//                                       { font: '25px Arial', fill: '#ffffff' });
//        startLabel.anchor.setTo(0.5, 0.5);
        
        
//        var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
//        upKey.onDown.addOnce(this.start, this);
        
        
        var spin_game = game.add.text(5, game.world.height-20, 'Lotto Spin',
                                       { font: '18px Arial', fill: '#ffffff' });
        spin_game.anchor.setTo(0, 0.5);
        spin_game.inputEnabled = true;
        spin_game.events.onInputUp.add(function(){
            game.state.start('play_circlespin');
        });
        
        var spin_game = game.add.text(110, game.world.height-20, 'Wheel Spin',
                                       { font: '18px Arial', fill: '#ffffff' });
        spin_game.anchor.setTo(0, 0.5);
        spin_game.inputEnabled = true;
        spin_game.events.onInputUp.add(function(){
            game.state.start('play');
        });

        var spin_game1 = game.add.text(230, game.world.height-20, 'Table Spin',
                                       { font: '18px Arial', fill: '#ffffff' });
        spin_game1.anchor.setTo(0, 0.5);
        spin_game1.inputEnabled = true;
        spin_game1.events.onInputUp.add(function(){
            game.state.start('play_tablespin');
        });
        //this.btn_spin1 = game.add.button(game.world.centerX - 95, 306, 'btn_spin', this.actionOnClick1,this);
        //this.btn_spin1.input.useHandCursor = true;
        

        
        //this.slotOne = game.add.sprite(game.world.centerX, game.world.centerY, 'orange');
        //game.add.tween(this.slotOne).to({y: 50}, 1000).easing(Phaser.Easing.Bounce.Out).start();
    },
    
    start: function() {
        // Start the actual game 
        game.state.start('play');
    },
    //actionOnClick1: function(){
    //    console.log("love");
        
    //},
};