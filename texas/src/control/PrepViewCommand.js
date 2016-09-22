/**
 * Created by zhanwen on 2016/3/12.
 */
puremvc.define ({
        name: 'Texas.PrepViewCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /**
         * Register Mediators with the View
         * @override
         */
        execute: function (note) {
            this.facade.registerMediator(new Texas.DirectorMediator());
            //this.facade.registerMediator(new Texas.WindowMediator());
            //this.facade.registerMediator(new Texas.LobbyMediator());
            //this.facade.registerMediator(new Texas.GameMediator());
        }
    }
);
