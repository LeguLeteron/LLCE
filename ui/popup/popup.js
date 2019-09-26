/*
bb : bottom bar
sv : style variation
vf : Vibrate feedback
cg : cursor grap
*/
var message = {
    svCheck : false,
    bbCheck : false,
    vfCheck : false,
    cgCheck : false,
    device : false,
};

$(document).ready(function(){
    $(".switchCheckBox.sv").change(function(){
        if($(".switchCheckBox.sv").is(":checked")){
            //console.log("1 체크!");
            message.svCheck = true;
            $(".settingStatus.sv").text("On");
        }else{
            //console.log("1 체크아웃!");
            message.svCheck = false;
            $(".settingStatus.sv").text("Off");
        }
        //console.log(message);
        popupSv();
        sendMessage(message);
    });
    $(".switchCheckBox.bb").change(function(){
        if($(".switchCheckBox.bb").is(":checked")){
            //console.log("2 체크!");
            message.bbCheck = true;
            $(".settingStatus.bb").text("On");
            popupBbOn();
        }else{
            //console.log("2 체크아웃!");
            message.bbCheck = false;
            $(".settingStatus.bb").text("Off");
            popupBbOff();
        }
        //console.log(message);
        sendMessage(message);
    });

    if(message.device == true)
    {
        $(".switchCheckBox.vf").change(function(){
            if($(".switchCheckBox.vf").is(":checked")){
                //console.log("3 체크!");
                message.vfCheck = true;
                $(".settingStatus.vf").text("On");
            }else{
                //console.log("3 체크아웃!");
                message.vfCheck = false;
                $(".settingStatus.vf").text("Off");
            }
            //console.log(message);
            sendMessage(message);
        });
        $(".switchCheckBox.cg").change(function(){
            if($(".switchCheckBox.cg").is(":checked")){
                //console.log("4 체크!");
                message.cgCheck = true;
                $(".settingStatus.cg").text("On");
            }else{
                //console.log("4 체크아웃!");
                message.cgCheck = false;
                $(".settingStatus.cg").text("Off");
            }
            //console.log(message);
            sendMessage(message);
        });
    }
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
function popupBbOn()
{
    $(".bottomBar").css("height", "60px");
    document.getElementsByClassName("bottomBar-link")[0].href = "https://leguleteron.github.io";
}
function popupBbOff()
{
    $(".bottomBar").css("height", "0px");
    document.getElementsByClassName("bottomBar-link")[0].href = "#";}
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
        if(msg.testString)
        {
            console.log("message recieved :" + msg.testString);
        }
        if(msg.device)
        {
            onDevice();
            console.log("message recieved : device-", msg.device);
        }else
        {
            offDevice();
        }
    });
}
getMessage();

/* device setting */
function onDevice()
{
    $(".settingItem.vf").css("display", "inline-block");
    $(".settingItem.cg").css("display", "inline-block");
}

function offDevice()
{
    $(".settingItem.vf").css("display", "none");
    $(".settingItem.cg").css("display", "none");
}
onDevice();