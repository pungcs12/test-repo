/**
 * Created by jerryzhang on 2016/8/5.
 */
var WebSocket = WebSocket || window.WebSocket || window.MozWebSocket;
var WebSocketManager = {
     _wsObj:null,
    _wsReConnectTimes:0,
    _reConnectMax:3,
    _connectTimeout:5,
    _reConnectFlag:false,

    _msg:null,
    _msgKey:null,
    _msgSendStatus:'nothing',
    _msgTimeout:5,
    _msgTimeoutTimes:0,

    _msgGet:'',

    _target:null,
    _callback:null,
	_interval:null,
	_msgTimeoutInterval:null,
    //打开连接
    openConnect:function () {
    	console.log(WebSocketManager._wsObj);
        if(WebSocketManager._wsObj){
        	console.log("asdasdas")
            WebSocketManager._wsObj.close();
            return;
        }
        WebSocketManager._wsObj = null;
        var self = WebSocketManager;

        WebSocketManager._wsObj = new WebSocket(AppConstants.SERVER_WSS_URL+'?st_s='+AppConstants.SESSIONID);
        console.log("WS CONNECTING." + AppConstants.SERVER_WSS_URL+'?st_s='+AppConstants.SESSIONID);

        //连接超时判断
        if(!self._interval){
        	self._interval=window.setInterval(self.connectTimeoutCheck,self._connectTimeout);
        }
        
        
        //cc.director.getScheduler().scheduleCallbackForTarget(this,this.connectTimeoutCheck,0, 0, this._connectTimeout);

        WebSocketManager._wsObj.onopen = function (evt) {
            self.openGet(evt);
        };

        WebSocketManager._wsObj.onmessage = function (evt) {
            self.messageGet(evt);
        };

        WebSocketManager._wsObj.onerror = function (evt) {
            self.errorGet(evt);
        };

        WebSocketManager._wsObj.onclose = function (evt) {
            self.closeGet(evt);
        };
    },

    //连接超时判断
    connectTimeoutCheck:function(){
        if( WebSocketManager._wsObj && WebSocketManager._wsObj.readyState == WebSocket.CONNECTING){
        	
            //重连次数
            if(WebSocketManager._wsReConnectTimes >WebSocketManager._reConnectMax){
                //重试过多后，应该提示玩家目前网络不稳定
                //发送消息 显示窗口
                AppFacadeInstance.sendNotification(TexasEvents.WEBSOCKET_NETWORK_INSTABILITY);
            }else{
                WebSocketManager._wsReConnectTimes++;
                //发送消息，重新连接中
                AppFacadeInstance.sendNotification(TexasEvents.WEBSOCKET_CONNECT_TIMEOUT);
            }
        }else{
        	
			WebSocketManager.connectTimeoutHandle();
        }

    },

    //超时后重新连接
    connectTimeoutHandle:function(){
        //重新打开连接
        WebSocketManager.closeConnect();
    },

    //关闭连接
    closeConnect:function () {
        console.log("WS CLOSING.");
        if(WebSocketManager._wsObj){
        	console.log("WebSocketManager._wsObj");
            WebSocketManager._wsObj.close();
        }
    },

    //连接后处理
    openGet:function (evt) {
        console.log("WS was opened.");

        //获得连接的消息后，去掉超时判断
        var self = WebSocketManager;
        window.clearInterval(self._interval); 
        self._interval=null;
        //cc.director.getScheduler().unscheduleCallbackForTarget(this,this.connectTimeoutCheck);
        //清除重连次数
        WebSocketManager._wsReConnectTimes = 0;
        //是否有未发送的消息重新发送
        if (WebSocketManager._msgSendStatus =='msgReady' && WebSocketManager._msg) {
            WebSocketManager.sendRequest();
        }
    },

    //获得消息
    messageGet:function (evt) {
        WebSocketManager._msgGet = evt.data;
        try{
            if (WebSocketManager._msgGet.length <10000)
                console.log('response:' +WebSocketManager._msgGet);
            else
                console.log('content too long to display.');
        }catch(e){
            console.log('too large');
        }

        try{
            var resObj = JSON.parse(WebSocketManager._msgGet);
            if(resObj.code!=0){
            	//错误
            	AppFacadeInstance.sendNotification(TexasEvents.WEBSOCKET_REQUEST_ERR);
            }else{
            	AppFacadeInstance.sendNotification(TexasEvents.WEBSOCKET_MESSAGEGET_DATA,resObj);
            }
           
        }catch (e){
            //ws 数据错误
            AppFacadeInstance.sendNotification(TexasEvents.WEBSOCKET_REQUEST_ERR);
        }

    },

    //获取错误
    errorGet:function (evt) {
        console.log("WS Error"+evt);
        WebSocketManager.closeConnect();
    },

    //连接关闭处理
    closeGet:function (evt) {
        console.log("websocket instance closed.");
        WebSocketManager._wsObj = null;
        //连接关闭马上进行重试
        WebSocketManager.openConnect();
    },

    /**
     * 给服务器发送消息
     * @param act
     * @param params
     * @param callback
     * @param target
     */
    sendGetRequest:function (params, callback) {

        WebSocketManager.beforeRequestSend(params, callback);
        //判断当前连接
        if (WebSocketManager.isOpen()) {
            WebSocketManager.sendRequest();
        }
        else {
            WebSocketManager.openConnect();
        }
    },

    //准备消息 组合数据
    beforeRequestSend:function (params, callback) {
        //弹出loading
        AppFacadeInstance.sendNotification(TexasEvents.WEBSOCKET_SHOW_LOADING);

        //注册消息，回调
        WebSocketManager._msg = params;
        WebSocketManager._callback = callback;     
        WebSocketManager._msgSendStatus = 'msgReady';
    },

    //发送消息
    sendRequest:function () {
        console.log('send request :');
        console.log(JSON.stringify(WebSocketManager._msg));
        WebSocketManager._wsObj.send(JSON.stringify(WebSocketManager._msg));
        WebSocketManager._msgSendStatus = 'msgSend';

        //设置超时时间
        if(!WebSocketManager._msgTimeoutInterval){
        	 WebSocketManager._msgTimeoutInterval=window.setInterval(self.sendTimeoutCheck,self._msgTimeout);
        }
       
       // cc.director.getScheduler().scheduleCallbackForTarget(this,this.sendTimeoutCheck,0, 0, this._msgTimeout);
    },

    //消息被响应了
    requestResponse:function (resObj) {

        //获得响应的消息后，去掉loading遮罩
        var self = WebSocketManager;
        window.clearInterval(self._msgTimeoutInterval);
        self._msgTimeoutInterval=null;
        //cc.director.getScheduler().unscheduleCallbackForTarget(this,this.sendTimeoutCheck);
        WebSocketManager._msg = null;
        WebSocketManager._msgSendStatus = 'nothing';
        AppFacadeInstance.sendNotification(TexasEvents.WEBSOCKET_CLOSE_LOADING);

		
		try{
            var resObj = JSON.parse(WebSocketManager._msgGet);
            if(resObj.code!=0){
            	//错误
            	AppFacadeInstance.sendNotification(TexasEvents.WEBSOCKET_REQUEST_ERR);
            }else{
            	 WebSocketManager._callback.call(resObj);
            }
        }catch (e){
            //ws 数据错误
            AppFacadeInstance.sendNotification(TexasEvents.WEBSOCKET_REQUEST_ERR);
        }
    },

    //发送消息超时判断
    sendTimeoutCheck:function(){
        if(WebSocketManager._msgSendStatus =='msgSend'){
            //消息没有被响应，去掉loading遮罩
            AppFacadeInstance.sendNotification(TexasEvents.WEBSOCKET_CLOSE_LOADING);
            AppFacadeInstance.sendNotification(TexasEvents.WEBSOCKET_TIMEOUT);
        }
    },

    //判断ws是否已经连接
    isOpen:function(){
        return (WebSocketManager._wsObj &&WebSocketManager._wsObj.readyState == WebSocket.OPEN);
    },

    purge:function () {
        WebSocketManager.closeConnect();
        WebSocketManager._instance = null;
    },
    
    
};

//WebSocketManager._instance =null;
//WebSocketManager.getInstance =function () {
//  if (!this._instance) {
//      this._instance = new WebSocketManager();
//  }
//  return this._instance;
//};