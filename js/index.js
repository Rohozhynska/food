

let tabs = $('.tabs');
let items = $('.tabs').find('a').length;
let selector = $(".tabs").find(".selector");
let activeItem = tabs.find('.active');
let activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".tabs").on("click","a",function(){
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  let activeWidth = $(this).innerWidth();
  let itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
     });
 
});
$("#all").click(function(){
        $(".recepts_popular").show();
        $(".recepts_recomended").show();
        $(".recepts_new").show();
        
    });
$("#new").click(function(){
        $(".recepts_popular").hide();
        $(".recepts_recomended").hide();
        $(".recepts_new").show();
    });
$("#popular").click(function(){
        $(".recepts_recomended").hide();
        $(".recepts_popular").show();
        $(".recepts_new").hide();
    });
    
$("#recomended").click(function(){
        $(".recepts_popular").hide();
        $(".recepts_recomended").show();
        $(".recepts_new").hide();
    });

$(document).ready(function(){
$('.carusel-slide').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 1000,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2500,
});
});
 