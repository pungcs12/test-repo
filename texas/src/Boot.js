var Texas = {
  orientated: false,
  desktop:false

};
Texas.Boot = function (game) {};
Texas.Boot.prototype = {
  preload: function() {
    this.load.atlasJSONHash('loading','images/loading.png', 'images/loading.json');
},
  create:function() {
    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = true;
    this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.refresh();

    this.scale.forceOrientation(true, false);
    this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
    this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);

    if(this.game.device.desktop){
      Texas.desktop = true;
    }else{
      Texas.desktop = false;
    }
		this.state.start('Preloader');
		

  },

  enterIncorrectOrientation: function () {

      Texas.orientated = false;

     document.getElementById('orientation').style.display = 'block';

  },

  leaveIncorrectOrientation: function () {

      Texas.orientated = true;

      document.getElementById('orientation').style.display = 'none';

  },
  update: function(){
  	
    
  }

};
