
/**
 * @author Mike Britton, Cliff Hall
 *
 * @class TodoCommand
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define ({
        name: 'Texas.GameCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /**
         * Perform business logic (in this case, based on Notification name)
         * @override
         */
        execute: function (note) {
            var proxy = this.facade.retrieveProxy(Texas.GameProxy.NAME);
            switch(note.getName()) {
                case TexasEvents.LOAD_GAME:
                    proxy.loadGame(note.getBody());
                    break;
                case TexasEvents.ENTER_ROOM:
                	proxy.enterRoom(note.getBody());
                break;
                default:
                    console.log('TodoCommand received an unsupported Notification');
                    break;
            }
        }
    }
);
