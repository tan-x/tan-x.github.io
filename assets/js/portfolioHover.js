$(document).ready(function(){
    $(".item1").hover(function(){
      $("#img1").css("filter", "opacity(85%)");
      }, function(){
      $("#img1").css("filter", "opacity(60%) blur(4px)");
    });

    $(".item2").hover(function(){
      $("#img2").css("filter", "opacity(85%)");
      }, function(){
      $("#img2").css("filter", "opacity(60%) blur(4px)");
    });

    $(".item3").hover(function(){
      $("#img3").css("filter", "opacity(85%)");
      }, function(){
      $("#img3").css("filter", "opacity(60%) blur(4px)");
    });

    $(".item4").hover(function(){
      $("#img4").css("filter", "opacity(85%)");
      }, function(){
      $("#img4").css("filter", "opacity(60%) blur(4px)");
    });

    $(".item5").hover(function(){
      $("#img5").css("filter", "opacity(85%)");
      }, function(){
      $("#img5").css("filter", "opacity(60%) blur(4px)");
    });

    $(".item6").hover(function(){
      $("#img6").css("filter", "opacity(85%)");
      }, function(){
      $("#img6").css("filter", "opacity(60%) blur(4px)");
    });
  
  });

$(window).on('scroll', function () {
    var pixs = $(document).scrollTop()
    pixs = pixs / 100;
    $(".smhead").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })   
});

$(window).on('scroll', function () {
    var pixs = $(document).scrollTop()
    pixs = pixs / 100;
    $(".masthead").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })     
});

