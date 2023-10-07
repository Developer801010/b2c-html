(function($) {
	
	"use strict";

	//Nav Bar dropdown
	$('.dropdown').hover(function () {
		$(this).addClass('show');
		$(this).find('.dropdown-menu').addClass('show');
	}, function () {
		$(this).removeClass('show');
		$(this).find('.dropdown-menu').removeClass('show');
	});
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 1) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();

	//Mobile Menu Config
	function mobileMenuConfig() {
		var menuWrap = $('.nav-box .main-menu');
		var WWidth = $(window).width();
		//alert(WWidth);
		// appending expander button
		$('.nav-box .main-menu ul li.dropdown > a').append(function () {
			return '<button type="button" class="btn expander"><i class="icon fa fa-angle-down"></i></button>';
		});
		// hide submenu
		if ($(WWidth) < 992){
			menuWrap.find('.dropdown').children('ul').hide();	
		}
		// toggling child ul
		menuWrap.find('.btn.expander').each(function () {
			$(this).on('click', function () {
				$(this).parent() // return parent of .btn.expander (a)
					.parent() // return parent of a (li)
						.children('ul').slideToggle();

				// adding class to expander container
				$(this).parent().toggleClass('current');
				// toggling arrow of expander
				$(this).find('i').toggleClass('fa-angle-up fa-angle-down');

				return false;

			});
		});
	}

	mobileMenuConfig();

	//Mobile Navbar Hide / Show
	if ($('.hidden-bar-opener').length) {
		$('.hidden-bar-opener').on('click', function () {
			$('body').toggleClass('m-nav-open');
			$('.main-header .nav-outer').slideToggle();
		});

		//On Escape Keypress
		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
	            $('body').removeClass('m-nav-open');
					$('.main-header .nav-outer').slideUp();
	        }
	    });
	}

	$(window).on('scroll', function() {
		var windowpos = $(window).scrollTop();
		var stickyNewsSearch = $('.news-search-section');
		var stickyCaseSearch = $('.case-search-section');
		//news search navigation sticky
		if($('.news-search-section').length){
			if(windowpos>=750){
				stickyNewsSearch.addClass('sticky-news-search');
			}else{
				stickyNewsSearch.removeClass('sticky-news-search');
			}
		}	
		//case studies search navigation sticky

    });

	//Case studies banner Slick
	$(document).ready(function(){
		if($('.careers-container').length){
			$('.careers-container').slick({
				autoplay: true,
				autoplaySpeed: 3000,
			});	
		}
		
	});

	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function(e) {
			e.preventDefault();
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top-90
			 }, 1500);
	
		});
	}

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	
	
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});

/* ==========================================================================
   When document is Resized
   ========================================================================== */
	
	$(window).on('resize', function() {
		var winWidth = $(window).width();

		if (winWidth < 768){
			$('.course-tabs .tab-buttons .tab-btn:first-child').addClass('active-btn');
			$('.course-tabs .tabs-content .tab:first-child').addClass('active-tab');
		};
	});
	
	

})(window.jQuery);