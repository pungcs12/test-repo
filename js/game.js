var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');
//var speed_row1 = -100;
game.global = {
    speed_row1: 5,
    speed_row2: 10,
    speed_row3: 20
};


// Add all the states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('play_circlespin', play_circlespin_State);
game.state.add('play_tablespin', play_tablespin_State);

// Start the 'boot' state
game.state.start('boot');
