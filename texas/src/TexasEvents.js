/**
 * Created by admin on 2016/3/14.
 */
var TexasEvents = {
    INIT_NETWORK:'init_network',
    INIT_NETWORK123:'init_network123',
    SHOW_LOADING_SCENE:'show_loading_scene',
    CHECK_LOGIN:'check_login',
    SHOW_LOBBY_SCENE:'show_lobby_scene',

    ENTER_ROOM:'enter_room',

    //WebSocket
    WEBSOCKET_NETWORK_INSTABILITY:'ws_network_instability',//网络不稳定
    WEBSOCKET_CONNECT_TIMEOUT :'ws_connect_timeout',//网络超时
    WEBSOCKET_REQUEST_ERR: 'ws_request_err',//网络返回请求错误
    WEBSOCKET_REQUEST_DATA_ERR: 'ws_request_data_err',//网络数据错误
    WEBSOCKET_SHOW_LOADING: 'ws_show_loading',//显示loading 动画
    WEBSOCKET_CLOSE_LOADING: 'ws_close_loading',//关闭loading 动画
    WEBSOCKET_TIMEOUT :'ws_timeout',//请求超时
    WEBSOCKET_MESSAGEGET_DATA :'ws_messageGet_data',//获取数据


};
