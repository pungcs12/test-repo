
puremvc.define({
        name: 'Texas.GameProxy',
        parent: puremvc.Proxy,
        constructor: function () {
            puremvc.Proxy.call(this);
        }
    },

    // INSTANCE MEMBERS
    {
        sysProxy:null,
        onRegister: function() {
            var self = this;
            this.sysProxy = this.facade.retrieveProxy(Texas.SystemConfigProxy.NAME);
        },
        loadGame:function(game){
            var req = new Object();
            req.action = "spin.loadNrReels";
            req.type = game.games;
            req.eventOpen = game.eventOpen;
            var self = this;
            this.sysProxy.send2server(req,function(content){
                content.gameName = game.games;
                self.loadGameOk(content)
            });
        },
        loadGameOk:function(content){
            AppFacadeInstance.sendNotification(SlotsEvents.LOAD_GAME_OK,content);
        },
        //leaveRoomList
        leaveRoomList:function(){
        	var _ws=WebSocketManager;
        	_ws.purge();
        }, 
        //add addRoom 
        enterRoom:function(roomData){
        	AppConstants.SERVER_WSS_URL=roomData.wssUrl;

        	var req = new Object();
            req.action = "enterRoom";
            req.roomId=roomData.roomId;
            var _ws=WebSocketManager;
           
            _ws.sendGetRequest(req,
            function(tablelist){
            	AppFacadeInstance.sendNotification(TexasEvents.WEBSOCKET_MESSAGEGET_DATA,tablelist);
            });
        },
        
        //create Table 
        createTable:function(roomId){
        	var req = new Object();
            req.action = "createTable";
            req.roomId=roomId;
            var _ws=WebSocketManager;
            _ws.sendGetRequest(req,
            function(table){
            	
            });
        }
    },

    // CLASS MEMBERS
    {
        NAME: 'GameProxy'
    }
);