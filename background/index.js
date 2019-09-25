/* For Native Application */
var port = null;

var getKeys = function(obj){
    var keys = [];
    for(var key in obj){
       keys.push(key);
    }
    return keys;
 }

var message = {
    "com_port" : "COM3",
    "cursor": true,
    "vibrate": true,
    "vibrate_text": true,
    "vibrate_image": true,
    "output": true,
    "string": ""
};

function sendNativeMessage() {
  port.postMessage(message);
  appendMessage("Sent message: <b>" + JSON.stringify(message) + "</b>");
}

function onNativeMessage(msg) {
    console.log("Received Message : " + msg);
}

function onDisconnected(){
    console.log("Failed to connect: " + chrome.runtime.lastError.message);
    port = null;
}

function connect() {
    var hostName = "com.leguleteron.llcp",
    port = chrome.runtime.connectNative(hostName);
    port.onMessage.addListener(onNativeMessage);
    port.onDesconnect.addListener(onDisconnected);
}

/* For Extension */
var contentTabId;

chroe.runtime.onMessage.addListener(function(msg, sender){
    if(msg.from == "content"){
        contentTabId = sender.tab.id;
    }
    if(msg.from == "popup" && contentTabId){
        chrome.tabs.sendMessage(contentTabId, {
            from: "background"
        })
    }
})