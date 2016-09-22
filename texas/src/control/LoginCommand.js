/**
 * Created by zhanwen on 2016/3/12.
 */
/**
 * @author Mike Britton, Cliff Hall
 *
 * @class TodoCommand
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define ({
        name: 'Texas.LoginCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /**
         * Perform business logic (in this case, based on Notification name)
         * @override
         */
        execute: function (note) {
            var proxy = this.facade.retrieveProxy(Texas.PlayerProxy.NAME);
            switch(note.getName()) {
                case TexasEvents.CHECK_LOGIN:
                  console.log("haha");
                    proxy.checkLogin();

                    break;
                default:
                    console.log('TodoCommand received an unsupported Notification');
                    break;
            }
        }
    }
);
