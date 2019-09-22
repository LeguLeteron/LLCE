content();

function content() {
  makeSideBar();
  imgCheck();
  textCheck();
  $("*").addClass("legu-element");
}

function imgCheck() {
  var imgStatus = false;

  function styleSideBar() {
    $("#leguSideBar").removeClass("legu-element");
    if (imgStatus == true) {
      $("#leguSideBar").removeClass("legu-sideBar");
      $("#leguSideBar").removeClass("legu-sideBar-text");
      $("#leguSideBar").addClass("legu-sideBar-img");
    } else if (imgStatus == false) {
      $("#leguSideBar").removeClass("legu-sideBar-img");
      $("#leguSideBar").addClass("legu-sideBar");
    }
  }

  function tagStatus(img) {
    imgStatus = img;
    console.log("img :" + imgStatus);
    styleSideBar();
  }

  $("img").each(function() {
    $(this).mouseenter(function() {
      tagStatus(true);
    });
    $(this).mouseleave(function() {
      tagStatus(false);
    });
  });
  $("a").each(function() {
    if ($(this).find("img").length) {
      $(this).mouseenter(function() {
        tagStatus(true);
      });
      $(this).mouseleave(function() {
        tagStatus(false);
      });
    }
  });
  $("div").each(function() {
    if ($(this).find(">a img").length) {
      $(this).mouseenter(function() {
        tagStatus(true);
      });
      $(this).mouseleave(function() {
        tagStatus(false);
      });
    }
  });
}
function textCheck() {
  var textStatus = false;

  function styleSideBar() {
    $("#leguSideBar").removeClass("legu-element");
    if (textStatus == true) {
      $("#leguSideBar").removeClass("legu-sideBar");
      $("#leguSideBar").removeClass("legu-sideBar-img");
      $("#leguSideBar").addClass("legu-sideBar-text");
    } else if (textStatus == false) {
      $("#leguSideBar").removeClass("legu-sideBar-text");
      $("#leguSideBar").addClass("legu-sideBar");
    }
  }

  function tagStatus(text) {
    textStatus = text;
    console.log("text :" + textStatus);
    styleSideBar();
  }

  $("*").each(function() {});
}

function makeSideBar() {
  $("body").append(
    $("<div/>", {
      id: "leguSideBar",
      class: "legu-sideBar",
      text: "SIDE BAR"
    })
  );
  $("#leguSideBar").removeClass("legu-element");
}
