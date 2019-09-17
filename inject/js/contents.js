$(document).ready(function() {
  //mouseover시 legu-mouseover 클래스 추가
  $("*").mouseenter(function() {
    var name = $(this).prop("tagName");
    if (name !== "DIV") {
      /*
      if ($(this).text()) {
        $(this).addClass("legu-mouseover");
      }*/
      $(this).addClass("legu-mouseover");
    }
  });

  //mouse out 시 legu-mouseover 클래스 삭제
  $("*").mouseleave(function() {
    var name = $(this).prop("tagName");
    if (name !== "DIV") {
      $(this).removeClass("legu-mouseover");
    }
  });

  // 페이지 내에서 <a> 태그 다 가져와 legu-link 클래스 추가
  var aLinks = getTotalElem("a");
  for (var i = 0; i < aLinks.length; i++) {
    $(aLinks[i]).addClass("legu-link");
  }
});

//getToalElem함수 참고: https://bloodguy.tistory.com/entry/JavaScript-jQuery-전체-document의-element-다-가져오기-select-topdocument-element [Bloodguy]
function getTotalElem(selector, root, col) {
  // root가 없으면 top.document
  if (!root) root = $(top.document);
  if (!col) col = $();
  // element select
  col = col.add(root.find(selector));
  // frame 전부 뒤지기
  root.find("iframe, frame").each(function() {
    // TODO same origin 체크를 해야함.
    // $(this)[0].src 에서 hostname을 추출해서 하는 방법 원츄
    var tag_name = $(this)[0].tagName.toLowerCase();
    var contents = null;
    // frame
    if (tag_name === "frame")
      contents = $($(this)[0].contentDocument).contents();
    // iframe
    else contents = $(this).contents();
    col = col.add(getTotalElem(selector, contents, col));
  });
  return col;
}
