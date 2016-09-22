/**
 * Created by zhanwen on 2016/3/12.
 */
puremvc.define({
        name: 'Texas.PlayerProxy',
        parent: puremvc.Proxy,
        constructor: function () {
            puremvc.Proxy.call(this);
        }
    },

    // INSTANCE MEMBERS
    {
        sysProxy:null,
        friends:null,
        lockGame:null,
        onRegister: function() {
            var self = this;
            this.sysProxy = this.facade.retrieveProxy(Texas.SystemConfigProxy.NAME);

        },
        checkLogin:function(){
//          var req = new Object();
//          req.action = "nuser.login";
//          this.sysProxy.send2server(req,this.loginOk);
			var content=new Object();
			content.user="123";
			content.rooms="testRoomDate"
			this.loginOk(content);
        },
        loginOk:function(content){
            AppConstants.USER = content.user;
            console.log("myname "+content.user);
            AppFacadeInstance.sendNotification(TexasEvents.SHOW_LOBBY_SCENE,content.rooms);
        },
    },

    // CLASS MEMBERS
    {
        NAME: 'PlayerProxy'
    }
);
