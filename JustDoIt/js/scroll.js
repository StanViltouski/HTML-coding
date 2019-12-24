$(function () {
    

/*==========================================================
        scroll menu
======================================================================*/

$(function () {

  $('.nav_scroll').on('click', function () {
      
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
      
    }
           
  });
}());
    
    
    //для счетчика в блоке достижения
    
    var blocking = false; //блокировка от повторного пересчета
    
    function autoCounter() {
             var count1 = 1925,
                 count2 = 0,
                 count3 = 1625,
                 count4 = 425;
                 setInterval(function () {
                     if (count4 < 500) {
                         $(".counter1").html("Более " + (++count1));
                         $(".counter2").html("До " + (++count2)+"%");
                         $(".counter3").html("Более " + (++count3)+"$");
                         $(".counter4").html("Более " + (++count4));
                     }
                 }, 30);
        
                 blocking = true;
             };
    
     
$(window).on('scroll', function() {
    
    var scrollValue = $(window).scrollTop();
    
    
     //движение background 
       var movement = parseInt($(this).scrollTop() / 10);
       $('.main').css({
           backgroundPosition: 1500 + movement + 'px'
       });
    

    //desktop menu
    if (scrollValue > 250) {
        $('.cap_logo').addClass('fixed-top').css({
            'padding-left': '5%',
            'padding-top': '7px'
          });
         $('#main_nav').addClass('fixed-top').css({
             'background': 'rgba(0,0,0,0.9)',
         });
    } else {
        $('.cap_logo').removeClass('fixed-top').css('padding', '');
        $('#main_nav').removeClass('fixed-top').css('background', '');
    }
    
    
    //mobile menu
     if (scrollValue > 250) {
         $('#mobile_nav').addClass('fixed-top').css('background', 'rgba(0,0,0,0.9)');
    } else {
        $('#mobile_nav').removeClass('fixed-top').css('background', '');
    }
 
    
    //fade текста
    if (scrollValue > 300) {$('.choiceBlockItem_text p').fadeTo(1000, 1).addClass('show');} 
    
    if (scrollValue > 2500) {$('.reviewsBlockItem_text p').fadeTo(1000, 1).addClass('show');} 
    
    if (scrollValue > 3100 && blocking === false) {$('.progressBlock_item p').fadeTo(1000, 1).addClass('show');
    autoCounter();
    }
    
});
});

