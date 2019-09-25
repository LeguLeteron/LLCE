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
    });
    $(".switchCheckBox.bb").change(function(){
        if($(".switchCheckBox.bb").is(":checked")){
            //console.log("2 체크!");
            message.bbCheck = true;
        }else{
            //console.log("2 체크아웃!");
            message.bbCheck = false;
        }
    })
});