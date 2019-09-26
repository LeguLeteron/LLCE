/*
bb : bottom bar
sv : style variation
*/
var message = {
    svCheck : false,
    bbCheck : false
};

$(document).ready(function(){
    $(".switchCheckBox.sv").change(function(){
        if($(".switchCheckBox.sv").is(":checked")){
            //console.log("1 체크!");
            message.svCheck = true;
        }else{
            //console.log("1 체크아웃!");
            message.svCheck = false;
        }
        //console.log(message);
        popupSv();
        sendMessage(message);
    });
    $(".switchCheckBox.bb").change(function(){
        if($(".switchCheckBox.bb").is(":checked")){
            //console.log("2 체크!");
            message.bbCheck = true;
        }else{
            //console.log("2 체크아웃!");
            message.bbCheck = false;
        }
        //console.log(message);
        sendMessage(message);
    })
});

function popupSv()
{
    if(message.svCheck)
    {
        $("*").addClass("svChecked");
        $("lable.switch").removeClass("svChecked");
        $("span.slider.round").removeClass("svChecked");
        $("div.switchWrap").removeClass("svChecked");
    }else
    {
        $("*").removeClass("svChecked");
    }
}

/* For Communicate */
var port = chrome.extension.connect({
    name: "popupToBackground"
});

function sendMessage(msg)
{
    port.postMessage(msg);
}

function getMessage()
{
    port.onMessage.addListener(function(msg){
        console.log("message recieved :" + msg.testString);
    });
}
getMessage();