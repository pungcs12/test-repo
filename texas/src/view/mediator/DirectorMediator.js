
puremvc.define
(
    // CLASS INFO
    {
        name: 'Texas.DirectorMediator',
        parent: puremvc.Mediator,
        constructor: function() {
            puremvc.Mediator.call(this, this.constructor.NAME);
        }
    },
    // INSTANCE MEMBERS
    {
        /** @override */
        listNotificationInterests: function () {
            return [
                TexasEvents.SHOW_LOBBY_SCENE
            ];
        },

        /** @override */
        handleNotification: function (notification) {
            console.log("notification.name  "+notification.getName());
            switch (notification.getName()) {
                case TexasEvents.SHOW_LOBBY_SCENE:
//                 var userData
//                 userData.siteName
//                 userData.balance
//                 userData.win
//                 userData.lose
//                 userData.objectId
//				   userData.icon
//				   userData.nick
//				   userData.ratio
//				   userData.siteId
//				   userData.userIdOfSite
                   //var userData=AppConstants.USER;
                   
//                 var roomsArrayData ---->Arry
//                 roomData
//                 roomData.joinedPlayers
//                 roomData.joinedTables
//                 roomData.maxBet
//                 roomData.maxMoney
//                 roomData.maxPlayers
//                 roomData.minBet
//                 roomData.name
//                 roomData.objectId
//                 roomData.server_url
                   
                   //var roomsArrayData=notification.getBody();
                   AppConstants.game.state.start("Lobby");
                   
                break;
            }
        },

        /** @override */
        onRegister: function () {

        },

        /** @override */
        onRemove: function () {
        }
    },
    // STATIC MEMBERS
    {
        NAME: 'DirectorMediator'
    }
);
