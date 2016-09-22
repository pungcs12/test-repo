/**
 * Created by admin on 2016/3/14.
 */
puremvc.define
(
    // CLASS INFO
    {
        name: 'Texas.PrepModelCommand',
        parent:puremvc.SimpleCommand
    },
    // INSTANCE MEMBERS
    {
        /** @override */
        execute: function (notification)
        {
            this.facade.registerProxy(new Texas.SystemConfigProxy());
            this.facade.registerProxy(new Texas.PlayerProxy());
            this.facade.registerProxy(new Texas.GameProxy());
        }
    },
    // STATIC MEMBERS
    {
        NAME: 'PrepModelCommand'
    }
);
