/*****************************************************/
/* Global Variable                                   */
/*                                                   */
/* MoEv : Mouse Event                                */
/* MoEn : Mouse Enter                                */
/* MoLe : Mouse Leave                                */
/*****************************************************/
var MoEn_Status = false;

/*****************************************************/
/* Main                                              */
/*****************************************************/
$(document).ready(function() {
  MoEv_header();
  MoEv_nav();
  MoEv_adBanner();
  MoEv_login();
  MoEv_newscast();
});

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
/* Mouse Event                                       */
/*****************************************************/
///////////////////////////
function MoEv_header() {
  MoEn_mainLogo();
  MoLe_mainLogo();

  MoEn_searchWindow();
  MoLe_searchWindow();
}
///////////////////////////
function MoEv_nav() {
  MoEn_mainNavLink();
  MoLe_mainNavLink();

  MoEn_hotKeywordLink();
  MoLe_hotKeywordLink();
}
///////////////////////////
function MoEv_adBanner() {
  MoEn_mainBannerAd();
  MoLe_mainBannerAd();
}
///////////////////////////
function MoEv_login() {
  MoEn_loginLink();
  MoLe_loginLink();

  MoEn_loginText();
  MoLe_loginText();

  MoEn_loginFind();
  MoLe_loginFind();

  MoEn_loginJoin();
  MoLe_loginJoin();
}
///////////////////////////
function MoEv_newscast() {
  MoEn_newtop();
  MoLe_newstop();

  MoEn_newsstand();
  MoLe_newsstand();
}
///////////////////////////
/*****************************************************/
/* Header Event                                      */
/*****************************************************/
// Mouse Enter
function MoEn_mainLogo() {
  $(".area_logo h1").mouseenter(function() {
    setMoEnStatus(true);
  });
}
function MoEn_searchWindow() {
  $(".search .green_window").mouseenter(function() {
    setMoEnStatus(true);
  });
  $("#ke_kbd_btn").mouseenter(function() {
    setMoEnStatus(true);
  });
  $("#search_btn").mouseenter(function() {
    setMoEnStatus(true);
  });
  $(".search .btn_arw").mouseenter(function() {
    setMoEnStatus(true);
  });
}
// Mouse Leave
function MoLe_mainLogo() {
  $(".area_logo h1").mouseleave(function() {
    setMoEnStatus(false);
  });
}
function MoLe_searchWindow() {
  $(".search .green_window").mouseleave(function() {
    setMoEnStatus(false);
  });
  $("#ke_kbd_btn").mouseleave(function() {
    setMoEnStatus(false);
  });
  $("#search_btn").mouseleave(function() {
    setMoEnStatus(false);
  });
  $(".search .btn_arw").mouseleave(function() {
    setMoEnStatus(false);
  });
}

/*****************************************************/
/* Main Nav  Event                                   */
/*****************************************************/
// Mouse Enter
function MoEn_mainNavLink() {
  $(".area_navigation .an_a").mouseenter(function() {
    setMoEnStatus(true);
  });
  $(".area_navigation .an_mtxt").mouseenter(function() {
    setMoEnStatus(true);
  });
}

function MoEn_hotKeywordLink() {
  $(".area_hotkeyword .ah_a").mouseenter(function() {
    setMoEnStatus(true);
  });
}
// Mouse Leave
function MoLe_mainNavLink() {
  $(".area_navigation .an_a").mouseleave(function() {
    setMoEnStatus(false);
  });
  $(".area_navigation .an_mtxt").mouseleave(function() {
    setMoEnStatus(false);
  });
}

function MoLe_hotKeywordLink() {
  $(".area_hotkeyword .ah_a").mouseleave(function() {
    setMoEnStatus(false);
  });
}

/*****************************************************/
/* Ad Banner Event                                   */
/*****************************************************/
// Mouse Enter
function MoEn_mainBannerAd() {
  $("#veta_top").mouseenter(function() {
    setMoEnStatus(true);
  });
  $("#veta_top img").mouseenter(function() {
    setMoEnStatus(true);
  });
}
// Mouse Leave
function MoLe_mainBannerAd() {
  $("#veta_top").mouseleave(function() {
    setMoEnStatus(false);
  });
  $("#veta_top img").mouseleave(function() {
    setMoEnStatus(false);
  });
}

/*****************************************************/
/* Login Event                                       */
/*****************************************************/
// Mouse Enter
function MoEn_loginLink() {
  $(".lg_local .lg_local_btn").mouseenter(function() {
    setMoEnStatus(true);
  });
}
function MoEn_loginText() {
  $(".lg_local .lg_local_text").mouseenter(function() {
    setMoEnStatus(true);
  });
}
function MoEn_loginFind() {
  $(".lg_links .lg_find_text").mouseenter(function() {
    setMoEnStatus(true);
  });
}
function MoEn_loginJoin() {
  $(".lg_links .lg_link_join").mouseenter(function() {
    setMoEnStatus(true);
  });
}
// Mouse Leave
function MoLe_loginLink() {
  $(".lg_local .lg_local_btn").mouseleave(function() {
    setMoEnStatus(false);
  });
}
function MoLe_loginText() {
  $(".lg_local .lg_local_text").mouseleave(function() {
    setMoEnStatus(false);
  });
}
function MoLe_loginFind() {
  $(".lg_links .lg_find_text").mouseleave(function() {
    setMoEnStatus(false);
  });
}
function MoLe_loginJoin() {
  $(".lg_links .lg_link_join").mouseleave(function() {
    setMoEnStatus(false);
  });
}
/*****************************************************/
/* Newcast Event                                     */
/*****************************************************/
// Mouse Enter
function MoEn_newtop() {
  $(".area_newstop").mouseenter(function() {
    setMoEnStatus(true);
  });
  $(".cast_link .cl_a").mouseenter(function() {
    setMoEnStatus(true);
  });
}
function MoEn_newsstand() {
  $(".area_newsstand .api_list").mouseenter(function() {
    setMoEnStatus(true);
  });
}
// Mouse Leave
function MoLe_newstop() {
  $(".area_newstop").mouseleave(function() {
    setMoEnStatus(false);
  });
  $(".cast_link .cl_a").mouseleave(function() {
    setMoEnStatus(false);
  });
}
function MoLe_newsstand() {
  $(".area_newsstand .api_list").mouseleave(function() {
    setMoEnStatus(false);
  });
}
