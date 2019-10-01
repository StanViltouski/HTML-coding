'use strict';

(function ($) {
	"use strict";

	$.fn.myOwl = function (options) {

		var settings = $.extend({
			items: 1,
			dots: false,
			loop: true,
			mouseDrag: true,
			touchDrag: true,
			nav: false,
			autoplay: true,
			navText: ['', ''],
			margin: 0,
			stagePadding: 0,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			navRewind: false,
			responsive: {},
			animateOut: '',
			animateIn: '',
			center: '',
			merge: '',
			autoWidth: ''
		}, options);

		return this.owlCarousel({
			items: settings.items,
			loop: settings.loop,
			mouseDrag: settings.mouseDrag,
			touchDrag: settings.touchDrag,
			nav: settings.nav,
			navText: settings.navText,
			dots: settings.dots,
			margin: settings.margin,
			stagePadding: settings.stagePadding,
			autoplay: settings.autoplay,
			autoplayTimeout: settings.autoplayTimeout,
			autoplayHoverPause: settings.autoplayHoverPause,
			animateOut: settings.animateOut,
			animateIn: settings.animateIn,
			responsive: settings.responsive,
			navRewind: settings.navRewind,
			center: settings.center,
			merge: settings.merge,
			autoWidth: settings.autoWidth
		});
	};

/*==========================================================
 				 email regular expression pattern
 ======================================================================*/

	function email_pattern(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	
/*==========================================================
  			scroll menu
======================================================================*/

		$('.nav_scroll').on('click', function () {
		    
		    var widthWindow = $(window).innerWidth();
		    
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
			    
			    if(widthWindow <= 992) {
			        
			        $('body').removeClass('no-scroll');
    
			        $('.nav-menus-wrapper').removeClass('nav-menus-wrapper-open');
		
			        $('.nav-overlay-panel').css({
				        'display': 'none',
				        'backgroundColor': '',
			        });
			        
		        }

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
			


	/* start on load */
	$(window).on('load', function () {

/*=============================================================
  		 portfolio slider
=========================================================================*/

		if ($('.books-portfolio-slider').length > 0) {
			$('.books-portfolio-slider').myOwl({
				items: 5,
				nav: false,
				responsive: {
					0: {
						items: 2,
						autoWidth: false
					},
					// breakpoint from 480 up
					480: {
						items: 3,
						autoWidth: false
					},
					// breakpoint from 768 up
					768: {
						items: 4,
						autoWidth: false
					},
					1024: {
						items: 5,
						autoWidth: false
					}
				}
			});
		}
	}); // END load Function

	/* start document ready */
	$(document).ready(function () {

/*==========================================================
  		 mega navigation menu init
======================================================================*/

		if ($('.xs-menus').length > 0) {
			$('.xs-menus').xs_nav({
				mobileBreakpoint: 992
			});
		}
		if ($('.xs-hidden-menus').length > 0) {
			$('.xs-hidden-menus').xs_nav({
				hidden: true,
				offCanvasSide: "right"
			});
			$(".offsetmenu-btn").on('click', function () {
				$(".xs-hidden-menus").data("xs_nav").toggleOffcanvas();
			});
		}

		var widthWindow = $(window).innerWidth(),
		 	elementsMenu = $('.nav-menu li a, .lang-title'),
			buttonMobile = $('.button-request-mob');

		if(widthWindow <= 992) {
			$(elementsMenu).css('color', '#252525');
			$(buttonMobile).css({
				'backgroundColor' : '#ff2fff',
				'border' : '1px solid #ff2fff',
			})
		}



/*==========================================================
  			 contact form init
======================================================================*/

		$(document).on('submit', '#xs-contact-form', function (event) {
			event.preventDefault();
			/* Act on the event */

			var xs_contact_name = $('#xs_contact_name'),
			    xs_contact_email = $('#xs_contact_email'),
			    x_contact_massage = $('#x_contact_massage'),
			    xs_contact_submit = $('#xs_contact_submit'),
			    xs_contact_error = false;

			$('.xpeedStudio_success_message').remove();

			if (xs_contact_name.length > 0) {
				if (xs_contact_name.val().trim() === '') {
					xs_contact_name.addClass('invaild');
					xs_contact_error = true;
					xs_contact_name.focus();
					return false;
				} else {
					xs_contact_name.removeClass('invaild');
				}
			}

			if (xs_contact_email.length > 0) {
				if (xs_contact_email.val().trim() === '') {
					xs_contact_email.addClass('invaild');
					xs_contact_error = true;
					xs_contact_email.focus();
					return false;
				} else if (!email_pattern(xs_contact_email.val().toLowerCase())) {
					xs_contact_email.addClass('invaild');
					xs_contact_error = true;
					xs_contact_email.focus();
					return false;
				} else {
					xs_contact_email.removeClass('invaild');
				}
			}

			if (x_contact_massage.length > 0) {
				if (x_contact_massage.val().trim() === '') {
					x_contact_massage.addClass('invaild');
					xs_contact_error = true;
					x_contact_massage.focus();
					return false;
				} else {
					x_contact_massage.removeClass('invaild');
				}
			}

			if (xs_contact_error === false) {
				xs_contact_submit.before().hide().fadeIn();
				$.ajax({
					type: "POST",
					url: "assets/php/contact-form.php",
					data: {
						'xs_contact_name': xs_contact_name.val(),
						'xs_contact_email': xs_contact_email.val(),
						'x_contact_massage': x_contact_massage.val()
					},
					success: function success(result) {
						xs_contact_submit.after('<p class="xpeedStudio_success_message">' + result + '</p>').hide().fadeIn();

						setTimeout(function () {
							$(".xpeedStudio_success_message").fadeOut(1000, function () {
								$(this).remove();
							});
						}, 5000);

						$('#xs-contact-form')[0].reset();
					}
				});
			}
		});

/*=============================================================
  		 header fixed
=========================================================================*/

$(function () {

  $(window).on('scroll', function() {

  	var headerHeight = parseInt($('.xs-menus').css('height')),
  		widthWindow = $(window).innerWidth(),
    	scrollValue = $(window).scrollTop();

    if(widthWindow > 992) {
    
      	if (scrollValue > headerHeight) {

        	$('.xs-menus ').addClass('fixed-top').css({
        	'backgroundImage' : 'linear-gradient(to right, #660066, #b700b7)',
        	'padding' : '0 5%',
       	});

      	} else {

        	$('.xs-menus ').removeClass('fixed-top').css({
        	'backgroundImage' : '',
        	'padding' : '',
        	});
   		}
   	}

   	if(widthWindow <= 992) {

   		if (scrollValue > headerHeight) { 

   			$('.xs_nav-portrait').addClass('fixed-top').css({
   				'position' : 'fixed',
   				'padding-left' : '15px',
   				'backgroundImage' : 'linear-gradient(to right, #660066, #b700b7)',
   			});

   		} else {

   			$('.xs_nav-portrait').removeClass('fixed-top').css({
   				'position' : 'relative',
   				'padding' : '',
   				'backgroundImage' : '',
   			});
   		}

   	}  			

  });

});


/*==========================================================
  		 video popup init
======================================================================*/
    $(document).ready( function() {
		if ($('.xs-video-popup').length > 0) {
			$('.xs-video-popup').magnificPopup({
				disableOn: null,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		}
    });

/*=============================================================
  		 modal popup


		if ($('.xs-modal-popup').length > 0) {
			$('.xs-modal-popup').magnificPopup({
				type: 'inline',
				fixedContentPos: false,
				fixedBgPos: true,
				overflowY: 'auto',
				closeBtnInside: false,
				callbacks: {
					beforeOpen: function beforeOpen() {
						this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
					}
				}
			});
		}
=========================================================================*/
/*==========================================================
  			 product slider
======================================================================*/

		if ($('.product-slider, .about-slider, .apps-slider').length > 0) {
			$('.product-slider, .about-slider, .apps-slider').myOwl({
				dots: true,
				responsive: {
					0: {
						dots: false
					},
					991: {
						dots: true
					}
				}
			});
		}

/*==========================================================
  			 rev_slider_16_1_wrapper"
======================================================================*/

		var revapi16, tpj;
		(function () {
			if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad);else onLoad();

			function onLoad() {
				if (tpj === undefined) {
					tpj = jQuery;if ("off" == "on") tpj.noConflict();
				}
				if (tpj("#rev_slider_16_1").revolution == undefined) {
					revslider_showDoubleJqueryError("#rev_slider_16_1");
				} else {
					revapi16 = tpj("#rev_slider_16_1").show().revolution({
						sliderType: "hero",
						jsFileLocation: "",
						sliderLayout: "fullwidth",
						dottedOverlay: "none",
						delay: 9000,
						navigation: {},
						responsiveLevels: [1240, 1024, 778, 480],
						visibilityLevels: [1240, 1024, 778, 480],
						gridwidth: [1240, 1024, 778, 480],
						gridheight: [868, 768, 960, 720],
						lazyType: "none",
						parallax: {
							type: "mouse",
							origo: "enterpoint",
							speed: 400,
							speedbg: 0,
							speedls: 0,
							levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
							disable_onmobile: "on"
						},
						shadow: 0,
						spinner: "spinner0",
						autoHeight: "off",
						disableProgressBar: "on",
						hideThumbsOnMobile: "off",
						hideSliderAtLimit: 0,
						hideCaptionAtLimit: 0,
						hideAllCaptionAtLilmit: 0,
						debugMode: false,
						fallbacks: {
							simplifyAll: "off",
							disableFocusListener: false
						}
					});
				}; /* END OF revapi call */
			}; /* END OF ON LOAD FUNCTION */
		})(); /* END OF WRAPPING FUNCTION */

	}); // end ready function

})(jQuery);