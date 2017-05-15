$( '.handle').click(function() {
    
  
    $('nav').toggle()

})

$('nav li.Home').click(function() {
  $('header li').css("color","white");
  $('nav li.Home').css('color', '#62c462');
  $('header li').css("font-size","14px");
  $('nav li.Home').css('font-size', '16px');
  
})

$('nav li.About').click(function() {
  $('header li').css("color","white");
  $('nav li.About').css('color', '#62c462');
  $('header li').css("font-size","14px");
  $('nav li.About').css('font-size', '16px');
})

$('nav li.Portfolio').click(function() {
  $('header li').css("color","white");
  $('nav li.Portfolio').css('color', '#62c462');
  $('header li').css("font-size","14px");
  $('nav li.Portfolio').css('font-size', '16px');
})

$('nav li.Social').click(function() {
  $('header li').css("color","white");
  $('nav li.Social').css('color', '#62c462');
  $('header li').css("font-size","14px");
  $('nav li.Social').css('font-size', '16px');
})


$('.thumbnail').hover(
  function(){
    $(this).children('.overlay').toggleClass('hide')
  },
  function(){
    $(this).children('.overlay').toggleClass('hide')
  }
)