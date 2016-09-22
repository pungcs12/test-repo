/**
 * @author Mike Britton, Cliff Hall
 *
 * @class PrepControllerCommand
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
        name: 'Texas.PrepControllerCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /**
         * Register Commands with the Controller
         * @override
         */
        execute: function (note) {
            this.facade.registerCommand(TexasEvents.INIT_NETWORK,Texas.InitNetWorkCommand);
            this.facade.registerCommand(TexasEvents.CHECK_LOGIN,Texas.LoginCommand);
            this.facade.registerCommand(TexasEvents.ENTER_ROOM,Texas.GameCommand);

        }
    }
);
