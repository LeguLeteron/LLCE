var port = null;

/*
var getKeys = function(obj) {
    var keys = [];
    for(var key in obj){
        keys.push(key);
    }
    return keys;
}
*/

function sendNativeMessage() {
    var msg = {
      cursor : true,  
    };
    port.postMessage(msg);
}

function onNativeMessage(msg) {
    console.log("Received Message : " + msg);
}

function onDisconnected(){
    port = null;
}

function connect() {
    var hostName = "com.leguleteron.llcp",
    port = chrome.runtime.connectNative(hostName);
    port.onMessage.addListener(onNativeMessage);
    port.onDesconnect.addListener(onDisconnected);
}