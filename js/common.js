$(function() {
  // 처음 로드 됐을때 마우스 이벤트 함수를 실행한다.
  mouseEventFunc();

  // 처음 로드가 되면 윈도우 사이즈를 파악 후에 마우스이벤트 함수를 on/off를 결정한다.
  var winWidth = $(window).width();
  if(winWidth >= 1600){
    mouseEventFunc();
    onFunc();
  }
  else{
    offFunc();
  }

  //리사이즈 됐을때 브라우저 크기를 파악 후에 마우스 이벤트 함수를 on/off를 결정한다.
  $(window).on("resize",function(){
    winWidth = $(window).width();
    if(winWidth >= 1600){
      mouseEventFunc();
      onFunc();
    }
    else{
      offFunc();
    }
  });
/*
  function onFunc(){
    $("#header").bind("mouseenter");
    $(".topmenu").bind("mouseenter");
    $(".submenu a").bind("mouseenter");
    $("#gnb ul li .submenu").bind("mouseenter");

    $("#header").bind("mouseleave");
    $(".topmenu").bind("mouseleave");
    $(".submenu a").bind("mouseleave");
    $("#gnb ul li .submenu").bind("mouseleave");
  }
  function offFunc(){
    $("#header").unbind("mouseenter");
    $(".topmenu").unbind("mouseenter");
    $(".submenu a").unbind("mouseenter");
    $("#gnb ul li .submenu").unbind("mouseenter");

    $("#header").unbind("mouseleave");
    $(".topmenu").unbind("mouseleave");
    $(".submenu a").unbind("mouseleave");
    $("#gnb ul li .submenu").unbind("mouseleave");

    $(".submenu").css("display","block");
  }
  */
  function mouseEventFunc(){
    // 상단메뉴 마우스가 진입했을때 글자색이 빨간색으로 변경
    $(".topmenu").mouseenter(function(){
        $(this).css("color","red");
    }).mouseleave(function(){
        $(this).css("color","#000");
    });
    // 서브메뉴 마우스가 진입했을때 a태그 언더라인 생성
    $(".submenu a").mouseenter(function(){
        $(this).css("text-decoration","underline");
    }).mouseleave(function(){
        $(this).css("text-decoration","none");
    });
    // 서브메뉴 마우스가 진입했을때 상단메뉴 글자색이 빨간색으로 변경
    $("#gnb ul li .submenu").mouseenter(function(){
      $(this).parent().prev().css("color","red");
    }).mouseleave(function(){
      $(this).parent().prev().css("color","#000")
    });
  }

  $('#footer').load('./footer.html .footer-inner');

  // script 서브메뉴 열리기
  // $(".accordion dd:not(:first)").css("display","none");
  // console.log($(".topmenu"));
  // $(".topmenu").click(function(){
  //   let elem = $(this).next('ul').find('.submenu');
  //   if(elem.css("display") == "none"){
  //     elem.slideUp("slow");
  //     elem.slideDown("slow");
  //     console.log(elem.css("display"));
  //   }
  //   else{
  //     elem.slideDown("slow");
  //   }
  // });
});
