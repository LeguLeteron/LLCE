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
    com_port : "COM3",
    cursor : true,
    vibrate: true,
    vibrate_text: true,
    vibrate_image: true,
    output: true,
    string: ""
};

var status_extension = {
    svCheck: false,
    bbCheck: false,
    testString: ""
}

function sendNativeMessage() {
  port.postMessage(message);
  //appendMessage("Sent message: <b>" + JSON.stringify(message) + "</b>");
}

function onNativeMessage(msg) {
    //console.log("Received Message : " + msg);
}

function onDisconnected(){
    //console.log("Failed to connect: " + chrome.runtime.lastError.message);
    port = null;
}

function connect() {
    var hostName = "com.leguleteron.llcp",
    port = chrome.runtime.connectNative(hostName);
    port.onMessage.addListener(onNativeMessage);
    port.onDesconnect.addListener(onDisconnected);
}

/* For Extension */
chrome.extension.onConnect.addListener(function(_port){
    //console.log("Connected... ");
    _port.onMessage.addListener(function(msg){
        setStatusExtension(msg.svCheck, msg.bbCheck, msg.testString);
        
        _port.postMessage({
            svCheck : msg.svCheck,
            bbCheck : msg.bbCheck,
            testString: "Test"
        });

        chrome.tabs.query({}, function(tabs){
            for(var i = 0; i < tabs.length; i++){
                chrome.tabs.sendMessage(tabs[i].id, {
                    from: "background",
                    svCheck : msg.svCheck,
                    bbCheck : msg.bbCheck,
                    testString: "Test"
                });
            }
        });
    });
});

function setStatusExtension(svCheck, bbCheck, testString){
    status_extension.svCheck = svCheck;
    status_extension.bbCheck = bbCheck;
    status_extension.testString = testString;
}