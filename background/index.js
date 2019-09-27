/******************************************************/
// host name
var hostName = {
    native: ""
};

// Port
var port_native;
var port_popup;

// Communication Status
var com_status = {
    native: false,
    popup: false
}
/******************************************************/
var getKeys = function(obj){
    var keys = [];
    for(var key in obj){
       keys.push(key);
    }
    return keys;
 }

/******************************************************/
// native message
var status_device = {
    com_port : "COM3",
    cursor : true,
    vibrate: true,
    vibrate_text: true,
    vibrate_image: true,
    output: true,
    string: ""
};

// extension message
var status_extension = {
    receive :{
        svCheck: false,
        bbCheck: false,
        vfCheck: false,
        cgCheck: false,
        device: false,
        testString: "",
        from: ""
    },
    send : {
        svCheck: false,
        bbCheck: false,
        vfCheck: false,
        cgCheck: false,
        device: false,
        testString: "",
        from: ""
    }
}

/******************************************************/
// function for native messaging
function sendNativeMessage() {
    if(port_native)
    {
        console.log("Port : ", port_native);
        port_native.postMessage({
            com_port : message.com_port,
            cursor : message.curser,
            vibrate: message.vibrate,
            vibrate_text: message.vibrate_text,
            vibrate_image: message.vibrate_image,
            output: message.output,
            string: message.string
        });
        console.log("Send Message : ", message);
    }
}

function onNativeMessage(msg) {
    console.log("Received Message : " + msg);
    if(port_popup){
        port_popup.postMessage({testString: msg});
    }
}

function onDisconnected(){
    console.log("Failed to connect: " + chrome.runtime.lastError.message);
    
    port_native = null;
    com_status.native = false;
}

function connect() {
    hostName.native = "com.leguleteron.llcp";

    port_native = chrome.runtime.connectNative(hostName.native);
    port_native.onMessage.addListener(onNativeMessage);
    port_native.onDisconnect.addListener(onDisconnected);
    
    status_extension.send.device = true;
    com_status.native = true;

    if(port_native){
        sendNativeMessage();
        console.log("Connect Port : ", port_native);
    }
}
connect();
/******************************************************/
// function for extension messaging
chrome.extension.onConnect.addListener(function(port){

    com_status.popup = true;
    port_popup = port;

    port_popup.onMessage.addListener(function(msg){
        setStatusExtension(
            "receive",
            msg.svCheck,
            msg.bbCheck, 
            msg.vfCheck,
            msg.cgCheck,
            msg.device,
            msg.testString,
            "popup"
        );
        
        setStatusExtension(
            "send",
            msg.svCheck,
            msg.bbCheck, 
            msg.vfCheck,
            msg.cgCheck,
            status_extension.send.device,
            "Send: Background",
            "background"
        );
        
        port_popup.postMessage({
            from: status_extension.send.from,
            svCheck : status_extension.send.svCheck,
            bbCheck : status_extension.send.bbCheck,
            vfCheck : status_extension.send.vfCheckl,
            cgCheck : status_extension.send.cgCheck,
            device : status_extension.send.device,
            testString: status_extension.send.testString
        });

        chrome.tabs.query({}, function(tabs){
            for(var i = 0; i < tabs.length; i++){
                chrome.tabs.sendMessage(tabs[i].id, {
                    from: status_extension.send.from,
                    svCheck : status_extension.send.svCheck,
                    bbCheck : status_extension.send.bbCheck,
                    testString: status_extension.send.testString
                });
            }
        });
    });
});

function setStatusExtension(
    status,
    svCheck,
    bbCheck, 
    vfCheck,
    cgCheck,
    device,
    testString,
    from
){
    if(status == "send"){

        status_extension.send.svCheck = svCheck;
        status_extension.send.bbCheck = bbCheck;
        status_extension.send.vfCheck = vfCheck;
        status_extension.send.cgCheck = cgCheck;
        status_extension.send.device = device;
        status_extension.send.testString = testString;
        status_extension.send.from = from;

    }else if(status == "receive"){

        status_extension.receive.svCheck = svCheck;
        status_extension.receive.bbCheck = bbCheck;
        status_extension.receive.vfCheck = vfCheck;
        status_extension.receive.cgCheck = cgCheck;
        status_extension.receive.device = device;
        status_extension.receive.testString = testString;
        status_extension.receive.from = from;

    }
}