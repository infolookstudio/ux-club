(function ($) {
    'use strict';

    $(window).on("load", function() {
		background()
		// checkSize();
	    // $(window).resize(checkSize);
	    
	    //preloader
	    $("#preloader").delay(300).animate({
	      "opacity" : "0"
	      }, 500, function() {
	      $("#preloader").css("display","none");
	    });

	  });

	  $('select').niceSelect();

	  // Activate lightcase
	  $('a[data-rel^=lightcase]').lightcase();

    // background image
	function background() {
			var img=$('.bg_img');
			img.css('background-image', function () {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}

	// addclass & removeclass
	$(".sideicon").on("click", function () {
		$(".overlayed, .sidebarlists").addClass("actives");
	});

	$(".overlayed, .crossbars").on("click", function () {
		$(".sidebarlists, .overlayed").removeClass("actives");
	});

	$(".rocket-by a.bkashh1").on("click", function () {
		$("a.bkashh1").addClass("active");
	});

	$(".rocket-by a.rocketts").on("click", function () {
		$("a.bkashh1").removeClass("active");
	});

	$(".rocket-by a.rocketts").on("click", function () {
		$("a.rocketts").addClass("active");
	});

	$(".rocket-by a.bkashh1").on("click", function () {
		$("a.rocketts").removeClass("active");
	});

	$(".rocket-by a.bkashh1").on("click", function () {
		$(".bkash").addClass("active");
	});

	$(".rocket-by a.rocketts").on("click", function () {
		$(".bkash").removeClass("active");
	});

	$(".rocket-by a.rocketts").on("click", function () {
		$(".rocket").addClass("active");
	});

	$(".rocket-by a.bkashh1").on("click", function () {
		$(".rocket").removeClass("active");
	});

	$(".single-video-left .content a").on("click", function () {
		$(".single-video-left .content .nav-link").removeClass("active");
		$(".single-video-left .content .nav-link").removeClass("active");
	});

	$(".collapse-bt").on("click", function () {
		$(".course-video.course-inner-page .col-md-5").addClass("active");
		$(".course-video.course-inner-page .col-md-7").addClass("full-width");
	});

	// Activate owlCarousel
	$('.related-course-carousel').owlCarousel({
		items: 3,
		loop: false,
		margin: 20,
		smartSpeed: 800,
		nav: true,
		dots: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			}
		}
	});

	// menu options custom affix
	var fixed_top = $(".header-area");
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 70) {
			fixed_top.addClass("animated fadeInDown sticky");
		} else {
			fixed_top.removeClass("animated fadeInDown sticky");
		}
	});


})(jQuery);