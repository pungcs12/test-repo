/**
 * Created by admin on 2016/3/14.
 */
function createXmlHttpRequest(){    
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP");
} 

var HttpConnection = {
    connected:true,
    init:function(callback){
        var xhr = createXmlHttpRequest();
        if (xhr){
            var params = new Object();
            params.language = "en";
            params.version = AppConstants.APP_VERSION;
            params.platform = AppConstants.PLATFORM;
            //var uuid =  cc.sys.localStorage.getItem("slotsUUID");
            //if(uuid && "undefined" != uuid){
            //    params.uuid =  uuid;
            //}

            xhr.open("POST",AppConstants.SERVER_BASE_URL+"game.htm");
            xhr.setRequestHeader("Content-Type","text/plain;charset=UTF-8");

            xhr.timeout = 20000;
            xhr.ontimeout = function(){
                var resp = new Object();
                resp.code= -1;
                resp.msg = "time out";
                callback(resp);
            };
            xhr.onreadystatechange = function(){
                if(xhr.status!=200 && xhr.readyState==4){
                    var resp = new Object();
                    resp.code= xhr.status;
                    resp.msg = "";
                    callback(resp);
                }
                else if(xhr.status==200 && xhr.readyState==4){
                    HttpConnection.connected = true;
                    var resp = new Object();
                    resp.code = 0;
                    resp.msg = JSON.parse(xhr.responseText).content;
                    callback(resp);
                }
            };
            xhr.send(JSON.stringify(params));
        }
    },
    send2server:function(request,callback){
        var xhr = createXmlHttpRequest();
        if (xhr && HttpConnection.connected){
            var params = request.params.replace("#","");
            params = encodeURI(params);
            xhr.open("POST",AppConstants.SERVER_BASE_URL+"game.htm");
            if(request.header){
                for(var key in request.header){
                    xhr.setRequestHeader(key,request.header[key]);
                }
            }
            xhr.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
            xhr.timeout = 20000;
            xhr.ontimeout = function(){
                var resp = new Object();
                resp.httpCode= -1;
                resp.msg = "time out";
                callback(resp);
            };
            
            xhr.onreadystatechange = function(){
                if(xhr.status!=200 && xhr.readyState==4){
                    var resp = new Object();
                    resp.httpCode= xhr.status;
                    resp.msg = "";
                    callback(resp);
                }
                else if(xhr.status==200 && xhr.readyState==4){
                    var resp = new Object();
                    resp.httpCode = 200;
                    resp.msg = JSON.parse(xhr.responseText);
                    callback(resp);
                }
            };
            xhr.send(params);
        }
    }
};