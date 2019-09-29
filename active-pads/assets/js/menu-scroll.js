$(function () {
    
   $('.nav_scroll').on('click', function(e){ 

   		e.preventDefault();

   		var widthWindow = $(window).innerWidth();
       	var section = $('.point_menu').eq(e.target.id.charAt() - 1).offset().top;

        $('html').animate({ scrollTop: section+"px"}, 1000); 

        if(widthWindow <= 992) {

			$('.nav-menus-wrapper').removeClass('nav-menus-wrapper-open');
			$('.nav-overlay-panel').css({
				'display': 'none',
				'backgroundColor': '',
			});
		}
                            
   });
})
