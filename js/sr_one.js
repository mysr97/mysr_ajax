
// qna
$(function(){
    $("#main_m8 > .m8_qna > div > div:nth-of-type(1) > img").click(function(){
        $(this).parent().siblings().slideToggle("fast"); // 클릭한 img의 부모의 형제를 찾아서 슬라이드 토글.
    });
 });


 //slide1
 $(function(){

    var width = $( '.inner > div' ).innerWidth() / $( '.in1 > div' ).children().length - 25;

    $(".m6_btn1 > button:nth-of-type(1)").click(function(){
        $(".inner > div").animate({left: 0},"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("하루의 시작과 마무리를 오디오북과 함께" + "<br/>" + "지하철에서도, 잠들기 전에도 독서하세요");
        $(".m6_btn1 > button").removeClass("active");
        $(this).addClass("active");
    });
    $(".m6_btn1 > button:nth-of-type(2)").click(function(){
        $(".inner > div").animate({left: - width },"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("귀로 듣다가 눈으로도 같이 보면" + "<br/>" + "더 내용이 잘 이해돼요");
        $(".m6_btn1 > button").removeClass("active");
        $(this).addClass("active");
    });
    $(".m6_btn1 > button:nth-of-type(3)").click(function(){
        $(".inner > div").animate({left: - width * 2 },"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("30분만에 책 요약" + "<br/>" + "핵심만 쏙 골라 읽어주는 오디오북");
        $(".m6_btn1 > button").removeClass("active");
        $(this).addClass("active");
    });
    $(".m6_btn1 > button:nth-of-type(4)").click(function(){
        $(".inner > div").animate({left: - width * 3 },"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("이제훈부터 옥주현까지" + "<br/>" + "셀럽이 읽어주는 오디오북");
        $(".m6_btn1 > button").removeClass("active");
        $(this).addClass("active");
    });
 });


  //slide2
  $(function(){

    var width = $( '.inner > div' ).innerWidth() / $( '.in2 > div' ).children().length - 25;

    $(".m6_s2 > .m6_s > .m6_s_text > .m6_btn1 > button:nth-of-type(1)").click(function(){
        $(".inner > div").animate({left: 0},"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("시선 추적 기능" + "<br/>" + "눈동자로 페이지를 넘길 수 있어요");
        $(".m6_btn1 > button").removeClass("active");
        $(this).addClass("active");
    });
    $(".m6_s2 > .m6_s > .m6_s_text > .m6_btn1 > button:nth-of-type(2)").click(function(){
        $(".inner > div").animate({left: - width },"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("어느 기기에서도 OK" + "<br/>" + "스마트폰, 태블릿, PC, E ink 기기까지");
        $(".m6_btn1 > button").removeClass("active");
        $(this).addClass("active");
    });
    $(".m6_s2 > .m6_s > .m6_s_text > .m6_btn1 > button:nth-of-type(3)").click(function(){
        $(".inner > div").animate({left: - width * 2},"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("다크 모드" + "<br/>" + "전자책이 눈 아프다는 편견은 버려요");
        $(".m6_btn1 > button").removeClass("active");
        $(this).addClass("active");
    });
    $(".m6_s2 > .m6_s > .m6_s_text > .m6_btn1 > button:nth-of-type(4)").click(function(){
        $(".inner > div").animate({left: - width * 3},"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("자유로운 보기 설정" + "<br/>" + "줄간격부터 폰트까지 내 마음대로 설정하면" + "<br/>" + "더욱 편한 독서를 할 수 있어요");
        $(".m6_btn1 > button").removeClass("active");
        $(this).addClass("active");
    });
 });


  //slide3
  $(function(){

    $(".m6_s3 > .m6_s > .m6_s_text > .m6_btn1 > button:nth-of-type(1)").click(function(){
        $(".inner > div").animate({left: 0},"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("당신을 위한 추천" + "<br/>" + "키워드로 한 눈에 정리한 추천 도서");
        $(".m6_btn1 > button").removeClass("active");
        $(this).addClass("active");
    });
    $(".m6_s3 > .m6_s > .m6_s_text > .m6_btn1 > button:nth-of-type(2)").click(function(){
        $(".inner > div").animate({left: - 300},"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("이럴 땐 이런 책" + "<br/>" + "내 상황에 딱 맞는 회원들의 추천 책");
        $(".m6_btn1 > button").removeClass("active");
        $(this).addClass("active");
    });
    $(".m6_s3 > .m6_s > .m6_s_text > .m6_btn1 > button:nth-of-type(3)").click(function(){
        $(".inner > div").animate({left: - 610},"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("책-잇" + "<br/>" + "책을 통해 트렌드와 문해력을 한번에!");
        $(".m6_btn1 > button").removeClass("active");
        $(this).addClass("active");
    });
 });


 //m6_menu
 $(function(){
    $(".m6_menu > li:nth-of-type(1)").click(function(){
        $(".m6_menu > li").removeClass("li_act");
        $(this).addClass("li_act");
        $(".m6_s3").hide();
        $(".m6_s2").hide();
        $(".m6_s1").show();
        $(".m6_btn1 > button:nth-of-type(1)").addClass("active");
        $(".inner > div").animate({left: 0},"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("하루의 시작과 마무리를 오디오북과 함께" + "<br/>" + "지하철에서도, 잠들기 전에도 독서하세요");
    });
    $(".m6_menu > li:nth-of-type(2)").click(function(){
        $(".m6_menu > li").removeClass("li_act");
        $(this).addClass("li_act");
        $(".m6_s3").hide();
        $(".m6_s1").hide();
        $(".m6_s2").show();
        $(".m6_btn1 > button:nth-of-type(1)").addClass("active");
        $(".inner > div").animate({left: 0},"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("시선 추적 기능" + "<br/>" + "눈동자로 페이지를 넘길 수 있어요");
    });
    $(".m6_menu > li:nth-of-type(3)").click(function(){
        $(".m6_menu > li").removeClass("li_act");
        $(this).addClass("li_act");
        $(".m6_s2").hide();
        $(".m6_s1").hide();
        $(".m6_s3").show();
        $(".m6_btn1 > button:nth-of-type(1)").addClass("active");
        $(".inner > div").animate({left: 0},"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("당신을 위한 추천" + "<br/>" + "키워드로 한 눈에 정리한 추천 도서");
    });
 });



 // 애니메이션

 $(function(){
    $(".main_t_text > h2").animate({
        opacity : 1,
        'background-position-x': '0%',
        'background-position-y': '0%'
    } ,900);

    $(".main_t_text > h3").animate({
        opacity : 1,
        'background-position-x': '0%',
        'background-position-y': '0%'
    },500);
    
 }); 

 //윈도우 스크롤 애니메이션
$(window).on("scroll", function(){

    var m1 = $("#main_m1").offset().top -450;
    var m2 = $("#main_m2").offset().top -450;
    var m3 = $("#main_m3").offset().top -450;
    var m4 = $("#main_m4").offset().top -450;
    var m5 = $("#main_m5").offset().top -450;
    var m6 = $("#main_m6").offset().top -450;
    var m7 = $("#main_m7").offset().top -500;

    if($(window).scrollTop() >= m1 ) {
        $(".main_m1_text > h4").animate({
            opacity : 1,
            'top': '0'
        },750);
        $(".main_m1_text > p").animate({
            opacity : 1,
            'top': '0'
        },550);
    }

    if($(window).scrollTop() >= m2 ) {
        $(".main_m2_text > h4").animate({
            opacity : 1,
            'top': '0'
        },750);
        $(".main_m2_text > p").animate({
            opacity : 1,
            'top': '0'
        },550);
    }

    if($(window).scrollTop() >= m3 ) {
        $(".main_m3_text > h4").animate({
            opacity : 1,
            'top': '0'
        },750);
        $(".main_m3_text > p").animate({
            opacity : 1,
            'top': '0'
        },550);
    }
    
    if($(window).scrollTop() >= m4 ) {
        $(".main_m4_text > h4").animate({
            opacity : 1,
            'top': '0'
        },750);
        $(".main_m4_text > p").animate({
            opacity : 1,
            'top': '0'
        },550);
    }

    if($(window).scrollTop() >= m5 ) {
        $(".main_m5_text > h4").animate({
            opacity : 1,
            'top': '0'
        },750);
        $(".main_m5_text > p").animate({
            opacity : 1,
            'top': '0'
        },550);
    }


    if($(window).scrollTop() >= m4 ) {
        $(".main_m4_motion > div:nth-of-type(3)").stop().animate({
            opacity : 1,
            'top': '70%',
            'width' : '450px'
        },550);
        $(".main_m4_motion > div:nth-of-type(4)").stop().animate({
            opacity : 1,
            'top': '45%',
            'width' : '450px'
        },550);
        $(".main_m4_motion > div:nth-of-type(5)").stop().animate({
            opacity : 1,
            'top': '45%',
            'width' : '450px'
        },550);
        $(".main_m4_motion > div:nth-of-type(6)").stop().animate({
            opacity : 1,
            'top': '70%',
            'width' : '450px'
        },550);
    }

    if($(window).scrollTop() >= m6 ) {
        $(".m6_s_text > h5").animate({
            opacity : 1,
            'top': '0'
        },550);
        $(".m6_s_text > p:nth-of-type(1)").animate({
            opacity : 1,
            'top': '0'
        },550);
        $(".m6_s_slide_box").animate({
            opacity : 1,
            'top': '0'
        },650);
    }

    if($(window).scrollTop() >= m7 ) {
        $(".m7_text > h5").animate({
            opacity : 1,
            'top': '0'
        },550);
        $(".m7_text > p").animate({
            opacity : 1,
            'top': '0'
        },550);
    }

});
