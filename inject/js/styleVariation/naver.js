/*****************************************************/
/* Global Variable                                   */
/*                                                   */
/* MoEv : Mouse Event                                */
/* MoEn : Mouse Enter                                */
/* MoLe : Mouse Leave                                */
/*****************************************************/
var MoEn_Status = false;
var MoEv_List = [
  /* Header */
  ".area_logo h1",
  ".search .green_window",
  "#ke_kbd_btn",
  "#search_btn",
  ".search .btn_arw",
  /* Nav */
  ".area_navigation .an_a",
  ".area_navigation .an_mtxt",
  ".area_hotkeyword .ah_a",
  /* Ad Banner */
  "#veta_top",
  "#veta_top img",
  /* Login */
  ".lg_local .lg_local_btn",
  ".lg_local .lg_local_text",
  ".lg_links .lg_find_text",
  ".lg_links .lg_link_join",
  /* News */
  ".area_newsstand .api_list",
  ".area_newstop",
  ".cast_link .cl_a",
  ".area_newsstand .api_list"
];

/*****************************************************/
/* Task                                              */
/*****************************************************/
function setMoEnStatus(status) {
  if (MoEn_Status != status) {
    MoEn_Status = status;
    console.log(MoEn_Status);
  }
}

/*****************************************************/
/* Main                                              */
/*****************************************************/
$(document).ready(function() {
  for (var i = 0; i < MoEv_List.length; i++) {
    $(MoEv_List[i]).mouseenter(function() {
      setMoEnStatus(true);
    });
    $(MoEv_List[i]).mouseleave(function() {
      setMoEnStatus(false);
    });
  }
});
