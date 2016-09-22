/**
 * Created by admin on 2016/3/14.
 */
puremvc.define ({
        name: 'Texas.InitNetWorkCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /**
         * Perform business logic (in this case, based on Notification name)
         * @override
         */

        execute: function (note) {
            var proxy = this.facade.retrieveProxy(Texas.SystemConfigProxy.NAME);
            console.log(note.getName());
            switch(note.getName()) {
                case TexasEvents.INIT_NETWORK:
                    console.log("My-1");
                    proxy.init();
                    break;
                    // case TexasEvents.INIT_NETWORK:
                    //     console.log("My-3");
                    //     proxy.init();
                    //     break;

                default:
                    console.log('TodoCommand received an unsupported Notification');
                    break;
            }
        }
    }
);
