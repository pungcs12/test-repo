var menuState = {
    create: function() {
        
        game.add.image(0, 0, 'background');
        var nameLabel = game.add.text(game.world.centerX, 50, 'Insane Lotto', { font: '50px Arial', fill: '#ffffff' });
        nameLabel.anchor.setTo(0.5, 0.5);
         game.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();

        
        
        var lotto_spin_game = game.add.text(5, game.world.height-20, 'Lotto Spin',
                                       { font: '18px Arial', fill: '#ffffff' });
        lotto_spin_game.anchor.setTo(0, 0.5);
        lotto_spin_game.inputEnabled = true;
        lotto_spin_game.events.onInputUp.add(function(){
            game.state.start('play');
        });
        
        var wheel_spin_game = game.add.text(110, game.world.height-20, 'Wheel Spin',
                                       { font: '18px Arial', fill: '#ffffff' });
        wheel_spin_game.anchor.setTo(0, 0.5);
        wheel_spin_game.inputEnabled = true;
        wheel_spin_game.events.onInputUp.add(function(){
            game.state.start('play_circlespin');
        });

        var table_spin_game = game.add.text(230, game.world.height-20, 'Table Spin',
                                       { font: '18px Arial', fill: '#ffffff' });
        table_spin_game.anchor.setTo(0, 0.5);
        table_spin_game.inputEnabled = true;
        table_spin_game.events.onInputUp.add(function(){
            game.state.start('play_tablespin');
        });
        //this.btn_spin1 = game.add.button(game.world.centerX - 95, 306, 'btn_spin', this.actionOnClick1,this);
        //this.btn_spin1.input.useHandCursor = true;
        

        
        //this.slotOne = game.add.sprite(game.world.centerX, game.world.centerY, 'orange');
        //game.add.tween(this.slotOne).to({y: 50}, 1000).easing(Phaser.Easing.Bounce.Out).start();
    },
    
//    start: function() {
//        // Start the actual game 
//        game.state.start('play');
//    },
    //actionOnClick1: function(){
    //    console.log("love");
        
    //},
};