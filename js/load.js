var loadState = {
    preload: function () {
        var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...',
        { font: '30px Arial', fill: '#ffffff' });
        loadingLabel.anchor.setTo(0.5, 0.5);
        
        var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar'); 
        progressBar.anchor.setTo(0.5, 0.5); 
        game.load.setPreloadSprite(progressBar);
        game.load.image('background', 'assets/background.png');
//        game.load.image('reel_normal','assets/reel_normal.png');
//        game.load.image('reel_blur','assets/reel_blur.png');
        game.load.image('reel_cover','assets/reel_cover.png');
//        game.load.image('row1_orange','assets/orange.png');
//        game.load.image('row1_seven','assets/seven.png');
//        game.load.image('row1_bar','assets/img_bar.png');
        
        game.load.image('orange','assets/orange.png');
        game.load.image('seven','assets/seven.png');
        game.load.image('bar','assets/img_bar.png');
        game.load.image('peach','assets/img_peach.png');
        game.load.image('cherry','assets/img_cherry.png');
        
        game.load.image('btn_spin', 'assets/btn_spin.png');
        game.load.image('btn_stop', 'assets/btn_stop.png');
        
        game.load.image('Circlepin_Wheel', 'assets/circle_spin_Circle.png');
        game.load.image('Circlespin_Needle', 'assets/circle_spin_needle.png');  
        
        game.load.image('table_BG', 'assets/table_BG.png');
        game.load.image('table_pointer', 'assets/table_pointer.png');
        
        
    },
    create: function() {
        // Go to the menu state game.state.start('menu');
        game.state.start('menu');
    },
};