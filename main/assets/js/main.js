(function ($) {
 "use strict";

/*
  STICKY
================================== */

	$(window).on('scroll',function() {
		var scroll = $(window).scrollTop();
		var AESticky = $('.active-sticky');
		if (scroll < 245) {
			AESticky.removeClass("is-sticky");
		}
		else{
			AESticky.addClass("is-sticky");
		}
	});

/*
  ONE PAGE NAVIGATE
================================== */
	var OnePNav = $('.onepage-nev');
	var top_offset = OnePNav.height() - -0;
	OnePNav.onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});

/*
  EXPEND MENU
================================== */

	var CloseMu = $('.close-menu');
	var ExMu = $('.mainmenu-expand');
	var ExMuOp = $('.expand-menu-open');
	CloseMu.on('click', function(){
		$(this).parent(ExMu).removeClass('slide_right');
	});
	ExMuOp.on('click', function(){
		CloseMu.parent(ExMu).addClass('slide_right');
	});

/*
  PROGRESS WITH WAYPOINT ACTIVE
================================== */

	var ProWey = $('.skill-progress');
    if (ProWey.length > 0) {
        ProWey.waypoint(function () {
			jQuery('.skill-bar').each(function() {
				var percentage = jQuery(this).attr('data-percentage');
				var numericValue = parseInt(percentage, 10);

				jQuery(this).find('.progress-content').animate({
					width: percentage
				},2000);

				jQuery(this).find('.progress-outter').attr('aria-valuenow', numericValue);

				jQuery(this).find('.progress-mark').animate(
				{left: percentage},
			{
				duration: 2150,
				step: function(now, fx) {
					var data = Math.round(now);
					jQuery(this).find('.percent').html(data + '%');
				}
			});

			});
		}, {offset: '90%'});
	}

/*
 ISOTOPE ACTIVE
================================ */

	// isotope menu
	var ProjMli = $('.portfolio-menu li');
	var ProjGrid = $('.portfolio-grid');
	ProjMli.on('click', function(){
	ProjMli.removeClass("active");
	  $(this).addClass("active");
		var selector = $(this).attr('data-filter');
		ProjGrid.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
	});

/*
 fancybox Popup
================================ */
	$('.fancybox').fancybox({
		openEffect: 'fade',
		closeEffect: 'fade',
        padding : 0,

		closeBtn: true,

		helpers: {
			title: {
				type: 'inside'
			},
			buttons: {},
			overlay: {
			  locked: false
			}
		}
    });

/*
	SLICK CAROUSEL AS NAV
===================================*/

	$('.one-item').slick({
		dots: true,
		arrows: false,
	});


})(jQuery);

/*
	LODING BAR
================================ */

jQuery(window).on('load', function(){

	//Preloader
	var preeLoad = $('#loading');
	preeLoad.fadeOut(1000);

	// isotope grid
	var IsoGriddoload = $('.portfolio-grid');
	IsoGriddoload.isotope({
		itemSelector: '.grid-item',
		masonryHorizontal: {
			rowHeight: 100
		}
	});
});
