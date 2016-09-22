/**
 * @author Mike Britton
 *
 * @class StartupCommand
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
        name: 'Texas.StartupCommand',
        parent: puremvc.MacroCommand
    },

    // INSTANCE MEMBERS
    {
        /**
         * Add the sub-commands for this MacroCommand
         * @override
         */
        initializeMacroCommand: function () {
          console.log("iniMacroCmd");
            this.addSubCommand(Texas.PrepControllerCommand);
            this.addSubCommand(Texas.PrepModelCommand);
            this.addSubCommand(Texas.PrepViewCommand );
        }
    }
);
